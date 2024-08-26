// Các phương thức so sánh || trả về giá trị kiểu boolean
// Lưu ý: Khi viết code so sánh thì kết quả của phép so sánh luôn trả về giá trị true hoặc false
// So sánh bằng: ==, ===
// ==: so sánh về giá trị
// ===: so sánh về giá trị và kiểu dữ liệu

const num1 = 5;
const num2 = 5;
console.log(num1 == num2); // true

const num3 = "5";
console.log(num1 == num3); // true
console.log(num1 === num3); // false

// So sánh khác: !=, !==
// !=: so sánh giá trị khác nhau
// !==: so sánh giá trị và kiểu dữ liệu khác nhau

const num4 = 5;
const num5 = 6;
console.log(num4 != num5); // true

// So sánh hơn: >, >=
// >: so sánh giá trị lớn hơn
// >=: so sánh giá trị lớn hơn hoặc bằng

// So sánh kém: <, <=
// <: so sánh giá trị nhỏ hơn
// <=: so sánh giá trị nhỏ hơn hoặc bằng
