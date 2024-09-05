// Các loại điều kiện
// Sử dụng if, if else

// Ví dụ 1
const chieuCao = 170;

if (chieuCao >= 180) {
  console.log("Anh là khủng long à");
}

if (chieuCao >= 175) {
  console.log("M cũng chỉ cao đến thế thôi à");
} else {
  console.log("M lùn vãi lồn");
}

// Ví dụ 2
const diemSo = 9;
if (diemSo >= 9) {
  // >= 9 <=> 9, 10
  console.log("Học sinh giỏi");
} else if (diemSo >= 7) {
  // >= 7 <=> 7, 8
  console.log("Học sinh khá bảnh");
} else if (diemSo >= 5) {
  // >= 5 <=> 5, 6
  console.log("Học sinh trung bình");
} else {
  // 1, 2, 3, 4
  console.log("Học sinh kém");
}

// Ví dụ 3: điều kiện lồng nhau
const age = 20;
const weight = 60;

// Điều kiện đi làm: tuổi trên 18 và cân nặng trên 50
if (age >= 18) {
  if (weight >= 50) {
    console.log("Đủ điều kiện đi làm");
  } else {
    console.log("Chưa đủ cân nặng");
  }
} else {
  console.log("Chưa đủ tuổi");
}

// Ví dụ 4: nhiều điều kiện
// Điều kiện đi làm: tuổi trên 18 và cân nặng trên 50
if (age >= 18 && weight >= 50) {
  console.log("Đủ điều kiện đi làm");
} else {
  console.log("Chưa đủ điều kiện đi làm");
}

// Điều kiện ứng tuyển: tốt nghiệp đại học hoặc cao đẳng
const isDaiHoc = true;
const isCaoDang = false;

if (isDaiHoc == true || isCaoDang == true) {
  console.log("Đủ điều kiện ứng tuyển");
} else {
  console.log("Không đủ điều kiện ứng tuyển");
}

// Viết tắt: nếu điều kiện so sánh bằng true hoặc false
// truthy: những giá trị khác falsy <=> true
// falsy: false, 0, "", undefined, null, NaN <=> false
// Chưa hiểu lên gg search đọc cho kỹ

// Trường hợp lấy giá trị so sánh = true
if (isDaiHoc || isCaoDang) {
  console.log("Đủ điều kiện ứng tuyển");
} else {
  console.log("Không đủ điều kiện ứng tuyển");
}

// Trường hợp lấy giá trị so sánh = false
// dấu ! để đảo ngược giá trị: nếu false => true, true => false
if (!isDaiHoc || !isCaoDang) {
  console.log("Không đủ điều kiện ứng tuyển");
}

// Trường hợp check xem biến có giá trị hoặc tồn tại
let test;
if (test) {
  console.log(test);
} else {
  console.log("Biến không có giá trị");
}

// Điều kiện rút gọn
// Cú pháp: condition ? true statement : false statement
// condition: câu lệnh điều kiện
// true statement: câu lệnh khi điều kiện đúng
// false statement: câu lệnh khi điều kiện sai

const emAnComChua = true;
emAnComChua ? console.log("Em ăn cơm rồi") : console.log("Em chưa ăn cơm");
