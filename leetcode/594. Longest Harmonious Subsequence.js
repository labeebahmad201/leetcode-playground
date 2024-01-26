var max = function(x, y){
    if(x > y){
        return x
    } else if(x < y) {
        return y;
    }

    return x;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {

    let map = new Map();
    for(let i =0; i < nums.length; i++){
        let value = map.get(nums[i]);
        if(!value){
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], value + 1);
        }
    }
    
    let longestHarmoniousSubsequenceLength = 0;
    map.forEach((value, key)=>{
        let number = key;
        let hasOtherNum = map.get(number+1);
        if(hasOtherNum){
            longestHarmoniousSubsequenceLength = max(longestHarmoniousSubsequenceLength, map.get(number) + map.get(number+1))
        }
    });

    return longestHarmoniousSubsequenceLength;

};

console.log(findLHS([1,3,2,2,5,2,3,7])); // 5

// time complexity: O(n)
// space complexity: O(n)

