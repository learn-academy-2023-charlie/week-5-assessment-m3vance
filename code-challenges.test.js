// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("secretMsg", () => {
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
    it("takes in a string and returns a string with a coded message", () => {
        expect(secretMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(secretMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(secretMsg(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// output: ReferenceError: secretMsg is not defined

// b) Create the function that makes the test pass.
    // pseudo code:
        // use for loop to iterate
        // use conditionals to match each letter or uppercase letter
        // .replace method to replace index of string with respective number

    // const secretMsg = (string) => {
    // for(let i = 0; i < string.length; i++) {
    //     if (string[i] === 'a' || string[i] === 'A') {
    //     string = string.replace(string[i], '4')
    //     } else if (string[i] === 'e' || string[i] === 'E') {
    //     string = string.replace(string[i], '3')
    //     } else if (string[i] === 'i' || string[i] === 'I') {
    //     string = string.replace(string[i], '1')
    //     } else if (string[i] === 'o' || string[i] === 'O') {
    //     string = string.replace(string[i], '0')
    //     }
    // }
    // return string;
    // }

    const secretMsg = (string) => {
        return string.replace(/[aeio]/gi, (match) => {
          switch (match) {
            case 'a':
              return '4'
            case 'e':
              return '3'
            case 'E':
              return '3'
            case 'i':
              return '1'
            case 'o':
              return '0'
            default:
              return match
          }
        })
      }

    //   output:  PASS  ./code-challenges.test.js

      // notes: Wanted to figure out how to use regex in the function. Originally tried to make conditionals work again, but research showed me the switch and case statements will work instead.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("fruityLetters", () => {
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]
it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect(fruityLetters(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(fruityLetters(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// output: ReferenceError: fruityLetters is not defined

// b) Create the function that makes the test pass.
    // pseudo code:
        // function takes in array, letter
        // use .filter to iterate through value
        // if value.toLowerCase contains letter, then return it

        const fruityLetters = (array, letter) => {
            return array.filter(value => value.toLowerCase().includes(letter))
          }

        //   output:  PASS  ./code-challenges.test.js

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("isHouseFull", () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    expect(isHouseFull(hand1)).toEqual(true)
    expect(isHouseFull(hand2)).toEqual(false)
    expect(isHouseFull(hand3)).toEqual(false)
    expect(isHouseFull(hand4)).toEqual(true)
    })
})

// output: ReferenceError: isHouseFull is not defined

// b) Create the function that makes the test pass.
    // pseudo code: 
        // iterate with for loop
        // use conditional statement to check if array contains (1,1,1) (2,2,2) etc and (1,1) (2,2) etc. 

        const isHouseFull = (array) => {
            const count = {}
            for (const num of array) {
            count[num] = (count[num] || 0) + 1
            }
            return Object.values(count).includes(2) && Object.values(count).includes(3)
        }

            // output:  PASS  ./code-challenges.test.js

            // notes: relied heavily on online resources for this one. My pseudo code doesn't match it in the slightest. 