let reversArray = (arr) => {
    var newArray = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
  
console.log(reversArray([1, 2, 3, 4, 5]))