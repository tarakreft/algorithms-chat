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
  return [stack.next, stack.item];
}

