// Biến: lưu trữ 1 giá trị bất kỳ
// Các cách khai báo biến
// Lưu ý: tên biến chỉ được khai báo 1 lần không được trùng
// Sử dụng var
// Cú pháp: var tên biến = giá trị
var name = "Khánh Hà"; // String
var age = 20; // Number
var haCoTuyetVoiKhong = true; // Boolean
var haCoLaBoDuaTreKhong = undefined; // Undefined

// Lưu ý khi sử dụng var để khai báo biến
// Khi khai báo biến bằng từ khóa var thì khi trình duyệt chạy file js biến var luôn được đặt lên trên cùng của đoạn code
// Hoisiting

kichThuocCauNho = 20;
var kichThuocCauNho;
console.log(kichThuocCauNho);

// Sử dụng let
// Cú pháp: let tên biến = giá trị
let chieuCao = 175;
chieuCao = 170;
chieuCao = "Hà đẹp trai";
console.log(chieuCao);

// Sử dụng const
// Cú pháp: const tên biến = giá trị
// Lưu ý: từ khóa const chỉ dùng cho những giá trị không thay đổi hay còn được gọi là hằng số
const tenCuaMe = "Bích";
const PI = 3.14;
tenCuaMe = "Mai";
console.log(tenCuaMe);

// Chốt lại
// var, let có thể thay đổi giá trị
// const không thay đổi giá trị
