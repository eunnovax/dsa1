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
function grinder(num, roman) {
  console.log(roman)
  let I1 = 1; let V1 = 5; let X1 = 10; let L1 = 50; 
  let C1 = 100; let D1 = 500; let M1 = 1000;
  let arr = [I1,V1,X1,L1,C1,D1,M1];let nArr = ['I','V','X','L','C','D','M'];
    for (let i=0; i<arr.length; i++) {
      if (num === arr[i]) {
        roman += nArr[i];
        console.log(roman);
        return roman;
        }
    }
    
    if (num < 10) {
      console.log('hey');
      if (num > 5 && num < 9) {
        num -= 5;
        roman+= 'V';
        console.log(roman);
        return grinder(num, roman);
        }
      else if (num === 9) {
        roman+= 'IX';
        return roman;
      }  
      else if (num === 4) {
        roman+= 'IV';
        console.log(roman);
        return roman;
        }
      else if (num < 4) {
        while (num > 0) {
           num -= 1;          
           roman+= 'I';
          }
          console.log(roman);
        return roman;  
        }
    }
    else if (num > 10 && num < 100) {
      console.log('hey')
      if (num > 50 && num < 90) {
        num -= 50;
        roman+= 'L';
        console.log(roman);
        return grinder(num, roman);
        }
      else if (num >= 90 && num < 100) {
        num -= 90;
        roman += 'XC';
        return grinder(num, roman);
      }
      else if (num >= 40 && num < 50) {
        num   -= 40;
        roman += 'XL';
        console.log(roman);
        return grinder(num, roman);
      }
      else if (num < 40) {
        console.log('hey')
        while (num > 10) {
    
          num -= 10;
          console.log(num)
          roman+= 'X';
          console.log(roman)
        }
        console.log(roman);
        return grinder(num, roman);
      }
    }
    else if (num > 100 && num < 1000) {
      if (num > 500 && num < 900) {
        num -= 500;
        roman += 'D';
        console.log(roman);
        return grinder(num, roman);
        }
      else if (num >=900 && num < 1000) {
        num -= 900;
        roman += 'CM';
        return grinder(num, roman);
      }  
      else if (num >= 400 && num < 500) {
        num -= 400;
        roman += 'CD';
        console.log(roman);
        return grinder(num, roman);
        }
      else if (num < 400) {
        while (num > 100) {
          num -= 100;
          roman += 'C';
        }
        console.log(roman);
        return grinder(num, roman);
        }
    }
    else if (num > 1000) {
      while (num > 1000) {
        num -= 1000;
        roman+= 'M';
      }
      console.log(roman);
      return grinder(num, roman);
      }
}

function convertToRoman(num) {
  let roman='';
  let numeral = grinder(num, roman);
  console.log(numeral);
  return numeral;
}

convertToRoman(9);

//3.  Caesars Cipher
function rot13(str) { // LBH QVQ VG!
  let alphaBet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let caesarBet = []; let j;
  for (let i=0; i<alphaBet.length; i++) {
    j = i+13;
    if (j >= alphaBet.length) {
      j -= alphaBet.length;
    }
    caesarBet.push(alphaBet[j]);
  }
  console.log(caesarBet);
  let strArr = str.split(''); let caesarArr=[];let caesarStr='';
  // console.log(strArr);
  for (let i=0; i<strArr.length; i++) {
    const ind = caesarBet.indexOf(strArr[i]);
    if (ind < 0) {
      caesarArr.push(strArr[i]);
    } else {
      caesarArr.push(alphaBet[ind]);
    }
    // caesarStr+=alphaBet[ind];
  }
  console.log(caesarArr);
  for (let i=0; i<caesarArr.length; i++) {
    caesarStr+=caesarArr[i];
  }
  console.log(caesarStr);
  return caesarStr;
}

// Change the inputs below to test
rot13("SERR CVMMN!");

//4. Telephone Number Validator
function telephoneCheck(str) {
  // Good luck!
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/;
  let res = regex.test(str);
  return res;
}

telephoneCheck("555-555-5555");

//5. Cash Register
function checkCashRegister(price, cash, cid) {
  //1. coins denomination array
  //////////////////////////////////////////////////////////////////////
  const coins = [["ONE HUNDRED", 100],["TWENTY", 20],["TEN", 10],["FIVE",5],["ONE", 1],["QUARTER", 0.25],["DIME", 0.1],["NICKEL", 0.05],["PENNY", 0.01]];
  ////////////////////////////////////////////////////////////////////////
     let cidSum = 0;
  //2. change
  ///////////////////////////////////////////////           
     let change = cash - price; 
    //  let change = Math.round(chang * 100) / 100;
  /////////////////////////////////////////////////
  //3. highest to lowest order cid numbers array
  //////////////////////////////////////////////   
     let cidRev = []; let i = cid.length;
    while (i>0) {
      cidRev = [...cidRev, cid[i-1][1]];
      cidSum += cid[i-1][1]; 
      cidSum = Math.round(cidSum * 100) / 100;
      i--;
    }
  //////////////////////////////////////////////
  //4. loop 
    let statusCheck=''; let cashRegObj = {};
     let left = Math.round(change*100) / 100; let sorted = []; 
    for (let i=0; i<coins.length;i++) {
      // console.log(left, coins[i][1])
     if (left > coins[i][1]) {
       console.log('left', left);
       let leftModCoin = (left*100) % (coins[i][1]*100);
       console.log('leftModCoin', leftModCoin, coins[i][1]);
       leftModCoin = Math.round(leftModCoin * 100) / 100;
       console.log('leftModCoin', leftModCoin);
       let diffLeft = Math.round((left - leftModCoin)*100) / 100;
       console.log('diffLeft', diffLeft);
       let ratioCanDraw = Math.round((diffLeft/coins[i][1])*100) / 100;
       let canDraw = ratioCanDraw;
       console.log('canDraw', canDraw);
       let ratioHasDraw = Math.round((cidRev[i]/coins[i][1])*100) / 100;
       let hasDraw = ratioHasDraw;
       console.log('hasDraw', hasDraw);
       if (canDraw >= hasDraw) {let withDrawn = cidRev[i];
       let left = left-withDrawn;
        //  console.log('left take all', left, 'from', coins[i][1],'withdrawn', withDrawn)
         sorted = [...sorted, [coins[i][0],withDrawn ]];
         if (left === 0) {break}
       } else if (canDraw < hasDraw) {let withDrawn = canDraw * coins[i][1];          
       let left = left - withDrawn;
      //  console.log('left take what can be', left);
      sorted = [...sorted, [ coins[i][0],withDrawn ]];
         if (left === 0) {break}
       }
     }
    // console.log(left)

   }
  //////////////////////////////////////////////
  //5. conditional output 
  if (left !== 0 || change > cidSum) {
    console.log('1st condition')
    statusCheck = 'INSUFFICIENT_FUNDS';
    cashRegObj = {status: statusCheck, change: []};
  } else if (cidSum === change) {
    statusCheck = 'CLOSED';
    cashRegObj = {status: statusCheck, change:cid};
  } else {
    console.log('3rd condition');
    statusCheck = 'OPEN';
    cashRegObj = {status: statusCheck, change: sorted}
  }
  console.log('cashRegObj',cashRegObj.status, 'why', left, cidSum, change);
  return cashRegObj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
