/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let preFix = new Array(nums.length);

    let product = 1;
    for(let i =0; i < nums.length; i++){ 
        if(i === 0){
            preFix[i] = 1; 
        } else {
            preFix[i] = product; // since we need the previous product
        }

        product = product * nums[i]; // updates product for next iteration.  
    }

    let postFix = new Array(nums.length);
    product = 1;
    for(let i = postFix.length - 1; i >= 0; i--){
        if(i === postFix.length - 1){
            postFix[i] = 1;
        }else {
            postFix[i] = product;
        }

        product = product * nums[i]; // updates product for next iteration.
    }

    let result = [];
    for(let i = 0; i < nums.length; i++){
        result[i] = preFix[i] * postFix[i];
    }

    return result;
};

productExceptSelf([1,2,3,4]); // [24,12,8,6]