import produce from 'immer';

export default function init(state = [], action) {
  switch (action.type) {
    case '@example/ADD_REQUEST':
      return produce(state, draft => {
        draft.push(action.id);
      });
    case '@example/ADD_SUCESS':
      return produce(state, draft => {
        draft.push(action.id);
      });
    default:
      return state;
  }
}
