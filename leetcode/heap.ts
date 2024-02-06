class MinHeap {
    private heap: any[];
    private size: number;
    
    constructor(maxSize){
        this.heap = new Array(maxSize);
        this.size = 0;
    }

    heapify(i){
            let smallest = i;  
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            
            if(left < this.size && this.heap[left] < this.heap[smallest]){
               smallest = left;
            }
            
            if(right < this.size && this.heap[right] < this.heap[smallest]){
                smallest = right;
            }
            
            if(smallest != i){
                let temp = this.heap[i];
                this.heap[i] = this.heap[smallest];
                this.heap[smallest] = temp;
                this.heapify(smallest);    
            }
    }

    buildHeap(arr){
        if(arr.length === 0){
            throw new Error('inpurt arr cannot be empty');
        }
        
        for(let i = 0; i < arr.length; i++){
            this.heap[this.size++] = arr[i];
        }
        
        console.log(this.heap);
        
        let i = this.size - 1;
        while(i >= 0){
            this.heapify(i);
            i--;
        }
        
    }

    insert(data){
        this.heap[this.size++] = data;
        
        let i = this.size - 1;
        
        while(i > 0){
            let parent = Math.floor((i - 1) / 2);
            let smallest = parent;

            if(parent < this.size && parent >=0 && this.heap[i] < this.heap[smallest]){
               smallest = i;
            }

            if(parent != smallest){
                let temp = this.heap[parent];
                this.heap[parent] = this.heap[smallest];
                this.heap[smallest] = temp;
                i = parent;
            } else {
                break;
            }              
      }

    }

    delete(){
        let lastIndex = this.size - 1;
        if(lastIndex == 0){
            let deletedItem = this.heap[lastIndex];
            this.heap[this.size--] = null;
            return deletedItem;
        } else if(lastIndex > 1){
            this.heap[0] = this.heap[lastIndex];
            this.heap[lastIndex] = null; 
            this.size--;
            let  i = 0;
            while(i < this.size){
                let smallest = i;
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                
                if(left < this.size && this.heap[left] < this.heap[smallest]){
                    smallest = left;   
                }
                
                if(right < this.size && this.heap[right] < this.heap[smallest]){
                    smallest = right
                }
                
                if(smallest != i){
                    let temp = this.heap[i];
                    this.heap[i] = this.heap[smallest];
                    this.heap[smallest] = temp;
                    i = smallest;
                } else {
                    break;
                }
            }
        } else {
            throw new Error('Heap is empty');
        }
    }

    print(){
        console.log(this.heap);
    }
}

const heap = new MinHeap(10);
heap.print();
// heap.buildHeap([35, 33, 42, 10, 14, 19, 27, 44, 26, 31,])

heap.insert(10);
heap.print();

heap.insert(20);
heap.print();

heap.insert(30);
heap.print();

heap.insert(9);
heap.print();

heap.delete();
heap.print();




