export function stackCreate(item, next) {
  return {
    item: item,
    next: next
  };
}

export function stackPush(stack, item) {
  const newNode = stackCreate(item, stack);
  return newNode;
}

export function stackPop(stack) {
  if(stack.next){
    const newNode = stackCreate(stack.next.item, stack.next.next);
    return [stack.next, stack.item];
  } else {
    const newNode = stackCreate(stack.item, stack.next);
    return [stack.next, stack.item];
  }
}

