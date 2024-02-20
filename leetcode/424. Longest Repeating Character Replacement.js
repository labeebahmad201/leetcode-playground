/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let l = 0, r = 0;
    const map = new Map();
    let mostFrequentCharCount = 0;
    let longestRepeatingChar = 0;


    while(r < s.length){
        const count = map.get(s[r]);
        if(!count){
            map.set(s[r], 1);            
        } else {
            map.set(s[r], count + 1);
        }

        mostFrequentCharCount = Math.max(mostFrequentCharCount, map.get(s[r]) || 0);

        let isValidWindow = (r-l+1) - mostFrequentCharCount;  // (r-l+1)  -> size of the window. 
        if(isValidWindow <= k){
            longestRepeatingChar = Math.max((r-l+1), longestRepeatingChar);            
        } else {
            let oldCount = map.get(s[l]);
            map.set(s[l], oldCount > 0 ? oldCount - 1 : 0),
            l++;
        }

        r++; // right is moved regardless of l. 
    }

    return longestRepeatingChar;

};

characterReplacement("AABABBA", 1); // 4