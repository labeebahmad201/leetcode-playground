/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l, r; 
    l = 0; // buy
    r = 1; // sell
    let maxProfit = 0;
    
    
    while(r < prices.length){
        if(prices[l] < prices[r]){
            let profit = prices[r] - prices[l];
            maxProfit = profit > maxProfit ? profit : maxProfit;
        } else{ 
            l = r; // because we have found the smallest(till now) buying price.
        }
        r++;
    }

    return maxProfit;
};

console.log('maxProfit(prices)', maxProfit([7,1,5,3,6,4])); // 5
console.log('maxProfit(prices)', maxProfit([7,6,4,3,1])); // 0

