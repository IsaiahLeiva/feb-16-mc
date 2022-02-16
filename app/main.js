import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
}

window["app"] = new App();



// palindromeWord('kayak', 'pickle', 'racecar')

let word = 'kayak'
let word2 = 'pickle'
let word3 = 'racecar'

function palindrome(word) {
  for (let i = 0; i < word.length; i++) {
    let forwards = word[i]
    let backwards = word[word.length - 1 - i]

    if (forwards != backwards) {
      return false
    }
  }
  return true
}



//NOTE what I tried is below:

// function isPalendrome(str) {
//   let output = ''
//   let words = str.split('')
//   palendromeWord.forEach(word {
//     if(firstLetter.length = lastLetter.length) {
//     output = words
//   }
// })
// return output
// }