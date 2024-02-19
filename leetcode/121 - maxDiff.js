/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0; // target.

    let l = 0, r = 1;

    while(r < prices.length){
        if(prices[l] < prices[r]){
            let profit = prices[r] - prices[l];
            if(maxProfit < profit){
                maxProfit = profit;
            }
        } else {
            l = r;
        }
        r++; // keeep going as need to find a new number to compare with

    }

    return maxProfit;
};

maxProfit([7,1,5,3,6,4]); // 5