/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var myMap = new Map();
  var arr = arr1.concat(arr2);
  var newArr = [];
  for(var i=0; i<arr.length; i++) {
    if(myMap.has(arr[i])) {
      var count = myMap.get(arr[i]);
      myMap.set(arr[i], count + 1);
    }
    else {
      myMap.set(arr[i], 0);
    }
  }
  myMap.forEach(function(value, key, z) {
    console.log(key + ": " + value);
    if(value === 0) {
      newArr.push(key);
    }
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
