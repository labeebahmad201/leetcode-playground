const reverseArray = (arr)=>{
    let left = 0, right = arr.length - 1;
    
    while(left < right){
        const temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;


        
        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray([1,2,3,4,5,6]));
console.log(reverseArray([1,2,3]));
console.log(reverseArray([1,2]));
console.log(reverseArray([1]));