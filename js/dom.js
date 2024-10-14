// DOM: Document Object Model

// Các cách truy xuất HTML element
// Sử dụng getElementById
// Cú pháp: document.getElementById(id của phần tử HTML)

const nameInput = document.getElementById("name");

nameInput.style.border = "1px solid gray";

console.log(nameInput);

// Sử dụng getElementByClassName
// Cú pháp: document.getElementByClassName(class của phần tử HTML)

const boxEl = document.getElementsByClassName("box");

// boxEl[0].style.background = "red";
// boxEl[1].style.background = "green";
// boxEl[2].style.background = "blue";

console.log(boxEl[1]);

// Sử dụng getElementByTagName
// Cú pháp: document.getElementByTagName(tên thẻ HTML)

const divEl = document.getElementsByTagName("div");

console.log(divEl);

// Sử dụng querySelector, querySelectorAll
// Cú pháp: document.querySelector(selector)

const element = document.querySelector(".box[aria-label='123']");
element.style.background = "yellow";
element.innerHTML = "<p>Hà Buồi To</p>";
element.innerHTML += "<p>Hà Buồi Bé</p>";
console.log(element);
