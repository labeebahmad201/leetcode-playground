/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let l = 0, r = nums.length - 1, min = nums[0];
    while(l <= r){

        if(nums[l] < nums[r]){
            min = Math.min(min, nums[l]);
        }

        const mid = Math.floor((l+r)/2);
        if(nums[mid] < min){
            min = nums[mid];
        }

        if(nums[l] <= nums[mid]){//isSortedArray
            // search right cause min is there.
            l = mid + 1;
        } else { // if not left half then right is sorted
            // search left cause min is there.
            r = mid - 1;
        }

    }    


    return min;
};

findMin('[3,4,5,1,2]'); // 1