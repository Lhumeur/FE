export const RECEIVE_LIST = 'RECEIVE_LIST';
export const MOVE_ITEM = 'MOVE_ITEM';

export const receiveTodoList = (json) => (
  {
    type: RECEIVE_LIST,
    leftList: json,
    rightList: []
  });

export const moveItem = (index, fromSide) => (
  {
    type: MOVE_ITEM,
    index,
    fromSide
  });

export const getTodoList = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();

  return dispatch(receiveTodoList(json))
};

export const handleClick = (event) => (dispatch) => {

  if (event.target === event.currentTarget) return;

  const {target: {dataset: {index}}} = event;
  const fromSide = event.currentTarget.attributes.side.value;

  return dispatch(moveItem(+index, fromSide));
};
