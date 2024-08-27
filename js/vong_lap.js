// Vòng lặp
// Các loại vòng lặp: while, for, switch case

// ====================================================
// Vòng lặp while
// Cú pháp:
// while (điều kiện) {
// khối câu lệnh | code
// }
// Nếu điều kiện = false thì vòng lặp sẽ dừng

// Xin lỗi người yêu 10 lần
// Biến nhớ i
let i = 0;
// i = 0 --> 10 || 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
while (i < 10) {
  console.log("Anh sai rồi, anh xin lỗi");
  i++; // Bước nhảy
}

// Giải thích:
// Lần 1: i = 0 => điều kiện thỏa mãn => Anh xin lỗi lần 1
// i++: tăng i thêm 1 => i = 2
// Lần 2: i = 2 => lặp lại như lần 1
// Lần 10: i++ <=> 9 + 1 = 10 => không thỏa mãn điều kiện => kết thúc vòng lặp

// Lưu ý: xử lý code bên trong sao cho vòng lặp không thỏa mãn điều kiện để kết thúc hợp lý
// Vì nếu không sẽ rơi vào vòng lặp vô hạn => đơ web

// ========================================================
// Vòng lặp for:
// Cú pháp:
// for (biến nhớ; điều kiện; bước nhảy) {
//  các câu lệnh |code
// }
for (let i = 0; i < 10; i++) {
  console.log("Anh sai rồi, anh xin lỗi");
}

// =======================================================
// Switch-case: vòng lặp có điều kiện cụ thể
// Cú pháp:
// switch(biến) {
//  case + điều kiện:
//      các câu lệnh | code
//    break;
//  default:
//      các câu lệnh | code
//    break;
// }

// Phân loại lớp
let lop = "12A4";

switch (lop) {
  case "12A1":
  case "12A2":
  case "12A3":
    console.log("Lớp chọn");
    break;
  default:
    console.log("Lớp thường");
    break;
}

// Giải thích
// Chạy vòng lặp với biến lop
// case: điều kiện thỏa mãn với biến
// default: điện kiện không thỏa mãn <=> điều kiện mặc định
// ==============
// case "12A1":
// case "12A2":
// case "12A3":
// Tương đương với
// if(lop == "12Aa1" || lop == "12A2" || lop == "12A3")

// Từ khóa trong vòng lặp: continue, break
// break: thoát vòng lặp
// continue: bỏ qua giá trị theo điều kiện tiếp tục vòng lặp

const diemSo = 5;
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
