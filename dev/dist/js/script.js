function testWebP(callback) { //скрипт для проверки поддержки браузером webp формата

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


//Burger menu
let burger_menu = document.querySelector('.nav__burger');
let sidebar = document.querySelector('.sidebar');
let body = document.querySelector('body');

burger_menu.addEventListener("click", () => {
    if (burger_menu.classList.contains('nav__burger_active')) {
        burger_menu.classList.remove('nav__burger_active');
        sidebar.classList.remove('sidebar_active');
        body.classList.remove('lock');
    } else {
        burger_menu.classList.add('nav__burger_active');
        sidebar.classList.add('sidebar_active');
        body.classList.add('lock');
    }
});