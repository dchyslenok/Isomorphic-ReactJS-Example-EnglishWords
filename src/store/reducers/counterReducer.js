import { INCREMENT_COUNTER } from 'actions/counterActions';

const initialState = {
  value: 10,
  cards: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { value: state.value + 1 };
    case 'TEST':
      return { ...state, cards: action.cards };
    default:
      return state;
  }
}
