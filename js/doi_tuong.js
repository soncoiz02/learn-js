// Đối tượng: đại diện cho 1 cá thể nào đấy
// Gồm có phương thức và thuộc tính
// Phương thức: là những hành động, hoạt động đại diện cho đối tượng đấy
// Thuộc tính: là những thông tin cụ thể của 1 đối tượng

// Cú pháp khởi tạo đối tượng
const conNguoi = {
  ten: "Hà Ăn Cứt",
  tuoi: 20,
  ngaySinh: "01/01/2004",
  eat() {
    return "Hà đang ăn cứt";
  },
  fuck: () => {
    console.log("Hà đang hoạt sinh lý");
  },
};

console.log(conNguoi.ten);
console.log(conNguoi.tuoi);
console.log(conNguoi.eat());

conNguoi.isHaveGf = true;

console.log(conNguoi);

// Object destructering
const { ten, tuoi, eat, fuck } = conNguoi;

conNguoi.ten = "Hà ăn Buồi";

// Scope: Vùng hoạt động của biến
// Các loại: global, block, functional

// global: Biến toàn cục, có thể sử dụng biến trong mọi hàm mọi nơi
// block: Biến có thể sử dụng biến trong 1 khối câu lệnh
// functional: Biến chỉ có thể sử dụng ở trong hàm
