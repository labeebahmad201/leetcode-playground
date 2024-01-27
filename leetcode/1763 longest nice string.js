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