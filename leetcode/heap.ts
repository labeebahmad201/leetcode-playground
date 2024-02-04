
class MinHeap<T> {
    private heap: Array<T>;
    private size: number;
        
    constructor(maxSize){
        this.heap = new Array(maxSize);
        this.size = 0;
    }
    
    heapify(i){
        let smallest = i;
        let left = 2*i + 1;
        let right = 2*i + 2;
        // out of bound check to make sure left child exists
        if(left < this.size && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }
        
        // out of bound check to make sure right child exists
        if(right < this.size && this.heap[right] < this.heap[smallest]){
            smallest = right;    
       }
        
        if(smallest != i){
            let temp = this.heap[i];
            this.heap[i] = this.heap[smallest];
            this.heap[smallest] = temp;
            
            this.heapify(i);
        }
    }
    
    buildHeap(arr: any[]){
        
        for(let i = 0 ; i < arr.length; i++){
            this.heap[this.size++] = arr[i];
        }
        
        for(let i = this.size - 1; i >= 0; i--){
            this.heapify(i);
        }
        
    }

    print(){
        console.log(this.heap);
    }
    
    // traversal
    // insert 
    // delete
    

    getSize(){
        return this.size;
    }

    getMin(){
        return this.size > 0 ? this.heap[0] : null;
    }
}


let heap = new MinHeap(10);
heap.print();
heap.buildHeap([1, 5, 6, 8, 9, 7, 3]);
heap.print();
