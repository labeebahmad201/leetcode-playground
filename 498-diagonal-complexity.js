/****

Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let m = mat.length;  // rows
    let n = mat[0].length; // cols
    if(m === 0 && n  === 0){
        return [];
    }

    let row = 0, col = 0;
    let result = [];
    let up = true; 
    while(row < m && col < n){
        if (up) {
            while(row>0 && col < n-1){
                result.push(mat[row][col]);
                row--;
                col++;
            }
            result.push(mat[row][col]);
            if(col === n-1){
                row++;
            }else {
                col++;
            }
        } else {
            while(row < m - 1 && col >0){
                result.push(mat[row][col]);
                row++;
                col--;
            }
            result.push(mat[row][col]);
            if(row === m - 1){
                col++;
            } else {
                row++;
            }
        }
        up = !up;
    }
    return result;
};


const output = findDiagonalOrder( [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]);

console.log('output', output);
