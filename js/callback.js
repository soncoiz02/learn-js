// // Callback: Hàm được truyền vào làm tham số của hàm khác

const ruaMat = () => {
  console.log("Rửa mặt");
};

const danhRang = () => {
  console.log("Đánh răng");
};

const thucDay = (callback) => {
  console.log("Thức dậy");
  callback();
};

thucDay(danhRang);

// Promise
// Cú pháp: new Promies((resolve, reject) => {})

const wakeUp = new Promise((resolve, reject) => {
  if (3 > 2) {
    resolve("Wake up");
  } else {
    reject("Fail");
  }
});

wakeUp
  .then((res) => {
    console.log(res);
    return res + "1";
  })
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

//  =========================================================
// Fetch: Dùng để call api
// Các phương thức: GET, POST, PUT, PATCH
// GET: Lấy dữ liệu
// POST: Tạo dữ liệu
// PUT: Cập nhật dữ liệu
// PATCH: Cập nhật dữ liệu theo trường nhất định
// DELETE: Xóa dữ liệu

// ==============================================================
// GET
const apiUrl = "http://localhost:3001/categories";

fetch(apiUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

//   =============================================================
// POST

const createData = () => {
  const data = {
    slug: "test",
    name: "Test",
    icon: "https://res.cloudinary.com/dyjj7r0o4/image/upload/v1689272036/sfood%20icon/sandwich_1_jtm3nt.svg",
  };
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const btn = document.querySelector(".btn-add");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  createData();
});

// ============================================================
// PUT / PATCH

const updateData = () => {
  const data = {
    name: "HA AN LON",
  };
  // http://localhost:3001/categories/1
  fetch(apiUrl + "/df7e", {
    method: "PATCH",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const btnUpdate = document.querySelector(".btn-update");
btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  updateData();
});

// ============================================================
// DELETE

const deleteData = () => {
  // http://localhost:3001/categories/1
  fetch(apiUrl + "/df7e", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const btnDel = document.querySelector(".btn-del");
btnDel.addEventListener("click", (e) => {
  e.preventDefault();
  deleteData();
});
