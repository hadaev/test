'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//проверка синтаксиса
		jshint: {
	      options: {
	        reporter: require('jshint-stylish'),
	        strict: true,
	        globalstrict: true
	      },
	      build: ['dist2/js/main.es5.js']
	    },
	    //обьеденение файлов в один
	    concat: {
            options: {
                separator: '\n',
                banner: '/*\nConcatinated js file \n' +
                'Author: Alex \n' +
                'Created Date: <%= grunt.template.today("yyyy-mm-dd") %>' +
                '\n */ \n'
            },
             build: {
			    src: ['src/js/*.js'] ,
             	dest: 'dist/js/main.js'
			}
        },
        //минифицирует файл
		uglify: {
	      options: {
	        banner: '/*\n <%= pkg.description %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
	      },
	      build: {
	        files: {
	          'dist/js/main.min.js': ['dist/js/main.es5.js'] 
	        }
	      }
	    },
	    //конвертирует из 6 в 5
		babel: {
			compile: {
				options: {
					sourceMap: false,
					presets: ['env']
				},
				files: {
					'dist/js/main.es5.js': ['dist/js/main.js']
				}
			}
		},
		//подключения стороннего файла
		nodeunit: {
			tasks: ['compile/compile.js']
		},
		//очищает файл
		clean: {
			test: ['dist/js/*.js']
		},
		//конвертирует
		less: {
	      build: {
	        files: {
	          'dist/css/main.css': 'src/less/default.less'
	        }
	      }
	    },
	    //минифицирует
	    cssmin: {
	      options: {
	        banner: '/*\n <%= pkg.description %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
	      },
	      build: {
	        files: {
	          'dist/css/main.min.css': 'dist/css/main.css'
	        }
	      }
	    },
	    csscomb: {
	        build: {
	            files: {
	                'dist/css/csscomb.css': ['dist/css/main.css']
	            }
	        }
	    },
	    //динамически обновляет
		watch: {
	      stylesheets: {
	        files: ['src/**/*.less'],
	        tasks: ['less', 'cssmin', 'csscomb']
	      },
	      scripts: {
	        files: 'src/js/**/*.js',
	        tasks: ['concat', 'babel', 'uglify', 'jshint']
	      }
	    }
	});
	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-csscomb');
	grunt.registerTask('default', ['clean', 'concat', 'jshint', 'babel', 'nodeunit', 'clean', 'less', 'cssmin', 'uglify', 'csscomb']);
};
