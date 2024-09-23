// slice, toLowerCase, toUpperCase, includes, split, replace, substring, trim, regex

// Slice: Cắt chuỗi | tương tự cắt mảng
// Cú pháp: chuoi.slice(vị trí bắt đầu, vị trí kết thúc)
// Kết quả: trả về chuỗi mới đã được cắt

const userName = "sondzaivodichvutru";
console.log(userName.slice(4, 6));

// toLowerCase: chuyển chuỗi thành các ký tự thường
// Cú pháp: chuoi.toLowerCase()
// toUpperCase: chuyển chuỗi thành các ký tự in hoa
// Cú pháp: chuoi.toUpperCase()

const testString = "AndsaBddqw123";
console.log(testString.toLowerCase());
console.log(testString.toUpperCase());

// includes: kiểm tra 1 chuỗi có thuộc chuỗi được chỉ định không

const currentString = "Hà Buồi To như Voi";
console.log(currentString.includes("buồi"));

// split: cắt chuỗi thành mảng dựa theo ký tự được chỉ định

const time = "31/07/2002";
console.log(time.split("/"));

// replace: thay thế chuỗi
// Cú pháp: chuoi.replace("chuỗi cần thay", "giá trị mới")

const aboutHa = "Hà có buồi to nhất vũ trụ";
console.log(aboutHa.replace("to", "bé"));

// substring: tạo ra chuỗi con
// Cú pháp: chuoi.substring(thứ tự bắt đầu)

console.log(aboutHa.substring(3, 8));

// trim: xóa khoảng trắng ở đầu và cuối chuỗi
// Cú pháp: chuoi.trim()

const spaceString = "    asdjkdasd    ";
console.log(spaceString.trim());

// regex: biểu thức chính quy
// là 1 chuỗi các ký tự định nghĩa định dạng cho 1 chuỗi

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

console.log(regex.test("sondzaivcl@gmail.com"));

const testRegexString = "sondz@gmail.com";
console.log(testRegexString.replace(regex, "ok con de"));
