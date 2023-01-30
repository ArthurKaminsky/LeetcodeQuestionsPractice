from typing import List

class src.mediumQuestions.Java.Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i, a in enumerate(nums):
            if i > 0 and a == nums[i - 1]:
                continue
            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
        return res

print(src.mediumQuestions.Java.Solution().threeSum([-2,-2,0,0,2,2]))
print(src.mediumQuestions.Java.Solution().threeSum([-3,3,4,-3,1,2]))

class Solution2:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n, p, z = [], [], []
        for num in nums:
            if num > 0:
                p.append(num)
            elif num < 0:
                n.append(num)
            else:
                z.append(num)

        n_set, p_set = set(n), set(p)

        res = {(0, 0, 0), } if len(z) >= 3 else set()

        if z:
            res.update((-x, 0, x) for x in p_set if -x in n_set)

        res.update(self.get_triples(n, p_set))
        res.update(self.get_triples(p, n_set))
        return res


    @staticmethod
    def get_triples(l, s):
        r = []
        while True:
            try:
                i = l.pop(0)
                r.extend(tuple(sorted([i, j, - i - j])) for j in l if (- i - j) in s)
            except IndexError:
                return r

print(Solution2().threeSum([-2,-2,0,0,2,2]))
print(Solution2().threeSum([-3,3,4,-3,1,2]))