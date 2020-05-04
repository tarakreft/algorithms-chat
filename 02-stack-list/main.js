export function stackCreate(item) {
  return {
    item: item,
    next: null
};
}

function findNullNode(stack) {
  let tempStack = stack;
  if(tempStack.next && tempStack.next.hasOwnProperty("item")){
    tempStack = tempStack.next;
    return findNullNode(tempStack);
  } else {
    return tempStack;
  }
}

export function stackPush(stack, item) {
  let stackTail;
  const newNode = stackCreate();
  newNode.item = item;
  stackTail = findNullNode(stack);
  stackTail.next = newNode;
}

export function stackPop(stack) {
  let stackTail;
  let poppedItem;
  stackTail = findNullNode(stack);
  poppedItem = {...stackTail};
  delete stackTail.item;
  delete stackTail.next;
  let newTail = findNullNode(stack);
  newTail.next = null;
  return poppedItem.item;
}

