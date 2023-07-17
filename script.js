 console.log("123");
 function hitung(){
 	let usia = document.getElementById("usia").value;
 	let berat = document.getElementById("berat").value;
 	let tinggi = document.getElementById("tinggi").value;

 	console.log(usia * berat);
 	console.log(berat);
 	console.log(tinggi);
 	document.getElementById("hasilhitungan").innerHTML = usia;
 	event.preventDefault(); 
 }