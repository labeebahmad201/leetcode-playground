/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0];

    if(nums.length == 1){
        return min;
    }

    let l = 0;
    let r = nums.length - 1;

    while(l < r){
        let mid = parseInt((l + r) / 2);
        if(nums[mid] < min){
            min = nums[mid];
        }
        if(nums[l] <= nums[mid]){
            l = mid
            // serch right
        } else {
            // search left
            r = mid;
        }
        
        if(l+1 == r){
            min = nums[l] < min ? nums[l] : min;
            min = nums[r] < min ? nums[r] : min;
            break;             
        }
    }

    return min;    
};

findMin('[3,4,5,1,2]'); // 1