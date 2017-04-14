export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const REQUEST_COUNTER = 'REQUEST_COUNTER';

export const TIME_REQUEST_STARTED = 'TIME_REQUEST_STARTED';
export const TIME_REQUEST_FINISHED = 'TIME_REQUEST_FINISHED';
export const TIME_REQUEST_ERROR = 'TIME_REQUEST_ERROR';

export function incrementCounter() {
  return {type: INCREMENT_COUNTER};
}

export function countRequest() {
  const count = 1;
  return {type: REQUEST_COUNTER, count};
}


export function test(cards) {
  return { type: 'TEST', cards };
}