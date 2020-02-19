//1. StreamChecker class
class StreamChecker {
  constructor(words) {
    this.words = words;
    const match = {};
    words.map(word => {
    match[word] = '';
    }); 
    this.match = match;
  }
}

//2. Query function
StreamChecker.prototype.query = function(letter) {
  
  let strArr = [];
    this.words.map(word => {
      // console.log('word', word)
      strArr =  word.split('');
      // console.log('strArr', strArr)
      let strPart = ''; let char = ''; let i = 0;
      while(this.match[word] !== strPart) {
        char = strArr[i];
        strPart += char;
        i++;
      }
      char = strArr[i];
      // console.log('char', char);
        if(char === letter) {
          this.match[word] += letter;
          if (this.match[word] === word) {
            return console.log(true);
          }
        }
      
    })
    return console.log(false);
}

//3. Words
let arr = ['hey', 'world', 'abc'];
//4. Stream of characters
const stream = 'eheyeinginloveheytenthousandabcago'
const streamArr = stream.split('');
// console.log(streamArr)
//5. Checking StreamChecker
let streamchecker = new StreamChecker(arr);
console.log(streamchecker.words[0]);
streamArr.map(streamChar => {
    let result = streamchecker.query(streamChar);
})
