function makanTerusRekursif(waktu) {
  var total = 0;
  if (waktu <= 0) {
    return total;
  } else {
    if (waktu <= 15 && waktu > 0) {
      waktu = waktu - waktu;
    } else {
      waktu = waktu - 15;
    }
    total = total + 1;
    return total + makanTerusRekursif(waktu);
    
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0