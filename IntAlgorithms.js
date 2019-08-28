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

//3. Seek and Destroy
function destroyer() {
  // Remove all the values
  let args = [];
  for (let i=0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  let firstArr = args.shift();
  let newArr = [];
  for (let i=0; i < args.length; i++) {
      firstArr = firstArr.filter(item => item !== args[i]);
      console.log('firstArr after filter', newArr);
  }
  return firstArr;      
}

console.log('result', destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//4. Wherefore art thou
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  let criteria = false;
  // Only change code below this line
  // console.log(Object.keys(collection[0])[0]);
  for (let i=0; i < collection.length; i++) {
    let kk = 0;
    for (let j=0; j < Object.keys(collection[i]).length; j++) {
        // console.log(Object.keys(collection[i])[j]);
        
        for (let k=0; k < Object.keys(source).length; k++) {
          console.log('collection objects value', Object.values(collection[i])[j]);
          if ( Object.keys(source)[k] == Object.keys(collection[i])[j] && Object.values(source)[k] == Object.values(collection[i])[j] ) {
          console.log('source object value', Object.values(source)[k]);
          kk++;
          console.log(kk);
          if (kk === Object.keys(source).length) {
            arr.push(collection[i]);
          }
          // console.log(arr);
          }
        }
    }    
  }      
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

//5. Spinal Tap Case
