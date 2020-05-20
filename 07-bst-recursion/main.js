export function bstCreate() {
  return {
    root: null
  }
}

export function bstNodeCreate(item) {
  return {
    item: item,
    left: null,
    right: null
  }
}

function fillEmptyNode(node, item){
  if(item < node.item){
    if(!node.left){
      node.left = bstNodeCreate(item);
    } else {
      fillEmptyNode(node.left, item);
    }
  } else {
    if(!node.right){
      node.right = bstNodeCreate(item);
    } else {
      fillEmptyNode(node.right, item);
    }
  }
}

export function bstAdd(tree, item) {
  if(!tree.root){
   tree.root = bstNodeCreate(item);
  } else {
    fillEmptyNode(tree.root, item);
  }
}

function organizeNodes(node, callback){
  if(node.item === null){
    return;
  }
  if(node.left){
    organizeNodes(node.left, callback)
  }
  callback(node.item);

  if(node.right){
    organizeNodes(node.right, callback)
  }
}

export function bstEach(tree, callback) {
 organizeNodes(tree.root, callback);
}

function* organizeNodesIterator(node){
  if(!node){
    return;
  }
  yield* organizeNodesIterator(node.left)
  yield node.item;
  yield* organizeNodesIterator(node.right)
}

export function* bstIterator(tree) {
  yield* organizeNodesIterator(tree.root);
}
