function isAlphanumeric(char){
    return ( 
        (char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
        (char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
        (char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0))
    );
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;

    while(l < r){
        while(l < s.length && !isAlphanumeric(s[l])){
            l++
        }

        while(r >= 0 && !isAlphanumeric(s[r])){
            r--;
        }

        if(l >= r){
            break;
        }

        if(s[l].toLowerCase() != s[r].toLowerCase()){
            return false;
        }

        l++;
        r--;
    }


    return true;

};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true;

// time complexity is: O(n)
// space complexity: O(1)
