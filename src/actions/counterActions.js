import promise from 'es6-promise'
promise.polyfill();
import 'isomorphic-fetch';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const REQUEST_COUNTER = 'REQUEST_COUNTER';

export function incrementCounter() {
  return {type: INCREMENT_COUNTER};
}

export function countRequest() {
  const count = 1;
  return {type: REQUEST_COUNTER, count};
}

export function test() {
  let card = [];

  fetch('github.com/dchyslenok/React-Redux-EnglishWords/blob/master/package.json')
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      card = response.json();
      console.log(card, 'card');

    })
    .then(function (stories) {
      console.log(stories, 'stories');
    });

  return {type: 'TEST', card};
}