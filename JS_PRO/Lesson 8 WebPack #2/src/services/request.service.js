export const getTodoList = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await responce.json();
    return json;
};

//export default getTodoList;