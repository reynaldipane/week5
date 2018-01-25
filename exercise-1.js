function mengelompokkanAngka(arr) {
    var ArrGenap    = [];
    var ArrGanjil   = [];
    var Arr3        = [];

    for(var i=0;i<arr.length;i++) {
        if (arr[i] % 2 == 0 && arr[i] % 3 != 0) {
            ArrGenap.push(arr[i]);
        } else if (arr[i] % 2 != 0 && arr[i] % 3 != 0) {
            ArrGanjil.push(arr[i]);
        } else if (arr[i] % 3 == 0) {
            Arr3.push(arr[i]);
        }
    }

    var ArrBalikan = [];
    ArrBalikan.push(ArrGenap);
    ArrBalikan.push(ArrGanjil);
    ArrBalikan.push(Arr3);

    return ArrBalikan;
}
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]