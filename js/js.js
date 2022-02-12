function openCity(tabName, b) {
	var i;
	var x = document.getElementsByClassName("tab");
	let Y = document.querySelector('.' + b);
	try {
		let YY = document.querySelector('.active');

		YY.classList.remove('active');
	}
	catch (err) {
	}
	Y.classList.add('active');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "flex";
}

try{
let originalPrice2 = document.querySelector('#db-price').value;
	var calc_price_pack_1 = Number(originalPrice2);
	var calc_price_pack_2 = parseInt(Number(originalPrice2) / 100 * 90);
	var calc_price_pack_3 =parseInt( Number(originalPrice2) / 100 * 85);

	document.querySelector('#price-1').textContent=calc_price_pack_1;
	document.querySelector('#price-3').textContent=calc_price_pack_2;
	document.querySelector('#price-6').textContent=calc_price_pack_3;


}
catch(err) {
}






function packChange(i) {
	let originalPrice = document.querySelector('#db-price').value;
	let qt = document.querySelector('#qt');
	var calc_price = originalPrice;
	if(i==0){
		qt.value=1;
	}
	if(i==1){
		calc_price = parseInt(Number(3*(Number(originalPrice) / 100 * 90)));
		
		qt.value=3;
	}
	if(i==2){
		calc_price = parseInt(Number(6*(Number(originalPrice) / 100 * 85)));
		
		qt.value=6;
	}
	let dbPrice = document.querySelector('#price').textContent=calc_price;
	try{
		let activePack = document.querySelector('.active-pack');
		let pack = document.querySelectorAll('.pack');
		activePack.classList.remove('active-pack');
		
		pack[i].classList.add('active-pack');
	}

	catch(err) {
	 }
}


