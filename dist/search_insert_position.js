"use strict";
function searchInsert(nums, target) {
    let left = 0; //left index
    let right = nums.length - 1; //right index
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
searchInsert([1, 3, 5, 6], 5);
