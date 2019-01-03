import {combineReducers} from 'redux';
import {
  RECEIVE_LIST, MOVE_ITEM
} from '../actions';

const ViewTodoList = (state = {leftList: [], rightList: []}, action) => {
  switch (action.type) {

    case RECEIVE_LIST:
      return {
        leftList: action.leftList,
        rightList: action.rightList
      };

    case MOVE_ITEM:
      let leftSide = state.leftList;
      let rightSide = state.rightList;

      if (action.fromSide === "leftList") {
        rightSide.push(leftSide[action.index]);
        rightSide.sort((l, r) => l.id - r.id);

        leftSide = leftSide.filter((item, indx) => indx !== action.index);
      }
      if (action.fromSide === "rightList") {
        leftSide.push(rightSide[action.index]);
        leftSide.sort((l, r) => l.id - r.id);

        rightSide = rightSide.filter((item, indx) => indx !== action.index);
      }
      return {
        leftList: leftSide,
        rightList: rightSide
      };
    default:
      return state
  }
};

const rootReducer = combineReducers({
  ViewTodoList
});

export default rootReducer;
