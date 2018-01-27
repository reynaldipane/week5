function totalDigitRekursif(angka) {
  var temp = angka.toString();
  
  if (temp.length <= 1) {
    return angka;
  } else {
    var temp2 = temp.split('');
    temp2.shift();
    temp2 = temp2.join('');
    return parseInt(temp[0]) + totalDigitRekursif(parseInt(temp2));
  }
}
  

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5