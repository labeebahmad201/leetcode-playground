
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let l = 0, r = height.length - 1;
    let maxArea = 0;
    while(l < r){
        let area = (r-l) * Math.min(height[l], height[r]); // w * h => area
        maxArea = Math.max(maxArea, area);
        if(height[l] < height[r]){
            l++;
        } else if(height[l] > height[r]){
            r--
        } else {
            l++;
        }
    }    

    return maxArea;
};

maxArea([1,8,6,2,5,4,8,3,7]); // 49

