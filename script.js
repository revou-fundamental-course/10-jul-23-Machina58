console.log("success");
 function hitung(){

 	//mengambil inputan dari kolom usia
 	let usia = document.getElementById("usia").value;
 	 	//mengambil inputan dari kolom berat
 	let berat = document.getElementById("berat").value;
 	 	//mengambil inputan dari kolom tinggi
 	let tinggidalamcm = document.getElementById("tinggi").value;
 	//mengubah tinggi dari cm ke m
 	let  tinggi = tinggidalamcm / 100;
 	//perhitungan BMI
 	let hasil = berat / (tinggi*tinggi);
 	//.toFixed(2) = untuk membulatkan hasil hingga 2 digit setelah koma
 	hasil = hasil.toFixed(2);

 	console.log(usia);
 	//dibawah ini untuk validasi umur
 	if( usia >=90 ){
 		alert("Harap input usia yang benar :)")
 	}else if( usia >= 18){
 	//mengubah element h1 menjadi value hasil hitungan BMI
 	document.getElementById("hasilhitungan").innerHTML = hasil;
 	event.preventDefault(); 
 	//membuat html tidak ter refresh sendiri setelah menekan button
 	}else{
 		alert("maaf kalkulasi BMI hanya berlaku untuk umur diatas 18 tahun");
 	}
 	//dibawah ini rumus untuk keterangan
 	if(hasil <18.5){
 		document.getElementById("keterangan").innerHTML = "Berat badan anda kurang";
 	}else if(hasil >= 18.5){
 		document.getElementById("keterangan").innerHTML = "Berat badan anda normal";
 	}else if(hasil >= 25){
 		document.getElementById("keterangan").innerHTML = "Berat badan anda berlebih";
 	}else if(hasil >=30){
 		document.getElementById("keterangan").innerHTML = "Berat badan anda obesitas";
 	}
 	event.preventDefault(); 
