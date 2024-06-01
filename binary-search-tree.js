class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (node.val < currentNode.val && currentNode.left !== null) {
          currentNode = currentNode.left;
        }
        if (node.val > currentNode.val && currentNode.right !== null) {
          currentNode = currentNode.right;
        }
        if (node.val < currentNode.val && currentNode.left === null) {
          currentNode.left = node;
          return this;
        }
        if (node.val > currentNode.val && currentNode.right === null) {
          currentNode.right = node;
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    if (val < currentNode.val && currentNode.left === null) {
      currentNode.left = node;
      return this;
    }
    if (val > currentNode.val && currentNode.right === null) {
      currentNode.right = node;
      return this;
    }
    if (val < currentNode.val && currentNode.left !== null) {
      return this.insertRecursively(val, currentNode.left);
    }
    if (val > currentNode.val && currentNode.right !== null) {
      return this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return undefined;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (val === currentNode.val) {
          return currentNode;
        } else if (val < currentNode.val) {
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          currentNode = currentNode.right;
        } else {
          return undefined;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (this.root === null) {
      return undefined;
    }
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        return undefined;
      }
      return this.findRecursively(val, currentNode.left);
    }
    if (val > currentNode.val) {
      if (currentNode.right === null) {
        return undefined;
      }
      return this.findRecursively(val, currentNode.right);
    }
    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(array = [], currentNode = this.root) {
    array.push(currentNode.val);
    if (currentNode.left !== null) this.dfsPreOrder(array, currentNode.left);
    if (currentNode.right !== null) this.dfsPreOrder(array, currentNode.right);
    return array;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(array = [], currentNode = this.root) {
    if (currentNode.left) this.dfsInOrder(array, currentNode.left);
    array.push(currentNode.val);
    if (currentNode.right) this.dfsInOrder(array, currentNode.right);
    return array;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(array = [], currentNode = this.root) {
    if (currentNode.left) this.dfsPostOrder(array, currentNode.left);
    if (currentNode.right) this.dfsPostOrder(array, currentNode.right);
    array.push(currentNode.val);
    return array;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currentNode = this.root;
    let result = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
