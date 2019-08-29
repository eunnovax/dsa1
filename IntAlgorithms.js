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
function unConcatenate(str) {
  // if (/[a-z]/.test(str[0])) {
  //   return console.log(true);
  // }
  let uCWords = str.replace(/[a-z]/g,'');
  let lCWords = str.split(/[A-Z]/).filter(item=>item.length !== 0);
  console.log(uCWords, lCWords);
  let newArr = [];
  if (uCWords.length === lCWords.length) {
    for (let i=0; i < uCWords.length; i++) {
    newArr.push(uCWords[i] + lCWords[i]);
  }
  } else if (uCWords.length < lCWords.length) {
    newArr.push(lCWords[0]);
    for (let i=1; i < lCWords.length; i++) {
    newArr.push(uCWords[i-1] + lCWords[i]);
  }
  } 
  
  return newArr;
}
let arr = ['hey', 'Man', 'How', 'Are', 'You'];
console.log(unConcatenate(arr[0]));

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let newArr = [];
  let spinalC = str.trim().split(/[^A-Za-z]/);
  console.log('spinalC', spinalC);

  for (let i=0; i < spinalC.length; i++) {
    console.log(i);
    console.log('newArr',newArr);
    console.log('unconcatenated str', unConcatenate(spinalC[i]));
    newArr = [...newArr, ...unConcatenate(spinalC[i])];
  }
  console.log(newArr[0]);
  let newStr = newArr.join('-').toLowerCase();
  return newStr;
}

console.log(spinalCase("Teletubbies say Eh-oh"));

//alternate solution
// Replace low-upper case to low-space-uppercase
str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

//6. Pig Latin
function translatePigLatin(str) {
  //1. find consonant before vowel
  let vowels = /[aeiou]/gi;
  let consonants = /[^aeiou]/;
  let pigLatin = '';
  //2. take all consonants before vowel to the end and add -ay
  if (vowels.test(str[0])) {
    pigLatin = str + 'way';
    return pigLatin;
  } else {
  let i = 0; let cStr = ''; let vStr = ''; 
  while (consonants.test(str[i])) {
    cStr += str[i];
    vStr = str.slice(i+1);
    i++;
    if (i === str.length) {
      return pigLatin = str + 'ay';
    }
  }
  console.log(cStr, vStr)
  pigLatin = vStr + cStr + 'ay';
  // console.log(pigLatin)
  return pigLatin;
  }
  //3. if word begins with vowel add -way to the end
  //line 7!
  //4. if no vowels => add -ay
  //line 16!
}

console.log(translatePigLatin('skrtl'));

//7. Search and Replace
function myReplace(str, before, after) {
  //1. find a target word in sentence
  let strArr = str.split(/\W+/); 
  console.log(strArr)
  let ind = strArr.indexOf(before);
  console.log(strArr[ind][0])
  //2. check the case match of the target and replace words
  let upperCase = /[A-Z]/; let lowerCase = /[a-z]/;
  console.log(upperCase.test(strArr[ind][0]));
  let After = '';
  if (upperCase.test(strArr[ind][0])) {
    After = after[0].toUpperCase();
    for (let i=1; i < after.length; i++) {
      After += after[i];
    }
    console.log(After);
  } else {
    After = after[0].toLowerCase();
    for (let i=1; i < after.length; i++) {
      After += after[i];
    }
    console.log(After);
  }
  //3. replace
  strArr.splice(ind, 1, After);
  console.log(strArr);
  //4. convert to a string
  let newStr = strArr.join(' ');
  console.log(newStr)
  return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
