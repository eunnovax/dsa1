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

//8. DNA Pair

function pairElement(str) {
  //1. define base pair
  let strArr = str.split('');
  console.log(strArr);
  let bp = [];
  for (let i=0; i < strArr.length; i++) {
    if (strArr[i] === 'C') {
      bp.push([strArr[i], 'G']);
    } else if (strArr[i] === 'G') {
      bp.push([strArr[i], 'C']);
    } else if (strArr[i] === 'A') {
      bp.push([strArr[i], 'T']);
    } else if (strArr[i] === 'T') {
      bp.push([strArr[i], 'A']);
    }
  }
  //2. make BP symmetric (GC-CG)
  //3. add a pair to str characters
  //4. build 2d array of base pairs
  console.log(bp);
  return bp;
}

pairElement("CTCTA");

//9. Missing letters
function fearNotLetter(str) {
  //1. define alphabet sequence
  let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  console.log(abc)
  //2. identify the alphabet snippet 
  let indArr = []; 
  let ind = abc.indexOf(str[0]);
  indArr.push([ind]); let abInd; let strChar; let ii = 0;
  for (let i=1; i < abc.length; i++) {
    ii++;
    abInd = abc.indexOf(str[i]);
    indArr.push(abInd);
    if (indArr[i] - indArr[i-1] > 1) {
      return strChar = abc[abInd-1];
    } 
  }
  if (ii === abc.length - 1) {
    return strChar = undefined;
  }
  //3. check if the letter is missing from the alphabet snippet
}

fearNotLetter("abce");

//10. Sorted Union
function uniteUnique() {
  //1. Build an array out of argument arrays
  let args = [];
  for (let i=0; i < arguments.length; i++) {
    args.push(arguments[i]);
  } 
  let su = args[0];
  console.log(su);
  //2. Built return array by comparing array elements to the 1st array elements
  for (let i=1; i < args.length; i++) {
    for (let j=0; j < args[i].length; j++) {
      let m = 0;
      for (let k=0; k < args[0].length; k++) {
        if (su[k] !== args[i][j]) {
          m++;
        }
      }
      if (m === su.length) {
          su.push(args[i][j]);
          console.log(su)
        }
    }
  }
  return su;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

//11. Convert HTML Entities
function convertHTML(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

// test here
convertHTML("Dolce & Gabbana");

//12. Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  //1. write fibonacci sequence 
  let sum = 0;
  let fs = []; fs[0] = 1; fs[1] = 1; let i = 2; let fn = 0;
  if (num===1) {
  return 1;}
  while (i <= num) {
    fn = fs[i-1] + fs[i-2];
    fs.push(fn);
    console.log(fs);
    if (fs[i] % 2 !== 0 && fs[i] <= num) {
      sum += fs[i];
      console.log('sum', sum)
    } else if (fs[i] > num) {
      return sum+2;
    }
    i++;
  }
  //2. add all odd fn's <= num  
}

console.log(sumFibs(4));

//13. Sum all primes
function sumPrimes(num) {
  //1. check prime number
  let sum = 0;
  let primeNumbers=[2]
  let isPrime=false
  for(let i=2; i<=num; i++){
    isPrime=true;  
    for (let j in primeNumbers){      
      if (i%primeNumbers[j]===0){
        isPrime=false
        break;
      }
    }
    if (isPrime){
      primeNumbers.push(i)
    }
    console.log(i, 'prime', primeNumbers)
  }  

  for (let j in primeNumbers){      
    sum+=primeNumbers[j]
  }
  return sum;
}

console.log(sumPrimes(90));

//14. Smallest Common Multiple
  //2
  function numArray(minNum, maxNum) {
    let NA = [];
    if (minNum === 1) {
      minNum = 2;
    }
    for (let i=minNum; i <= maxNum; i++) {
      NA.push(i);
    }
    return NA;
  }
  //3
  function primeArray(maxNum) {
  
    let PNA=[2]
    let isPrime=false
    for(let i=2; i<=maxNum; i++){
      isPrime=true;  
      for (let j in PNA){      
        if (i%PNA[j]===0){
          isPrime=false
          break;
        }
      }
      if (isPrime){
        PNA.push(i);
      }
      // console.log(i, 'prime', PNA);
    }
    return PNA;
  }
  //4 
  function scmArray(NA, PNA) {
    // build 3D array
    let SCMA = []; 
    // build 2D array
    let indSCMA = []; 
    // console.log('NA', NA); 
    // console.log('PNA',PNA)
    for (let i=0; i < NA.length; i++) {
      SCMA[i] = []; indSCMA[i] =[];
      for (let j=0; j < PNA.length; j++) {
        SCMA[i][j] = []; indSCMA[i][j] = [];
        // console.log('NA', NA);
        // console.log('PNA', PNA);
        let NAPNA = NA[i];
        while(NAPNA % PNA[j] === 0) {
          NAPNA = NAPNA / PNA[j];
          SCMA[i][j].push(PNA[j]);
          // console.log('SCMA', SCMA);
        } 
        indSCMA[i][j].push(SCMA[i][j].length);
        // console.log("indSCMA", indSCMA);
      }
    }
    return indSCMA;
  }
  //5 
  function scMultiple(PNA, indSCMA) {
    console.log('indSCMA', indSCMA);
    console.log('PNA', PNA);
    let SCM = 1; let PTA = [];
    let indSCMAT = indSCMA[0].map((col, i) => indSCMA.map(row => row[i]));
    
    let maxPrime;
    for (let i=0; i < PNA.length; i++) {
      console.log('indSCMA transpose', indSCMAT[i]);
      maxPrime = Math.max(...indSCMAT[i]);
      PTA.push(maxPrime);
      console.log(maxPrime)
      for (let j=0; j < PTA[i]; j++) {
        SCM = SCM * PNA[i];
      }
    }
    return SCM;
  }

function smallestCommons(arr) {
  //1. maxNum = max from arr
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  //2. NA = numArray (minNum, maxNum);
  let NA = numArray(minNum, maxNum);
  //3. PNA = primeArray (maxNum);
  let PNA = primeArray(maxNum);
  //4. indSCMA = scmArray (NA, PNA);
  let indSCMA = scmArray(NA, PNA);
  //5. SCM = scMultiple (PNA, indSCMA);
  let SCM = scMultiple(PNA, indSCMA);
  return SCM;
}

console.log('SCM is', smallestCommons([1,5]));  