/*


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};

console.log(twoSum([5,5,5,5,5], 10));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
twoSum = function(nums, target) {
    for (let i = 0; i<= nums.length; i++) {
        for ( let j= 0; j<= nums.length; j++) {
            let newNumb = nums[i] + nums[i+j+1];
            if (newNumb === target) {
                return [i, [i+j+1]];
            }
        }
    }
};

console.log(twoSum([5,5,5,5,5], 10));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length + 1 ;j++)
            if (nums[i] + nums[j + 1] == target && i != j + 1) return [i, j+1]
    }
};

console.log(twoSum([5,5,5,5,5], 10));