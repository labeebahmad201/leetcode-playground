/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // x + y = target
    // x = target - y(given)
    let map = {};

    for(let i = 0; i < nums.length; i++){
        let y = target - nums[i];
        if(map[y] !== undefined){
            return [map[y], i];
        }

        map[nums[i]] = i;
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9));  //[0,1]