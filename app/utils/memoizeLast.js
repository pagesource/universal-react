// @flow

const eqArray = (left: Array<mixed>, right: Array<mixed>): boolean =>
  left.length === right.length &&
  left.every((value, index) => right[index] === value);

const memoizeLast = (fn: Function) => {
  let lastMemoized;

  const memoizedFn = (...args: any[]) => {
    if (lastMemoized && eqArray(lastMemoized.args, args)) {
      return lastMemoized.answer;
    }

    const result = fn(...args);

    lastMemoized = { args, answer: result };

    return result;
  };

  return memoizedFn;
};

export default memoizeLast;
