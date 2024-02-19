/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1;
    while(l < r){
        let sum = numbers[l] + numbers[r];
        if(sum === target){
            return [l + 1, r + 1];
        } else if(sum < target){
            l++;
        } else if(sum > target){
            r--;
        }
    }

    return [];
};

twoSum([2,7,11,15], 9); //[1, 2] 