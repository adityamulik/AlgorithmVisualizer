/**
 * Reference: GeekForGeeks (https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Root of the binary search tree
    this.root = null;
  }

  // Functions to be implementend
  // insert(data)
  // remove(data)

  // Helper Function
  // findMinNode()
  // getRootNode()
  // inOrder(node)
  // preOrder(node)
  // postOrder(node)
  // search(node, data)

  // helper method which creates a new node to
// be inserted and calls insertNode

insert(data) {

  // Creating a node and initialising
  // with data
  const newNode = new Node(data);

  // root is null then node will
  // be added to the tree and made root.
  if (this.root === null) {
    this.root = newNode;
  } else {
    // find the correct position in the
    // tree and add the node
    this.insertNode(this.root, newNode);
  }
}

// Method to insert a node in a tree
// it moves over the tree to find the location
// to insert a node with a given data
insertNode(node, newNode){

  // if the data is less than the node
  // data move left of the tree
  if (newNode.data < node.data) {
    // if left is null insert node here
    if(node.left === null) {
      node.left = newNode;
    } else {
      // if left is not null recur until
      // null is found
      this.insertNode(node.left, newNode);
    }
  }
  // if the data is more than the node
  // data move right of the tree
  else {
    // if right is null insert node here
    if(node.right === null) {
      node.right = newNode;
    } else {
      // if right is not null recur until
      // null is found
      this.insertNode(node.right, newNode);
    }
  }
}
}


const bst = new BinarySearchTree();

bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

console.log(JSON.stringify(bst));