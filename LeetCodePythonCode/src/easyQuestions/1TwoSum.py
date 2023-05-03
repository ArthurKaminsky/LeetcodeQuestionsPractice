from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> list[int]:
        for i in range(len(nums)):
            for j in range(len(nums) + 1):
                if nums[i] + nums[j + 1] == target and i != j + 1:
                    return [i, j + 1]


print(Solution().twoSum([5, 5, 5, 5, 5], 10))
