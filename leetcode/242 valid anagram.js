/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let countArr = [];

    for(let i=0; i < s.length; i++){
        if(!countArr[s[i]]){
            countArr[s[i]] = 0;
        }

        if(!countArr[t[i]]){
            countArr[t[i]] = 0;
        }

        countArr[s[i]]++;
        countArr[t[i]]--;
    }

    const keys = Object.keys(countArr);
    for(let i=0; i < keys.length; i++){
        if(countArr[keys[i]] !== 0){
            return false;
        }
    }

    
    return true;

};