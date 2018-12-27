import {combineReducers} from 'redux';
import {
  RECEIVE_LIST
} from '../actions';

const ViewTodoList = (state = {leftList: [], rightList: []}, action) => {
  switch (action.type) {
    case RECEIVE_LIST:
      return {
        leftList: action.leftList,
        rightList: action.rightList
      };
    default:
      return state
  }
};

const rootReducer = combineReducers({
  ViewTodoList
});

export default rootReducer
