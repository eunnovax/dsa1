//1. Sum All Numbers in a Range
function sumAll(arr) {
  let minN = Math.min(...arr);
  console.log(minN)
  let maxN = Math.max(...arr);
  let sum = 0;
  for (let i=minN; i <= maxN; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

//2. Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  let newArr1 = arr1.slice();
  let newArr2 = arr2.slice();
  // Same, same; but different.
  for (let i=0; i < arr1.length; i++) {
    for (let j=0; j < arr2.length; j++) {
        console.log("arr1["+i+"]="+ arr1[i]+ " and arr2["+j+"]="+arr2[j]);
        if (arr1[i] === arr2[j]) {
            newArr2.splice(newArr2.indexOf(arr2[j]),1);
            newArr1.splice(newArr1.indexOf(arr1[i]),1);
            console.log(newArr1);
            console.log(newArr2);
        }
    }

  }
  if (newArr1 || newArr2) {
    return newArr1.concat(newArr2);
  } else {
    return newArr2;
  } 
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

