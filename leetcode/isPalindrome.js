const isPalindrome = (str)=>{
    let start = 0, end = str.length - 1; 
    if(str.length === 0){

        return true;
    }
    
    while(start < end){
        if(str.charAt(start) !== str.charAt(end)){
            return false;
        }
        start++;
        end--;
    }

    return true;
};


console.log(isPalindrome('ababa')); // true
console.log(isPalindrome('')); // true
console.log(isPalindrome('true')); // false
console.log(isPalindrome('t')); // true 
/***
 * space complexity: O(1)
 * time complexity: O(n)
 */