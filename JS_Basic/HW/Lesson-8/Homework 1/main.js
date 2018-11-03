var data = [],
    tabId = 0,
    getUsersBtn = document.getElementsByClassName('js_getUsers')[0],
    tabs = document.getElementsByClassName('tabs')[0],
    navBtns = document.getElementsByClassName('nav__btns')[0],
    // Will be implemented someday:
    //goLeft = document.getElementsByClassName('js_goLeft')[0],
    //goRight = document.getElementsByClassName('js_goRight')[0],
    tabsData = document.getElementsByClassName('tabs__data')[0],
    avatar = document.getElementsByClassName('js_avatar')[0],
    firstName = document.getElementsByClassName('js_firstName')[0],
    lastName = document.getElementsByClassName('js_lastName')[0];

window.onload = function () {
    if (localStorage.getItem('data') != null) {
        data = JSON.parse(localStorage.getItem('data'));

        processData(data, localStorage.getItem('tabId'));
        tabs.childNodes[+localStorage.getItem('tabId')].click();
    }
}

getUsersBtn.onclick = function () {
    var xhr = new XMLHttpRequest();

    xhr.timeout = 15000;
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();

    getUsersBtn.innerText = 'Receive data..';
    getUsersBtn.disabled = true;

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        xhr.ontimeout = function () {
            xhr.abort();
            showFaultMessage('Sorry, the query has exceeded the maximum wait time. Please retry the request later.');
        }

        xhr.onerror = function () {
            showFaultMessage('Something went wrong on server side. Please retry the request later.');
        };

        xhr.onload = function () {
            data = JSON.parse(this.response).data;

            if (data.length > 0) {
                localStorage.setItem('data', JSON.stringify(data));
                localStorage.setItem('tabId', '0');

                processData(data, 0);
            } else {
                showFaultMessage('No data were received.');
            }
        };

        getUsersBtn.innerText = 'Get Users List';
        getUsersBtn.disabled = false;
    }
}

function processData(data, tabId) {
    tabs.innerHTML = '';
    tabId == null ? tabId = 0 : tabId;

    for (var i = 1; i <= data.length; i++) {
        var tab = document.createElement('div');

        tab.innerText = 'User ' + i;
        tab.classList.add('tab');
        if (i === tabId + 1) tab.classList.add('js_tab_active');
        if (i > 4) tab.classList.add('js_deactivated');
        tab.setAttribute('tabId', i);

        tabs.appendChild(tab);
    }

    avatar.setAttribute('src', data[tabId].avatar);
    firstName.innerText = data[tabId].first_name;
    lastName.innerText = data[tabId].last_name;

    tabs.classList.remove('js_deactivated');
    tabsData.classList.remove('js_deactivated');

    if (data.length > 4) navBtns.classList.remove('js_deactivated');

    for (var j = 0; j < tabs.childElementCount; j++) {
        tabs.childNodes[j].addEventListener('click', tabsToggle, false);
    }
}

function tabsToggle(event) {
    var target = event.target,
        targetTabId = +target.attributes.tabId.value - 1;

    for (var i = 0; i < tabs.childElementCount; i++) {
        tabs.children.item(i).classList.remove('js_tab_active');
    }

    target.classList.add('js_tab_active');

    avatar.setAttribute('src', data[targetTabId].avatar);
    firstName.innerText = data[targetTabId].first_name;
    lastName.innerText = data[targetTabId].last_name;

    localStorage.setItem("tabId", targetTabId);
}

function showFaultMessage(message) {
    var requestFault = document.getElementsByClassName('js_requestFault')[0];

    requestFault.innerText = message;
    requestFault.classList.toggle('js_deactivated');

    if (message !== '') setTimeout(showFaultMessage, 5000, '');
}