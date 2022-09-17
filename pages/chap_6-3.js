const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

// 예제 이해

/*
A 2
B 1
C 3 
D 2

B 1 
C 3 
D 2
A 2

C 3
D 2
A 2
B 1

C가 첫 번째, D가 두 번째..

*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek(){
        return this.head
    }
}

function solution(priorities, location){
    const queue = new Queue();
    for (let i = 0; i < priorities.length; i += 1){
        queue.enqueue([priorities[i], i]);
    }

    priorities.sort((a,b) => b-a );
}