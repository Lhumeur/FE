import loginPage from "../templates/login-page.html";

const loginForm = document.createElement('section');
loginForm.innerHTML = loginPage;
document.body.appendChild(loginForm);

document.getElementsByTagName("button")[0].addEventListener('click', (event) => {
    const passValue = document.getElementById("pass").value;
    if (passValue.length > 6) {
        event.target.setAttribute("disabled", "disabled");

        // todoPage().then(function () {
        //     location.href += "#todo";
        // });

        import(/* webpackChunkName: "todo"*/ './todo-list.component').then(function () {
            location.href += "#todo";
        });
    }
});

// async function todoPage() {
//     const {default: _} = await import(/* webpackChunkName: "todo"*/ './todo-list.component');
//     return _;
// }
