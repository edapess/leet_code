"use strict";
function nextGreatestLetter(letters, target) {
    let leftIndex = 0;
    let rightIndex = letters.length - 1;
    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (letters[middleIndex] <= target) {
            leftIndex = middleIndex + 1;
        }
        else if (letters[middleIndex] > target) {
            rightIndex = middleIndex - 1;
        }
    }
    return leftIndex === letters.length ? letters[0] : letters[leftIndex];
}
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
