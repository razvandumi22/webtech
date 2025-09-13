// function printArray(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
//   }
// }

// printArray([10, 3, 2, 5, 100, 250]);

// console.log();

// function printArrayReversed(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// printArrayReversed([10, 3, 2, 5, 100, 250]);

// function printMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i <= arr.length - 1; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   console.log(min);
// }

// printMin([12, 50, 2, 6, 10]);

// function findElement(arr, target) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findElement([10, 2, 3, 15, 4], 2));
// console.log(findElement([10, 2, 3, 15, 4], 24));

// function turnNegIntoPos(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] < 0) arr[i] = Math.abs(arr[i]);
//   }
//   return arr;
// }

// console.log(turnNegIntoPos([1, 5, -4, 3, -20, -50]));

// function isPalindrome(str) {
//   let revWord = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revWord += str[i];
//   }
//   if (revWord === str) return true;
//   return false;
// }

// console.log(isPalindrome("ana"));
// console.log(isPalindrome("berbbc"));

// function isPalindrome(str) {
//   left = 0;
//   right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome("ana"));
// console.log(isPalindrome("berbbc"));

// function reverseAray(arr) {
//   reversedArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// }
// console.log(reverseAray([1, 2, 3, 4, 6, 9]));

// function reverseAray(arr) {
//   left = 0;
//   right = arr.length - 1;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     while (left < right) {
//       let aux = arr[left];
//       arr[left] = arr[right];
//       arr[right] = aux;
//       left++;
//       right--;
//     }
//   }
//   return arr;
// }

// console.log(reverseAray([1, 2, 3, 5, 7, 9]));

// function sortArray(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = 0; j <= arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let aux = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = aux;
//       }
//     }
//   }
//   return arr;
// }
// console.log(sortArray([5, 2, 8, 3, 1, 4]));

function twoNums(arr, target) {
  let map = new Map();
  for (let i = 0; i <= arr.length - 1; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
  return [];
}

console.log(twoNums([3, 8, 9, 2, 5], 5));
