const header = document.querySelector("header");

window.onscroll = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// ==========================================================================================

const listCate = [
  {
    label: "Burger",
    code: "burger",
  },
  {
    label: "Pizza",
    code: "pizza",
  },
  {
    label: "Bread",
    code: "bread",
  },
  {
    label: "Sausage",
    code: "sausage",
  },
  {
    label: "Fried Chicken",
    code: "fried-chickend",
  },
  {
    label: "Steak",
    code: "steak",
  },
];
const renderListBtnCate = (code) => {
  const listBtnElements = listCate
    .map((item) => {
      return `<button class="cate-btn ${item.code == code ? "active" : ""}">${item.label}</button>`;
    })
    .join("");
  const listCateEl = document.querySelector(".list-cate");
  if (listCateEl) {
    listCateEl.innerHTML = listBtnElements;
  }
};

renderListBtnCate("burger");

const listCateBtn = document.querySelectorAll(".cate-btn");

listCateBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    const activeEl = document.querySelector(".cate-btn.active");
    if (activeEl) activeEl.classList.remove("active");
    e.target.classList.add("active");
  });
});
