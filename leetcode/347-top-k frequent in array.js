/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    // brute force solution
    const freqMap = {};
    for(let i=0; i < nums.length; i++){
        if(!freqMap[nums[i]]){
            freqMap[nums[i]] = 1;
        } else {
            freqMap[nums[i]] = freqMap[nums[i]] + 1;
        }
    }

    let keys = Object.keys(freqMap);
    
    let numsAndFreq = [];
    for(let i = 0; i < keys.length; i++){
        numsAndFreq.push([ Number(keys[i]), freqMap[keys[i]] ]);
    }

    numsAndFreq.sort((x, y)=>{ 
        return x[1] > y[1] ? -1 : 1;
    });

    let result = [];
    for(let i = 0; i < k; i++){
        if(numsAndFreq[i]){
            result.push(numsAndFreq[i][0])
        } else {
            break;
        }

    }    

    return result;

};

topKFrequent([1,1,1,2,2,3], 2); // [1,2]

///...............................///...............................///...............................///...............................///...............................
///...............................///...............................///...............................///...............................///...............................///...............................
///...............................///...............................///...............................///...............................///...............................
///...............................///...............................///...............................///...............................///...............................///...............................
///...............................///...............................///...............................///...............................///...............................
///...............................///...............................///...............................///...............................///...............................///...............................

// O( k log n solution )
class MaxHeap {
    constructor(maxSize) {
        this.heap = new Array(maxSize);
        this.size = 0;
    }

    buildHeap(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.heap[this.size++] = arr[i];
        }

        for (let i = this.size - 1; i >= 0; i--) {
            this.heapify(i);
        }

    }

    heapify(i) { // O(n)
        let greatest = i; // assumption
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < this.size && this.heap[left][1] > this.heap[greatest][1]) {
            greatest = left;
        }

        if (right < this.size && this.heap[right][1] > this.heap[greatest][1]) {
            greatest = right;
        }

        if (greatest != i) {
            let temp = this.heap[i];
            this.heap[i] = this.heap[greatest];
            this.heap[greatest] = temp;
            this.heapify(greatest);
        }

    }

    insert(data) { // O(logn)
        this.heap[this.size++] = data;
        let i = this.size;
        let parent = Math.floor((i - 1) / 2);
        let greatest = parent; // assumption;

        if (parent < this.size && parent >= 0 && this.heap[i] > this.heap[greatest]) {
            greatest = i;
        }

        if (greatest != parent) {
            let temp = this.heap[parent];
            this.heap[parent] = this.heap[greatest];
            this.heap[greatest] = temp;
        }
    }

    getSize() { // O(1)
        return this.size;
    }

    extract() {
        let lastIndex = this.size - 1;

        if (lastIndex === 0) {
            let deletedValue = this.heap[lastIndex];
            this.heap[lastIndex] = null;
            this.size--;
            return deletedValue
        } else if (lastIndex > 0) {
            let deletedValue = this.heap[0];
            this.heap[0] = this.heap[lastIndex];
            this.heap[lastIndex] = null
            this.size--;

            let i = 0;

            while (i < this.size) {
                let greatest = i
                let left = 2 * i + 1;
                let right = 2 * i + 2;

                if (left < this.size && this.heap[left][1] > this.heap[greatest][1]) {
                    greatest = left;
                }

                if (right < this.size && this.heap[right][1] > this.heap[greatest][1]) {
                    greatest = right;
                }

                if (greatest != i) {
                    let temp = this.heap[i];
                    this.heap[i] = this.heap[greatest];
                    this.heap[greatest] = temp;
                    i = greatest;
                } else {
                    break;
                }

            }

            return deletedValue;
        } else {
            return null;
        }

    }

    print(){
        console.log('this.heap >>>> ', this.heap);
    }


}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    // k log(n) solution

    let freqMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (freqMap[nums[i]]) {
            freqMap[nums[i]]++;
        } else {
            freqMap[nums[i]] = 1;
        }
    }

    // console.log('freqMap', freqMap);
    let keys = Object.keys(freqMap);
    let arrWithFreq = []; //[[1,2], [1, 2]]
    for (let i = 0; i < keys.length; i++) {
        arrWithFreq.push([Number(keys[i]), freqMap[keys[i]]])
    }

    const heap = new MaxHeap(k);
    heap.buildHeap(arrWithFreq); // O(n)
    // heap.print();

    let result = [];

    for(let i = 0; i < k; i++){ // will run k times.
        let size = heap.getSize();
        if(size > 0){
            let [number, freq] = heap.extract();
            // console.log('...',number);
            result.push(number);
        }

    }

    return result;

};



///.................................................................................................................


// O(n) solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    let map = {};
    for(let i =0; i < nums.length; i++){ // O(n)
        if(map[nums[i]]){
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    let count = new Array(nums.length);
    const keys = Object.keys(map);  // O(n)
    for(let i = 0; i < keys.length; i++){ // O(n)
        let number = keys[i];
        let frequency = map[number];
        if(!count[frequency]){
            count[frequency] = [number];
        } else {
            count[frequency].push(number);
        }
    }

    let result = [];
    for(let i= count.length - 1; i >= 0; i--){ // O(n)
        if(count[i]){
            for(let j = 0; j < count[i].length; j++){  
                if(result.length < k){
                    result.push(count[i][j]);
                } else {
                    break;
                }
            }
        }

        if(result.lenght >= k){
            break;
        }
    }

    return result;

};

topKFrequent([1,1,1,2,2,3], 2); // [1,2]

