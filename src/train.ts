// // // // // import { stringify } from "querystring";

// // // // // console.log("=======task_g==========");

// // // // // function getHighestIndex(arr: number[]): number {
// // // // //   let max = arr[0];
// // // // //   let index = 0;

// // // // //   for (let i = 1; i < arr.length; i++) {
// // // // //     if (arr[i] > max) {
// // // // //       max = arr[i];
// // // // //       index = i;
// // // // //     }
// // // // //   }
// // // // //   return index;
// // // // // }

// // // // // console.log(
// // // // //   getHighestIndex([
// // // // //     9, 4, 94, 6, 36, 2, 1, 0, 3, 5, 7, 8, 10, 11, 12, 13, 14, 15,
// // // // //   ])
// // // // // );

// // // // // console.log("=======task_h==========");

// // // // // function getPositiveAsString(arr: number[]): string {
// // // // //   let result = "";

// // // // //   for (let i = 0; i < arr.length; i++) {
// // // // //     if (arr[i] > 0) {
// // // // //       result += arr[i].toString();
// // // // //     }
// // // // //   }
// // // // //   return result;
// // // // // }

// // // // // console.log(
// // // // //   getPositiveAsString([9, -4, 94, -6, 36, 2, -1, 0, 3, 5, -7, 8, 10, 11, 12])
// // // // // );

// // // // // console.log("=======task_h2==========");

// // // // // function getDigits(input: string): string {
// // // // //   return input.replace(/\D/g, "");
// // // // // }
// // // // // //  \D means any character that is not a digit. (Digits are 0 through 9.)
// // // // // // - The g flag stands for global, which means "replace all matches in the string," not just the first one.
// // // // // // - '' is an empty string, which is what we're replacing the non-digit characters with.
// // // // // // The slashes /.../ are how you define a regular expression (also called a “regex”) in JavaScript and TypeScript.
// // // // // // They are like quotation marks, but for regular expressions.

// // // // // console.log(getDigits("a1b2c3d4e5f6g7h8i9j0"));

// // // // // Project standards:
// // // // // - Logging standards (morgan
// // // // //   Naming standards
// // // // //       function, method, variable names: camelCase
// // // // //       class names: PascalCase
// // // // //       folder names and file names: kebab-case
// // // // //       css : snake_case
// // // // // Error handling standards

// // // // // Tradtional API
// // // // // Rest API
// // // // // GraphQL API
// // // // // .....

// // // // console.log("=======task_i==========");

// // // // function majorityElement(arr: number[]): number | null {
// // // //   const countMap: Record<number, number> = {};
// // // //   // Record is a utility type in TypeScript that allows you to create an object type with specific keys and values.
// // // //   // In this case, countMap will have keys of type number and values of type number
// // // //   for (const num of arr) {
// // // //     countMap[num] = (countMap[num] || 0) + 1; // Here we are counting the occurrences of each number. || 0) + 1 calculates the count of each number in the array.
// // // //   }

// // // //   let maxCount = 0; // Initialize maxCount to 0 to keep track of the highest count
// // // //   // maxCount will store the maximum count of any number in the array. For example, if the number 1 appears 3 times, maxCount will be updated to 3.
// // // //   // If no number appears more than once, maxCount will remain 0.
// // // //   let majority: number | null = null;

// // // //   for (const key in countMap) {
// // // //     // key is a string representing the number in countMap. For example, if countMap has letter "a ", it means the number 1 appeared in the array.
// // // //     if (countMap[key] > maxCount) {
// // // //       // If the count of the current number is greater than maxCount, we update maxCount and majority.
// // // //       maxCount = countMap[key];
// // // //       majority = Number(key);
// // // //     }
// // // //   }

// // // //   return majority;
// // // // }

// // // // console.log(majorityElement([1, 2, 1, 4, 5, 1, 3, 4]));

// // // function findLongestWord(str: string): string {
// // //   const words: string[] = str.split(" ");
// // //   let longest: string = "";

// // //   for (const word of words) {
// // //     if (word.length > longest.length) {
// // //       longest = word;
// // //     }
// // //   }

// // //   return longest;
// // // }

// // // console.log(findLongestWord("한국 생활이 어렵지만 재미있고 변하긴 한다."));
// // console.log("task_k");
// // function countVowels(str: string): number {
// //   const vowels: string = "aeiouAEIOU";
// //   let count: number = 0;

// //   for (const char of str) {
// //     if (vowels.includes(char)) {
// //       count++;
// //     }
// //   }

// //   return count;
// // }

// // console.log(countVowels("Mashaqqat izlagan talabalar"));

// // function reverseSentence(sentence: string): string {
// //   return sentence
// //     .split(" ") // So‘zlarni ajratamiz
// //     .map(
// //       (word) => word.split("").reverse().join("") // Har bir so‘zni teskarisiga o‘giramiz
// //     )
// //     .join(" "); // So‘zlarni qayta birlashtiramiz
// // }

// // console.log(reverseSentence("Hello MIT"));

// console.log("=======task_m==========");

// function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
//   return arr.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }
// console.log(getSquareNumbers([1, 2, 3]));

// console.log("=======task_n==========");

// function palindromCheck(str: string): boolean {
//   const lowered: string = str.toLowerCase();
//   const reversed: string = lowered.split('').reverse().join('');
//   return lowered === reversed;
// }

// console.log(palindromCheck("DEVEX"))

// console.log("=====task_o============");

// function calculateSumOfNumbers(arr: any[]): number {
//     return arr.reduce((sum: number, item: any) => {
//         if (typeof item === "number" && Number.isFinite(item)) {
//             return sum + item;
//         }
//         return sum;
//     }, 0);
// }

// console.log(calculateSumOfNumbers([90, "10", {son: 50}, true, 200]));

// console.log("=======task_p==========");

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   const result: [string, any][] = [];

//   for (const key in obj) {
//     result.push([key, obj[key]]);
//   }

//   return result;
// }
// console.log(objectToArray({ 성함: "강건일", age: 30, city: "수원" }));

// console.log("=======task_q============")

// function hasProperty(obj: any, key: string): boolean {
//     return key in obj;
// }

// console.log(hasProperty({ davlat: "Uzbekistan", viloyat: "Buxoro" }, "viloyat")); 
// console.log(hasProperty({ davlat: "Uzbekistan", viloyat: "Buxoro" }, "tuman"));

// console.log("=======task_r============");

// function calculate(expression: string): number {
  
//   const numbers = expression.split('+'); 
//   const sum = numbers.reduce((acc, val) => acc + parseInt(val.trim()), 0);

//   return sum;
// }


// console.log(calculate("35 + 986")); 

// console.log("=======task_s============");

// function missingNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== i) return i;
//   }
//   return nums.length;
// }


// console.log(missingNumber([3, 0, 1]));

console.log("=======task_t============");

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArray = [...arr1, ...arr2]; 
  return mergedArray.sort((a, b) => a - b);
}

// Misol uchun:
const result = mergeSortedArrays([0, 8, 4, 7], [9, 6, 30]);
console.log(result);
