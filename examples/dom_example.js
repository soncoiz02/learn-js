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

const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("btn-login");

const showPassBtn = document.getElementById("show-password");

// ============================================================

const emailErr = document.querySelector(".email-error");
const usernameErr = document.querySelector(".username-error");
const passwordErr = document.querySelector(".password-error");

// regex
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const usernameRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

const validateRequired = (value) => {
  if (value.trim() == "") {
    return false;
  }
  return true;
};

const resetErrors = () => {
  emailErr.innerHTML = "";
  usernameErr.innerHTML = "";
  passwordErr.innerHTML = "";
};

const validate = (data) => {
  let isError = false;
  resetErrors();
  const { email, username, password } = data; // destructering

  // validate email
  if (validateRequired(email) == false) {
    emailErr.innerHTML = "Chưa nhập email";
    isError = true;
  } else if (emailRegex.test(email) === false) {
    emailErr.innerHTML = "Sai định dạng email";
    isError = true;
  }

  // validate username
  if (validateRequired(username) == false) {
    usernameErr.innerHTML = "Chưa nhập username";
    isError = true;
  } else if (usernameRegex.test(username) == false) {
    usernameErr.innerHTML = "Username có độ dài từ 8-20 ký tự và không chứa ký tự đặc biệt";
    isError = true;
  }

  // validate password
  if (validateRequired(password) == false) {
    passwordErr.innerHTML = "Chưa nhập password";
    isError = true;
  }

  return isError;
};

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;

  const loginData = {
    username: username,
    password: password,
    email: email,
  };

  const isValidate = validate(loginData);
  if (isValidate == true) return;

  console.log(loginData);
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

// IIFE function
(function () {
  const listInputs = [
    {
      inputEl: emailInput,
      error: emailErr,
    },
    {
      inputEl: usernameInput,
      error: usernameErr,
    },
    {
      inputEl: passwordInput,
      error: passwordErr,
    },
  ];

  listInputs.forEach((item) => {
    item.inputEl.addEventListener("keydown", (event) => {
      item.error.innerHTML = "";
    });
  });
})();
