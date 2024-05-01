class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
  }
  printList() {
    let currentNode = this.head;
    const array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array
  }
  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }
  traverseToIndex(index){
    if(typeof(index) !== "number") return "Wrong index";
    let counter = 0;
    let currentNode = this.head

    while(counter !== index){
      currentNode = currentNode.next
      counter++;
    }
    return currentNode;
  }
  lookUp(index){
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.value;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 75);
console.log(myLinkedList.printList());
console.log(myLinkedList.lookUp(3));
