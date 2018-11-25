export const stepper = fn => mock => fn.next(mock).value;

export const failureStepper = (iterator, err = {}) => iterator.throw(err).value;
