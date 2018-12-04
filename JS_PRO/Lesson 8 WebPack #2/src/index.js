// пример динамической подгрузки либ:
// async function getLib() {
//     const { default: _ } = await import(/* webpackChunkName: "lodash"*/ 'lodash');
//
//     return _;
// }

// setTimeout(function () {
// //     getLib().then(function (res) {
// //         console.log(res);
// //     });
// // }, 5000);

//import loginPage from "./templates/login-page.html";



    const {hash} = location;

    if (!hash.length) {
        import(/* webpackChunkName: "login"*/ './components/login.component').then();
    } else {
        import(/* webpackChunkName: "todo"*/ './components/todo-list.component').then();
    }
