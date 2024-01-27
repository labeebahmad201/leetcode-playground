
function generateAllSubstring(str){
    let result = [];
    for(let i = 0; i < str.length; i++){
        let concatenatedSubStr = '';
        for(let j=i; j < str.length; j++){
            concatenatedSubStr += str[j];
            result.push(concatenatedSubStr); // saves substring generated upto this point.
        }
    }

    return result;
}

console.log('generateAllSubstring("abcd")', generateAllSubstring("abcd"));  
/**
[
    "a",
    "ab",
    "abc",
    "abcd",
    "b",
    "bc",
    "bcd",
    "c",
    "cd",
    "d"
]
**/