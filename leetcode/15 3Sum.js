/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    let result = [];
    nums.sort((x, y)=> x > y ? 1 : -1);

    for(let i = 0; i < nums.length; i++){

        if(i > 0 && nums[i] === nums[i - 1]){ // avoids duplicates. 
            continue;
        }

        let j = i + 1, k = nums.length - 1;

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];

            if(sum === 0){
                result.push([ nums[i], nums[j], nums[k] ]);
                j++; // increment cause that's what we do in the two pointer solution.
                while(nums[j] == nums[j - 1] && j < k){ // [-2,-2, 0, 1, 2, 2] // this is to skip duplicates. 
                    j++;
                }
            } else if(sum > 0){
                k--;
            } else if(sum < 0){
                j++;
            }

        }
    }
    

    return result;
};

threeSum([-1,0,1,2,-1,-4]); // [[-1,-1,2],[-1,0,1]]


/*****
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */