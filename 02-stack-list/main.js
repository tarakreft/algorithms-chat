export function stackCreate() {
  return {};
}

export function stackPush(stack, item) {
  const amount = Object.entries(stack).length;
  stack[amount] = item;
}

export function stackPop(stack) {
  const amount = Object.entries(stack).length - 1;
  const poppedItem = stack[amount];
  delete stack[amount];
  return poppedItem;
}
