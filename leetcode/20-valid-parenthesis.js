/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let closedToOpen = {
        ')' : '(',
        '}': '{',
        ']': '['
    };

    let isCloseBracket = {
        ')': true,
        ']': true,
        '}': true,
    }

    let isOpenBracket = {
        '(': true,
        '[': true,
        '{': true,
    }

    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(stack.length === 0 && isCloseBracket[s[i]]){
            return false;
        }
        
        if(isOpenBracket[s[i]] === true){
            stack.push(s[i]);
        } else {
            let top = stack[stack.length - 1];
            closedToOpen[s[i]]
            if(top === closedToOpen[s[i]]){
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if(stack.length !== 0){
        return false;
    }

    return true;

};

isValid("()"); // true;
isValid("()[]{}"); // true;
isValid("(]"); // false