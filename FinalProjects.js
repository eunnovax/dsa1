// Algorithms and Data Structures Final Projects
//1. Palindrome Checker
function palindrome(str) {
  // Good luck!
  // let lword = 'raCE34!_car* what a class';
  let regex = /[A-Za-z0-9]+/gi;
  let test2 = str.match(regex);
  console.log(test2);let regStr='';
  for (let i=0;i<test2.length; i++) {
    regStr+=test2[i];
  }
  let comArr = regStr.toLowerCase();
  let sArr = comArr.split('');
  console.log(comArr);
  // palindrome algorithm
  let rArr = ''; let ssArr = sArr.slice();
  // console.log(ssArr)
  for (let i=0; i< sArr.length; i++) {
    // let charac = sArr.pop();
    rArr+=ssArr.pop();
    // console.log(rArr, i, sArr.length)
  }
  console.log(rArr.toString(), comArr.toString());
  return (rArr === comArr);
}
console.log(palindrome("1 eye for of 1 eye."));

//2. Roman Numeral Converter
function convertToRoman(num) {
  let I = 1; let V = 5; let X = 10; let L = 50; 
  let C = 100; let D = 500; let M = 1000;
  //1. find the largest rn that is smaller than the num
  //1.1 add it 3 times and still smaller by more than largest rn that is smaller => step 4
  //2. find the 2nd largest & add it to the 1st until === num
  //3. if the 2nd largest exceeds 3 times => 
  //4. find the smallest rn that is larger than the num 
  //5. find the next smaller rn & subtract it from the smallest rn that is larger
  //6. if the result <= the next smaller rn => find the further smaller rn and subtract => repeat until smaller rn < result < num 
  //7. find the rest & add the rest through step 1 

 return num;
}

convertToRoman(36);