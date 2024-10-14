// EVENT: Sự kiện
// Mouse event: sự kiện liên quan đến chuột
// Keyboard event: sự kiện liên quan đến bàn phím

// Mouse event: click, mouse over, mouse enter, mouse down, mouse up, mouse move, mouse leave

// Click: sự kiện khi ấn chuột vào 1 phần tử HTML
// Mouse over: di chuột qua 1 phần tử HTML
// Mouse enter: con trỏ chuột nằm trong 1 phần tử HTML
// Mouse down: ấn chuột vào 1 phần tử HTML
// Mouse up: nhả chuột sau khi ấn vào 1 phần tử HTML
// Mouse move: di chuyển con trỏ chuột trong phạm vi phần tử HTML
// Mouse leave: di con trỏ chuột ra khỏi vùng của 1 phần tử HTML

// const areaElement = document.querySelector(".area");

// areaElement.addEventListener("click", (event) => {
//   console.log("mouse click");
//   const el = event.target;
//   el.style.background = "red";
// });

// areaElement.addEventListener("mouseover", (event) => {
//   console.log("mouse over");
//   const el = event.target;
//   el.style.background = "red";
// });

// areaElement.addEventListener("mouseenter", (event) => {
//   console.log("mouse enter");
//   const el = event.target;
//   el.style.background = "red";
// });

// areaElement.addEventListener("mousedown", (event) => {
//   console.log("mouse down");
//   //   const el = event.target;
//   //   el.style.background = "red";
// });

// areaElement.addEventListener("mouseup", (event) => {
//   console.log("mouse up");
//   //   const el = event.target;
//   //   el.style.background = "red";
// });

// areaElement.addEventListener("mousemove", (event) => {
//   console.log("mouse move");
//   //   const el = event.target;
//   //   el.style.background = "red";
// });

// areaElement.addEventListener("mouseleave", (event) => {
//   console.log("mouse leave");
//   //   const el = event.target;
//   //   el.style.background = "red";
// });

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("btn-login");

const showPassBtn = document.getElementById("show-password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  console.log({ username, password });
});

let isShow = false;

showPassBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isShow === false) {
    passwordInput.setAttribute("type", "text");
    isShow = true;
  } else if (isShow === true) {
    passwordInput.setAttribute("type", "password");
    isShow = false;
  }
});
