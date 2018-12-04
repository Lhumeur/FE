import todoListPage from "../templates/todo-list-page.html";
import {getTodoList} from "../services/request.service";

document.body.innerHTML = todoListPage;

getTodoList().then(function (json) {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const section = document.getElementsByTagName("section")[0];
    let cloneLi = null;

    for (const item of json) {
       cloneLi = li.cloneNode();
       cloneLi.innerText = item.title;
       ul.appendChild(cloneLi);
    };

    section.innerHTML = "";
    section.appendChild(ul);

});