import promise from 'es6-promise';
import 'isomorphic-fetch';

export default class CardsThemeAPI {

  getAll() {
    return fetch('http://englishwords.chyslenok.com/api_v2/categorie')
      .then((response) => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(() => {
        return false;
      });
  }
}
