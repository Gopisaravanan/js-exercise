// 1.write a program to check two numbers and return if one of the number is 100 or if the sum of the number is 100

// ans

const checkNum = (a, b) => a === 100 || b === 100 || (a + b === 100)

console.log(checkNum(50, 50))
console.log(checkNum(100, 50))
console.log(checkNum(50, 100))



// 2.write a javascript function to get the extension of a file name

// ans

const getExtension = (file) => file.slice(file.lastIndexOf("."))

console.log(getExtension("server.js"))
console.log(getExtension("index.html"))
console.log(getExtension("config.js"))


// 3.write a javascript program to get the current date.

// expected output : 
// dd-mm-yyyy, dd/mm/yyyy 

const getDate = (date = new Date()) => `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

console.log(getDate())


// 4.write a javascript program to create a new string adding "New!" in front of a given string.If the given string begins with "New!" already then return the original string.

const checkString = (str) => str.indexOf("New !") === 0 ? str : ` New ! ${str} `

console.log(checkString("hellooooo"))
console.log(checkString("New ! bike"))
console.log(checkString("bike"))


// 5.write a javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. the string length must be 3 or more if not the original string is returned.

const addString = (str) => {
    return str.length < 3 ? str : `${str.slice(0,3)}${str.slice(-3)}`
}

console.log(addString("hello world"))
console.log(addString("hello"))
console.log(addString("javascript"))
console.log(addString("hi"))


// 6.write a javascript program to extract the first half of a string of even length

const firstHalf = (str) => str.slice(0,str.length / 2)

console.log(firstHalf("Aeroplane"))
console.log(firstHalf("Helicopter"))

// 7.write a javascript program to concatenate two strings except their first character.

const conStrings = (a,b) =>   a.slice(1) + b.slice(1)

console.log(conStrings("hello","world"))
console.log(conStrings("fullstack","developer"))


// 8.Given two values, write a javascript program to find out which one is nearest to 100

const nearestVal = (val1,val2) => (100 - val1 ) < (100 - val2 ) ? "val1 is the nearest value" : "val2 is the nearest value";

console.log(nearestVal(71,75))
console.log(nearestVal(1,99))
console.log(nearestVal(98,91))


// 9.write a javascript program to check a given string contains 2 to 4 occurrences of a specified character.

const countChars = (str, char) => str.split('').filter(ch => ch === char).length;

const contains2to4 = (str,char) =>  countChars(str, char) >=2 && countChars(str, char) <= 4;

console.log(contains2to4("ohhh","o"))
console.log(contains2to4("oohhh","o"))
console.log(contains2to4("oooohhh","o"))
console.log(contains2to4("oooooohhh","o"))


// 10. write a javascript program to find the number of even digits in a an array of integers 

// solution  1

const arr = [1,2,3,4,5,6,7,8]

const evenArr = []

for (let i = 0 ; i <= arr.length ; i++ ){
 if(arr[i] % 2 ) {
   evenArr.push(i)
 }
}

console.log(evenArr)

// solution 2

evenArr = arr.filter(val => val % 2 === 0 )

console.log(evenArr)


// 11.write a javascript program to check whether a given array of integers is sorted in ascending order.

// solution 1

const checkOrder = (arr) => {
    for(let i = 0 ; i < arr.length; i++){
     if (arr[i] > arr[i + 1]) return "array is not an acending order"
    }
    return "array is an acending order"
  }
  
  console.log(checkOrder([1,4,3,5]))
  console.log(checkOrder([1, 4, 5, 3, 7, 8]))
  console.log(checkOrder([1, 2, 3, 7, 8]))

// solution 2
const checkOrder1 = (arr) => {
    const arr1 = [...arr]
    return JSON.stringify(arr.sort((a,b) => a-b)) === JSON.stringify(arr1) ? "array is an acending order" : "array is not an acending order"
}

console.log(checkOrder1([1,4,3,5]))
console.log(checkOrder1([1, 4, 5, 3, 7, 8]))
console.log(checkOrder1([1, 2, 3, 7, 8]))



// 12.write a javascript program to get the largest even number from an array of integers

const largeEvenNum = (arr) => Math.max(...arr.filter((val) => val % 2 === 0))

console.log(largeEvenNum([1,2,5,9,15,12,16]))
console.log(largeEvenNum([1,2,5,9,22,12,16]))
console.log(largeEvenNum([1,60,5,9,15,12,16]))


// 13.write a javascript program to replace the first digit in a string  (should contains at least digit) with $ character.

const replaceFirstDigit = (str) => {
    return str.replace(/[0-9]/,"$")
}

console.log(replaceFirstDigit("abcd4hgikk"))
console.log(replaceFirstDigit("1bcd4hgikk"))
console.log(replaceFirstDigit("ab3jfjhgikk"))
console.log(replaceFirstDigit("a66cd4hgikk"))



// 14.given a year, report if it is a leap year.

const leapYear = (year) => year % 4 === 0 ;

console.log(leapYear(2023))
console.log(leapYear(2024))
console.log(leapYear(2025))
console.log(leapYear(2026))
console.log(leapYear(2027))
console.log(leapYear(2028))


// 15.write a javascript program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)

const objA = {a:1, b:2, c:3}
const objB = {a:1, b:1, c:3}
const objC = {a:1, b:1, c:3}

const checkEqualObj = (a, b) => {
  const keys = Object.keys(a);
  return keys.every(key => a[key] === b[key]);
};

console.log(checkEqualObj(objA,objB))
console.log(checkEqualObj(objA,objC))
console.log(checkEqualObj(objB,objC))


// 16. Write a JavaScript function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const positiveNums = (nums) => {
    let posNum = [];
    for (let i = 0 ; i <= nums.length ; i++){
      if(nums[i] > 0 ) posNum.push(nums[i])
    }
    return posNum;
  }
  
  console.log(positiveNums([1,8,4,-2,9,-5,-1]))



// 17. Write a JavaScript program to find the second largest number in an array of integers.

const secondLarge = (nums) => {
    nums.sort((a,b) => b-a);
    return nums[1];
  }
  console.log(secondLarge([1,5,4,8,6,2,18,17]))
  console.log(secondLarge([1,5,4,32,6,2,18,17]))
  console.log(secondLarge([1,5,4,8,43,2,32,17]))



//   18.Write a JavaScript function to check if a given string is a palindrome (reads the same backward as forward) ignoring spaces, punctuation, and capitalization.

const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("")
    return cleanStr === reversedStr;
  }
  
  
  console.log(isPalindrome("radar"));
  console.log(isPalindrome("level"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("rotor"));
  console.log(isPalindrome("madam"));
  
  
