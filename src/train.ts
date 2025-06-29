// import { stringify } from "querystring";

// console.log("=======task_g==========");

// function getHighestIndex(arr: number[]): number {
//   let max = arr[0];
//   let index = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       index = i;
//     }
//   }
//   return index;
// }

// console.log(
//   getHighestIndex([
//     9, 4, 94, 6, 36, 2, 1, 0, 3, 5, 7, 8, 10, 11, 12, 13, 14, 15,
//   ])
// );

// console.log("=======task_h==========");

// function getPositiveAsString(arr: number[]): string {
//   let result = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result += arr[i].toString();
//     }
//   }
//   return result;
// }

// console.log(
//   getPositiveAsString([9, -4, 94, -6, 36, 2, -1, 0, 3, 5, -7, 8, 10, 11, 12])
// );

// console.log("=======task_h2==========");

// function getDigits(input: string): string {
//   return input.replace(/\D/g, "");
// }
// //  \D means any character that is not a digit. (Digits are 0 through 9.)
// // - The g flag stands for global, which means "replace all matches in the string," not just the first one.
// // - '' is an empty string, which is what we're replacing the non-digit characters with.
// // The slashes /.../ are how you define a regular expression (also called a “regex”) in JavaScript and TypeScript.
// // They are like quotation marks, but for regular expressions.

// console.log(getDigits("a1b2c3d4e5f6g7h8i9j0"));

// Project standards:
// - Logging standards (morgan
//   Naming standards
//       function, method, variable names: camelCase
//       class names: PascalCase
//       folder names and file names: kebab-case
//       css : snake_case
// Error handling standards

// Tradtional API
// Rest API
// GraphQL API
// .....
