/**
 * @param {number[]} nums
 * @return {number[]}
 */
let threeSum = function(nums) {
    const newArr = [];
    // obviously irrelevant if we don't have at least 3 numbers to play with!
    if (nums.length < 3) {
        return newArr;
    }
    // having the numbers in ascending order will make this problem much easier.
    // also, knowing the overall problem  will take at least O(N^2) time, we can
    // afford the O(NlogN) sort operation
    nums.sort((a, b) => a - b);
    // if the question asks us for a custom target, we can control it here
    const target = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        // `i` represents the "left" most number in our sorted set.
        // once this number hits 0, there's no need to go further since
        // positive numbers cannot sum to a negative number
        if (nums[i] > target) break;
        // we don't want repeats, so skip numbers we've already seen
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // `j` represents the "middle" element between `i` and `k`.
        // we will increment this up through the array while `i` and `k`
        // are anchored to their positions. we will decrement `k` for
        // for each pass through the array, and finally increment `i`
        // once `j` and `k` meet.
        let j = i + 1;
        // `k` represents the "right" most element
        let k = nums.length - 1;

        while (j < k) {
            // if we find the target sum, increment `j` and decrement `k` for
            // other potential combos where `i` is the anchor
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                // store the valid threesum
                newArr.push([nums[i], nums[j], nums[k]]);

                // this is important! we need to continue to increment `j` and decrement `k`
                // as long as those values are duplicated. in other words, we wanna skip values
                // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
                // [[-2,0,2], [-2,0,2]].
                //
                // (i'm not a fan of this part because we're doing a while loop as we're
                // already inside of another while loop...)
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;

                // finally, we need to actually move `j` forward and `k` backward to the
                // next unique elements. the previous while loops will not handle this.
                j++;
                k--;
            // if the sum is too small, increment `j` to get closer to the target
            } else if (sum < target) {
                j++;
            // if the sum is too large, decrement `k` to get closer to the target
            } else { // (sum > target)
                k--;
            }
        }
    }
    return newArr;
}

// console.log([-1,0,1,2,-1,-4].sort()) -> [ -1, -1, -4, 0, 1, 2 ]
console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0]))
console.log(threeSum([0,0,0,0]))

/*

The nums array can contain duplicates, and we want to avoid using the same value for 'a' when the recipe for threeSum is:
'a' + 'b' + 'c' = 0.
Let's say we have the following array: [-3, 3, 4, -3, 2, 1], we have the value '-3' repeat itself.
If we don't sort the array, we get the following result: [[-3,2,1], [-3,2,1]] which contains the same triplets
because if we use Two Pointers method, we get the first value from indices 0,4,5 and then from 3,4,5 which we want to avoid.
We want to eliminate the duplicates. The solution to eliminate the duplicates is to sort the input array.

After sort we get [-3,-3,1,2,3,4] and what we want to do is to use Two Pointers method, but eliminate the possibility of getting duplicates
since we can get the result [[-3,2,1], [-3,2,1]] again from indices 0,2,3 and 1,2,3.
So what we want to do is to check if we saw the same value which in this example is -3, we want to skip it (threeSumSkipDuplicate.png).
And if 'a' has already a positive value there's no point in continuing since nothing will sum to 0 anymore.

We don't want to reuse the same values for 'j' and 'k' either.

 */
