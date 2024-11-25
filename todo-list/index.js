const apiUrl = "http://localhost:3000";
let todoList = [];
let checkedValue = [];

const getTodoList = () => {
  fetch(apiUrl + "/todo")
    .then((res) => res.json())
    .then((data) => {
      todoList = data;
      createTodoItem();
    });
};

getTodoList();

const isChecked = (item) => {
  return checkedValue.includes(item.id) || item.isChecked;
};

const createTodoItem = () => {
  const listEl = document.querySelector(".list");
  const itemEl = todoList
    .map(
      (item) => `<div class="item">
          <input data-value="${item.id}" class="checkbox" ${isChecked(item) ? "checked" : ""} type="checkbox" />
          <p data-value="${item.id}" class="text ${isChecked(item) ? "done" : ""}">${item.value}</p>
          <button data-value="${item.id}" class="delete-btn">X</button>
        </div>`
    )
    .join("");
  listEl.innerHTML = itemEl;

  // ==============================================================
  const listCheckBox = document.querySelectorAll(".checkbox");

  const updateChecked = (id, value) => {
    fetch(apiUrl + `/todo/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ isChecked: value }),
    });
  };

  listCheckBox.forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = el.dataset.value;
      const targetEl = document.querySelector(`.text[data-value="${id}"]`);
      if (e.target.checked) {
        targetEl.classList.add("done");
        checkedValue.push(id);
        updateChecked(id, true);
      } else {
        targetEl.classList.remove("done");
        checkedValue.filter((p) => p != id);
        updateChecked(id, false);
      }
    });
  });

  // ==============================================================
  const deleteEl = (id) => {
    fetch(apiUrl + `/todo/${id}`, {
      method: "DELETE",
    });
  };
  const listBtnDelete = document.querySelectorAll(".delete-btn");
  listBtnDelete.forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = el.dataset.value;
      deleteEl(id);
    });
  });
};

const createTodo = (data) => {
  fetch(apiUrl + "/todo", {
    method: "post",
    body: JSON.stringify(data),
  })
    .then((res) => {
      getTodoList();
    })
    .catch((err) => alert("Create error"));
};

const textField = document.querySelector("#text-field");

const btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (textField.value) {
    const data = {
      value: textField.value,
      isChecked: false,
    };
    createTodo(data);
  }
  textField.value = "";
});
