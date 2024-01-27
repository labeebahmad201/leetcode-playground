/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let longestNiceString = '';
    
    for(let start=0; start < s.length; start++){
        let lowerCaseBitMap = 0, upperCaseBitMap = 0;        
        for(let end=start; end < s.length; end++){
            let charCode = s.charCodeAt(end);
            if(charCode > 96){
                lowerCaseBitMap |= 1 << (charCode - 97);
            } else {
                upperCaseBitMap |= 1 << (charCode - 65); // converts code to zero based index wrt 65
            }
            if(lowerCaseBitMap === upperCaseBitMap && end - start + 1 > longestNiceString.length){
                longestNiceString = s.substring(start, end+1);
            }
        }
    }

    return longestNiceString
};

console.log(longestNiceSubstring('YazaAay'));

/*****
 * 
 * A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

 

Example 1:

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
Example 2:

Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
Example 3:

Input: s = "c"
Output: ""
Explanation: There are no nice substrings.
 

Constraints:

1 <= s.length <= 100
s consists of uppercase and lowercase English letters.

 */