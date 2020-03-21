// document.getElementById().style();//устарело
// document.getElementsByClassName().;//устарело
// document.getElementsByTagName('div');//устарело



// document.querySelector("div")[2];
// document.querySelectorAll(".class");
// document.querySelector("div").nodeType;//показывает цифрой что внутри, 1-эелемент 3-текст
// document.querySelector("div").innerHTML;//показывает что внутри
// document.querySelector("div").innerText; //Возвращает текст внутри
// document.querySelector("div").innerText = "24234fg6"; //Присваивает текстовое значение выбранному элементу
// document.querySelector("div").append("любая переменная или содержимое"); // Добавляет содержимое
// document.querySelector("div").prepend;
// document.querySelector("div").before;
// document.querySelector("div").after;
// document.querySelector("div").replaceWith();
// document.querySelector("div").remove();
// document.querySelector("div").insertAdjacentElement("beforebegin", "<p>123</>");
// document.createElement("");
// document.createTextNode("");

// document.addEventListener('scroll', onScroll);

// function onScroll() {
//     let current = window.scrollY;
//     console.log(current);
//     document.querySelectorAll("")

// }
// Перекрашивание кнопок
let currentLink = document.getElementById("home");
let modal = document.getElementById("modal");

let link2 = document.querySelectorAll("nav > li");

// console.log(link + "1", link2 + "2");

currentLink.addEventListener("click", function (event) {
    event.preventDefault();  //отмена перехода по ссылке по умолчанию
    // currentLink.classList.add("current");  //добавляет класс
    currentLink.classList.toggle("currentLink");
    


    // link.classList.remove("current");
    console.log(currentLink);
});

