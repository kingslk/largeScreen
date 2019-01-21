import InitialState from './InitialState';
import * as actions from './Actions';
//reducer 纯函数
const reducers = (state = InitialState, action) => {
  switch (action.type) {
    case actions.SET_ROLE:
      return Object.assign({}, state, { role: action.role });
      case actions.SET_USERINFO:
          return Object.assign({}, state, { userInfo: action.userInfo });
    default:
      return state;
  }
};

export default reducers;
