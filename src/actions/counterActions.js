export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const REQUEST_COUNTER = 'REQUEST_COUNTER';

export function incrementCounter() {
  return { type: INCREMENT_COUNTER };


}export function countRequest() {
  const count = 1;
  return { type: REQUEST_COUNTER, count };
}