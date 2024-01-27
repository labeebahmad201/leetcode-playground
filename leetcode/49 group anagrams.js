/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = new Map();

    for(let i = 0; i <strs.length; i++){
       let word = strs[i].split('').sort().join('');
       let mapEntry = map.get(word);
       if(mapEntry){
           mapEntry.push(strs[i]);
       }else{
           map.set(word, [strs[i]])
       }
    }


    return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]

// Sorting Each String: Assuming the average length of the strings is n and there are m strings to sort, the time complexity of sorting each string using the TimSort algorithm (Python's default sort algorithm) is O(n log n). Since we need to sort m such strings, the total time complexity for this part is O(m * n log n).

