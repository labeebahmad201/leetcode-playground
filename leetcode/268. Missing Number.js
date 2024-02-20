/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++){
        set.add(nums[i]);
    }

    let i = 0;
    while(i <= nums.length){
        if(!set.has(i)){
            return i
        }
        i++;
    }
};