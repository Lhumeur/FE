export const RECEIVE_LIST = 'RECEIVE_LIST';

export const receiveTodoList = (json) => (
  {
    type: RECEIVE_LIST,
    leftList: json.map(child => child.title),
    rightList: []
  });

export const getTodoList = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();

  return dispatch(receiveTodoList(json))
};
