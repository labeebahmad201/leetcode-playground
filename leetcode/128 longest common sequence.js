/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++){ // O(n)
        map.set(nums[i], true);
    }

    let longest = 0;
    for(let i = 0; i < nums.length; i++){   // O(n)
        if(!map.get(nums[i]-1)){
            let length = 1; // 1 as we have alredy encountered one element. 
            let next = nums[i]+1;
            while(map.get(next)){  // 0 -    //O(n)
                next++; // O(1)
                length++; // O(1)
            }
            if(longest < length) { // O(1)
                longest = length; // O(1)
            }
        }
    }

    return longest;
};


console.log('LCS', longestConsecutive([100,4,200,1,3,2])); // 4