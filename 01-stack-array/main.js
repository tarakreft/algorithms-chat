export function stackCreate() {
  return [];
}

export function stackPush(stack, item) {
  stack[stack.length] = item;
}

export function stackPop(stack) {
  if(stack.length !== 0){
    const popResult = stack[stack.length - 1];
    stack.length = [stack.length - 1]
    return popResult;
  }
}
