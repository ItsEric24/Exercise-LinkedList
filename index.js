class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: this.tail
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
      prev: null
    };
    this.head = newNode;
    const headNext = this.head.next;
    headNext.prev = newNode;
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
      prev: null
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    newNode.prev = leader;
    holdingPointer.prev = newNode;
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
    if(typeof(index) !== "number") return "wrong index"
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.value;
  }
  remove(index){
    if(typeof(index) !== "number") return "wrong index"
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const unwantedNodeNext = unwantedNode.next;
    leader.next = unwantedNode.next;
    unwantedNodeNext.prev = leader;
    this.length--;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(1);
myLinkedList.insert(1, 4);
myLinkedList.remove(1);
console.log(myLinkedList);
console.log(myLinkedList.printList());
console.log(myLinkedList.lookUp(1));