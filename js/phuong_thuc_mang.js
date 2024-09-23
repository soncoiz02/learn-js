// Các thuộc tính và phương thức của mảng
// Thuộc tính
// length: lấy độ dài mảng
const mangTen = ["Sơn", "Hà", "Huy"];
const lenght = mangTen.length;
console.log(`Độ dài của mảng là: ${lenght}`);

// note: template string
// Là 1 chuỗi mà trong đấy có thể gán trực tiếp câu lệnh vào chuỗi thông qua biểu thức ${}

const age = 18;
const fullName = "Hà Ăn CỨT";
const buoiLenght = 14;
const templateString = `${fullName} có số tuổi là: ${age}, ${buoiLenght > 16 ? "có buồi to" : "buồi bé"}`;
console.log(templateString);

// Phương thức
// Thêm bớt mảng: push, pop, shift, unshift, splice
// Tìm chỉ số: indexOf
// Lặp mảng: forEach
// Lọc mảng: filter
// Sắp xếp mảng: sort
// Tìm phần tử: find
// Điều kiện về mảng: some, every, includes
// Thay đổi cấu trúc mảng: map, slice, concat
// Thực thi hàm trong mảng: reduce

const animals = [];

// Push: thêm phần tử vào cuối mảng
// Cú pháp: tenMang.push(phần tử cần thêm)
animals.push("Chó", "Mèo", "Gà");
// Kết quả: ["Chó", "Mèo", "Gà"]

// =============================================

// Pop: xóa phần tử ở cuối mảng
// Cú pháp: tenMang.pop()
animals.pop();
// Kết quả: ["Chó", "Mèo"]

// =============================================

// Shift: xóa phần tử ở đầu mảng
// Cú pháp: tenMang.shift()
animals.shift();
// Kết quả: ["Mèo"]

// =============================================

// Unshift: thêm phần tử vào đầu mảng
// Cú pháp: tenMang.unshift(phần tử cần thêm)
animals.unshift("Lợn", "Vịt");
// Kết quả: ["Lợn", "Vịt", "Mèo"]

// =============================================

// Splice: thay thế hoặc xóa phần tử ở vị trí bất kỳ trong mảng
// Kết quả: trả về 1 mảng mới với phần tử bị xóa
// Cú pháp: tenMang.splice(vị trí cần xóa, số phần tử bị xóa, phần tử thay thế)
// Tường hợp xóa:
const newAnimals = animals.splice(2, 2);
// Kết quả: newAnimals: ["Mèo"], animals: ["Lợn", "Vịt"]
console.log(newAnimals);

// Trường hợp thay thế:
const replaceAnimals = animals.splice(1, 1, "Bò");
console.log(replaceAnimals);
// Kết quả: replaceAnimals: ["Vịt"], animals: ["Lợn", "Bò"]

// =============================================

// IndexOf: tìm chỉ số của 1 phần tử trong mảng
// Cú pháp: tenMang.indexOf(phần tử cần tìm)
// Kết quả: trả về chỉ số của mảng. Nếu phần tử không có trong mảng trả về -1
const index = animals.indexOf("Bò");
console.log(`Chỉ số của "Bò" trong mảng là: ${index}`);

// ForEach: lặp qua các phần tử trong mảng
// Cú pháp: tenMang.forEach((phần tử, chỉ số) => {câu lệnh | code})

console.log("================================");

animals.forEach((animal, index) => {
  console.log(index, animal);
});

console.log("================================");

// ==================================================
console.log("Danh sách thú cưng:");
console.log(animals);

// =============================================

// Filter: lọc mảng
// Cú pháp: tenMang.filter((phần tử, chỉ số) => điều kiện với phần tử trong mảng)
// Kết quả: trả về 1 mảng mới đã được lọc theo điều kiện
// Lọc mảng clothes: lấy các phần tử có chỉ số chẵn, lấy phần tử có chứa tên là quần
const clothes = ["Áo thun", "Quần âu", "Quần ống rộng", "Áo sơ mi", "Quần short"];

const even = clothes.filter((clothe, index) => index % 2 == 0);
// const even = clothes.filter((clothe, index) => {
//   return index % 2 == 0;
// });

console.log("================================");
console.log("Mảng phần tử có chỉ số chẵn:");
console.log(even);

const filterClothes = clothes.filter((clothe, index) => clothe == "Quần");
console.log("================================");
console.log("Mảng phần tử có chứa tên quần:");
console.log(filterClothes);

// =======================================================

// Sort: sắp xếp các phần tử trong mảng
// Cú pháp: tenMang.sort(), tenMang.sort((a: phần tử đầu, b: phần tử sau) => a - b hoặc b - a )
// Điều kiện: a - b => sắp xếp xuôi, b - a: sắp xếp ngược
// Note: dùng cú pháp rút gọn => luôn luôn sắp xếp xuôi theo ký tự đầu: bé nhất - lớn nhất, a - z
// Kết quả: trả về mảng mới đã được sắp xếp

const numberArr = [5, 1, 26, 14, 88, 34, 10];
const stringArr = ["a", "d", "e", "b", "z", "y"];
numberArr.sort((a, b) => a - b);
stringArr.sort();

console.log("=================================");
console.log("Mảng được sắp xếp:");
console.log(numberArr);
console.log(stringArr);

// ===========================================================

// Find: tìm phần tử trong mảng
// Cú pháp: tenMang.find((phần tử, chỉ số) => điều kiện tìm)
// Kết quả: trả về phần tử trong mảng khớp với điều kiện

const condomArr = ["Durex", "Sagami", "Okamoto", "Play ah"];
const condom = condomArr.find((con, index) => con == "Okamoto");
console.log(condom);

// BTVN: lặp mảng tương tự forEach, lọc mảng tương tự filter, tìm mảng tương tự find, sắp xếp mảng tương tự sort
// 1. dùng các phương thức có sẵn
// 2. dùng vòng for để xử lý

// forEach
const colorArr = ["Blue", "Red", "Gray", "Green", "White", "Black"];

// sort
const nameArr = ["Hà", "Sơn", "Huy", "Minh", "Dũng"];

// filter
// Lọc lấy danh sách điểm > 7
const scoreArr = [5, 8, 1, 3, 6, 9, 7, 2, 4, 6];

// find
// Tìm phần tử là số có 3 chữ số: chia 100
const mixedArr = ["abc", 456, 1247, "hayzo", "pornhub"];

// ===========================================================

// Some: điều kiện với mảng
// Cú phấp: tenMang.some((phần tử, chỉ số) => điều kiện)
// Kết quả: trả về true hoặc false

const classArr = ["A1", "A2", "A3", "B1", "B3", "E2", "E10"];

const someResult = classArr.some((value) => value.includes("C"));
console.log(someResult);

// ===========================================================

// Every: điều kiện với mảng
// Cú phấp: tenMang.every((phần tử, chỉ số) => điều kiện)
// Kết quả: trả về true hoặc false

const evenNumber = [2, 4, 6, 8, 10, 22, 14];

const everyResult = even.every((value) => value % 2 != 0);
console.log(everyResult);

// ===========================================================

// Includes: điều kiện với mảng
// Cú pháp: tenMang.includes(giá trị bất kỳ)
// Kết quả: trả về true hoặc false
// Lưu ý: includes chỉ dùng cho mảng chứa các giá trị là chuỗi | string

const clothesArr = ["Quần", "Áo", "Giày", "Dép"];

const includesResult = clothesArr.includes("Áo");
console.log(includesResult);

// ===========================================================

// Map: thay đổi giá trị của mảng
// Cú pháp: tenMang.map((phần tử, chỉ số) => giá trị mới của mảng)
// Kết quả: trả về mảng mới với giá trị mới và có độ dài bằng mảng cũ

const classTenArr = ["10A1", "10A2", "10A3", "10A4"];

const newClassArr = classTenArr.map((value) => {
  // split: tách chuỗi thành mảng dựa theo ký tự được chỉ định
  const splitValue = value.split("");
  // gán lại giá trị cuẩ phần tử có chỉ số là 1
  splitValue[1] = "1";
  // join: gộp mảng thành chuỗi kèm theo ký tự được chỉ định
  return splitValue.join("");
});

console.log(newClassArr);

// ===========================================================

// Slice: cắt mảng
// Cú pháp: tenMang.slice(vị trí bắt đầu, vị trí kết thúc)
// Trả về 1 mảng mới đã cắt, mảng cũ mất phần cắt

const underwearArr = ["Tommy", "Calvin Klen", "Gucci", "Prada"];
const slicedArr = underwearArr.slice(1, 3);
console.log(slicedArr, underwearArr);

// ===========================================================

// Concat: nối mảng
// Cú pháp: tenMang.concat(tenMang)
// Kết quả: trả về mảng mới là giá trị của cả 2 mảng

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["asd", "dasd", "qwr"];

const newArr = arr1.concat(arr2);
console.log(newArr);

// ===========================================================

// Reduce: tính toán trong mảng
// Cú pháp: tenMang.reduce((phần tử trước, phần tử sau) => {
// Thực hiện tính toán
// return giá trị cuối cùng
// }, giá trị bắt đầu)

const randomNumber = [4, 5, 9, 7, 2, 3, 6, 7, 2, 44, 16];

const reduceResult = randomNumber.reduce((a, b) => {
  return a + b;
}, 0);

console.log(reduceResult);

// Bonus

// Kỹ thuật phân trang

const userArr = ["Hà", "Nam", "Sơn", "Huy", "Hiếu", "Minh", "Trang", "Nga", "Đức", "Tùng", "Mạnh"];

// Quy định 1 trang có 3 người
const limit = 3;

// Số lượng trang = tổng người dùng / giới hạn | total / limit

const total = userArr.length;

const totalPage = Math.ceil(total / limit);

for (let i = 1; i <= totalPage; i++) {
  console.log(`Dữ liệu trang ${i}`);
  // Skip: Bước nhảy - Bỏ qua dữ liệu trang cũ lấy dữ liệu trang hiện tại
  const skip = (i - 1) * limit;
  const pageData = [...userArr].slice(skip, skip + limit);
  console.log(pageData);
}

// Lọc tên
// "Sex toy" => "sex"
// Dùng includes của chuỗi

const toys = ["Chim giả", "Lồn giả", "Búp bê tình dục"];

const searchResult = toys.filter((value) => value.toLowerCase().includes("chim"));

console.log(searchResult);
