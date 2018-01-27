function kaliTerusRekursif(angka) {
    var strAngka = angka.toString();
    
    if (strAngka.length <= 1) {
      return angka;
    } else {
      var total = 1;
      for(var i = 0;i < strAngka.length; i++) {
        total = total * parseInt(strAngka[i])
      }
      return kaliTerusRekursif(total);     
    }
 }
   
   // TEST CASES
 console.log(kaliTerusRekursif(66)); // 8
 console.log(kaliTerusRekursif(3)); // 3
 console.log(kaliTerusRekursif(24)); // 8
 console.log(kaliTerusRekursif(654)); // 0
 console.log(kaliTerusRekursif(1231)); // 6