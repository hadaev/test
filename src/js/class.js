class Feet {
	constructor(name){
		this.name = name;
	}
	feetHidden(){
		$('.rabbit').css({'backgroundColor' : '#000', 'color':'#fff', 'padding':'5px'}).text(this.name);
	}
	feetShow(name){
		$('.rabbit')
		.css({'backgroundColor' : '#000', 'color':'red', 'padding':'5px'})
		.text(name);
	}
}
class Hand {
	constructor(name){
		this.name = name;
	}
	feetHidden(){
		$('.rabbit')
		.css({'backgroundColor' : '#666', 'color':'green', 'padding':'5px'})
		.text(this.name);
	}
	feetShow(name){
		$('.rabbit')
		.css({'backgroundColor' : '#666', 'color':'green', 'padding':'5px'})
		.text(name);
	}
}
class Rabbits extends Feet{
	prepare(){
		// let pre = new Feet("rabbit white");
		// pre.feetHidden(); 
		super.feetShow('super puper')
	} 
}
class RabbitTwo{
	prepare(){
		let pre = new Feet("rabbit white");
		pre.feetHidden(); 
	} 
}
(function Service() {
	let prev = new Hand();
	let reb = new Rabbits();
	$('#pion').on('keypress, keyup', function(){
		if ($('#pion').val() === '1') {
			prev.feetShow("qqweerty")
		}else{
			reb.prepare();
		}
	});
	// return
}());


