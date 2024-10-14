// Hàm | Function
// Định nghĩa: Hàm là 1 khối các câu lệnh. Các câu lệnh sẽ được thực thi khi hàm được gọi
// Cú pháp:

// Hàm thường:

// Normal function
// function tenHam() {
//   Các câu lệnh | code
// }

// Arrow function
// const tenHam = () => {
//   Các câu lệnh | code
// };

// function getClothes() {
//   const clothes = ["Áo", "Quần", "Si líp", "Sịp"];

//   console.log(clothes);
// }

const getClothes = () => {
  const clothes = ["Áo", "Quần", "Si líp", "Sịp"];

  console.log(clothes);
};

getClothes();

// Hàm trả về giá trị:

// function tenHam () {
//     Các câu lệnh

//     return Giá trị
// }

function tinhTong() {
  const a = 15;
  const b = 20;
  const tong = a + b;

  return tong;
}

// const tong = tinhTong();
console.log(tinhTong());

// Hàm có tham số:

// function tenHam(thamSo1,thamSo2,...) {
//     Các câu lệnh
// }

// function tinhTich2So(a, b) {
//   const tich = a * b;
//   return tich;
// }

// const tinhTich2So = (a, b) => a * b;

// console.log(tinhTich2So(5, 2));

// // voucher giảm 30%
// const tinhVoucher = (price, voucher) => price * ((100 - voucher) / 100);
// const tinhThue = (price) => price * ((100 - 8) / 100);

// function tinhTongTien() {
//   const tienVoucher = tinhVoucher(20000, 40);
//   const tienSauThue = tinhThue(tienVoucher);
//   console.log(tienSauThue);
// }
// tinhTongTien();

const hamA = () => {
  console.log("Công việc 1");
};

const hamB = () => {
  setTimeout(() => {
    console.log("Công việc 2");
  }, 3000);
};

const hamC = () => {
  console.log("Công việc 3");
};

hamA();
hamB();
hamC();
