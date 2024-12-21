const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNewNode(this.rootNode, data);

    function addNewNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNewNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.rootNode, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchNode(node.left, data);
      } else if (data > node.data) {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data);

    function deleteNode(node, data) {
      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      }
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left && node.right) {
        return node.right;
      }
      if (!node.right && node.left) {
        return node.left;
      }
      let min = node.right;
      while (min.left) {
        min = min.left;
      }
      node.data = min.data;
      node.right = deleteNode(node.right, min.data);
      return node;
    }
  }

  min() {
    let node = this.rootNode;
    while (node.left != null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootNode;
    while (node.right != null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};