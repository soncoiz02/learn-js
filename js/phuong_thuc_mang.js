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
