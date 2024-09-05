// https://kquiz.vn/de-thi/20_bai_tap_ve_mang_array_trong_javascript/53
// Mảng
// Khai báo mảng:
// var | let | const + tên biến = []
let subject = ["Toán", "Lý", "Hóa"];
console.log(subject);

// var | let | const + tên biến = new Array(độ dài mảng)
let data = new Array(8);
console.log(data);

// =========================================================
// Truy xuất giá trị của phần tử mảng
// Cú pháp: ten_mang[chỉ số]
let clothes = ["Áo", "Quần", "Si líp", "Sịp"];
// Chỉ số của mảng bắt đầu từ 0
let giaTriNgauNhien = clothes[2];
console.log(giaTriNgauNhien);

// =========================================================
// Lấy độ dài của mảng
// Cú pháp: ten_mang.length
let clothesLength = clothes.length;
console.log(clothesLength);

// =========================================================
// Truy xuất từng giá trị của mảng thông qua vòng lặp
// Lấy từng giá trị của mảng clothes

// Vòng lặp for:
for (let i = 0; i < clothesLength; i++) {
  let giaTri = clothes[i];
  console.log("Giá trị của phần tử có chỉ số " + i + " là: " + giaTri);
  // template string:
  console.log(`Giá trị của phần tử có chỉ số ${i} là: ${giaTri}`);
}

// Giá trị của phần tử cuối cùng luôn bằng:
// ten_mang[do_dai_mang - 1]
console.log(clothes[clothesLength - 1]);

// Tính toán các giá trị trong mảng
// Bước 1: dùng vòng lặp duyệt qua các phần tử trong mảng
// Bước 2: lấy giá trị của các phần tử trong mảng
// Bước 3: thực các phép tính với những giá trị thích hợp

// Tính tổng của các giá trị trong mảng sau: [1,15,2,66,17]
// let tong = 0;
// const arr = [1, 15, 2, 66, 17];
// for (let i = 0; i < arr.length; i++) {
//   let giaTri = arr[i];
//   tong = tong + giaTri;
// }
// console.log(tong);
// Giải thích:
// i: chỉ số của các phần tử trong mảng
// giaTri: giá trị của phần tử trong mảng tương ứng với chỉ số của nó
// Chạy vòng lặp
// Lần 1: i = 0 => giaTri = arr[i] = 1
// Tổng = giá trị tổng hiện tại + giá trị phần tử trong mảng
// tong = 0 + 1 = 1
// Lần 2: i = 1 => giaTri = arr[i] = 15
// Tổng = giá trị tổng hiện tại + giá trị phần tử trong mảng
// tong = 1 + 15
// Lần n: tương tự

// Bài tập: +, -, x, :
// Note: nhân, chia thì giá trị ban đầu = 1
// cộng, trừ thì giá trị ban đầu = 0

// const arr = [1, 15, 2, 66, 17];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     console.log(arr[i]);
//   }
// }
