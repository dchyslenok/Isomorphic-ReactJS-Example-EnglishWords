'use strict';
import promise from 'es6-promise';
import 'isomorphic-fetch';
import {testSuccess} from '../../actions/counterActions'

export default function middleware(store) {
  return (next) => (action) => {
    switch (action.type) {
      case 'TEST':
        fetch('http://englishwords/api_v1/categorie')
          .then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
          })
          .then(function(stories) {
            store.dispatch(testSuccess(stories));
          });
        console.log(action, 'qwe');

      break;
    }
    return next(action);
  }
}