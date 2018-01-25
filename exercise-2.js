function changeMe(arr) {
  var objArr = [];
  var titleObject = [];
  for (var i = 0; i < arr.length; i++) {
    var strTitle = i+1 + ". " + arr[i][0] + " " + arr[i][1] + " : ";
    titleObject.push(strTitle);
    
    if (arr[i][3] > 2018 || arr[i][3] == undefined) {
      objArr.push(
      {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: 'Invalid Birth Year'
      })
    } else {
      objArr.push({
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: 2018-arr[i][3]
      })
    }
  }
  
  if (objArr.length > 0) {
        for (var j = 0; j < objArr.length; j++) {
          console.log(titleObject[j] , objArr[j]);
        }      
  } else {
      console.log(objArr);
  }

  
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""