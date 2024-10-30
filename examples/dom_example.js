const header = document.querySelector("header");

const jsonData = {
  products: [
    {
      id: 1,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Orwashers Bakery",
      dsc: "Artisanal Bread - Choose Your Own 3 Pack",
      price: 45,
      rate: 5,
      country: "New York, NY",
      category: "burger",
      slug: "orwashers-bakery",
    },
    {
      id: 2,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132426/bread-choose-your-own-4-pack.78f96938f1a3a5bc6a7fefa564bf878c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Grateful Bread Company",
      dsc: "Artisanal Bread - Choose Your Own 4 Pack",
      price: 59,
      rate: 5,
      country: "Sacramento, CA",
      category: "burger",
      slug: "grateful-bread-company",
    },
    {
      id: 3,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Calic Bread",
      dsc: "Corn Cheese Bread - 2 Pack",
      price: 89,
      rate: 5,
      country: "Los Angeles, CA",
      category: "pizza",
      slug: "calic-bread",
    },
    {
      id: 4,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133401/tartine-bread-loaves-choose-your-own-2-pack.aa052bf998aa1b627e1fa71a482311a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Tartine Bakery",
      dsc: "Tartine Bread Loaves - Choose Your Own 2 Pack",
      price: 39,
      rate: 4,
      country: "San Francisco, CA",
      category: "bread",
      slug: "tartine-bakery",
    },
    {
      id: 5,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95387/japanese-milk-bread.5c3e3677db6b145b659e702af3098337.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Craftsman and Wolves",
      dsc: "Japanese Milk Bread - 2 Loaves",
      price: 55,
      rate: 5,
      country: "San Francisco, CA",
      category: "bread",
      slug: "craftsman-and-wolves",
    },
    {
      id: 6,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126688/bread-choose-your-own-6-pack.060cf408cf8b30ef3ea618ef3e5d5389.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Orwashers Bakery",
      dsc: "Artisanal Bread - Choose Your Own 6 Pack",
      price: 69,
      rate: 5,
      country: "New York, NY",
      category: "bread",
      slug: "orwashers-bakery",
    },
    {
      id: 7,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89514/artichoke-bread-sampler-4-pack.2243d37a2b976f88cdfe026026e82e1f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Arcangeli Grocery",
      dsc: "Artichoke Bread Sampler - 4 Pack",
      price: 59,
      rate: 4,
      country: "Pescadero, CA",
      category: "pizza",
      slug: "arcangeli-grocery",
    },
    {
      id: 8,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133455/bavarian-soft-pretzel-twists-10-pack.0f8c34ca7341a525bd581924bd9f030f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Milwaukee Pretzel Company",
      dsc: "Bavarian Soft Pretzel Twists - 10 Pack",
      price: 39,
      rate: 4,
      country: "Milwaukee, WI",
      category: "pizza",
      slug: "milwaukee-pretzel-company",
    },
    {
      id: 9,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99033/mini-banana-bread-loaves-18-pack-choose-your-own.cf136bd604f91d94d067045b13ad0227.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Maui Banana Bread Co",
      dsc: "Banana Bread- Choose Your Own 6 Pack",
      price: 59,
      rate: 5,
      country: "Lahaina, HI",
      category: "steak",
      slug: "maui-banana-bread-co",
    },
    {
      id: 10,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/128801/stuffed-bread-loaves-choose-your-own-2-pack.40c693cca82e78bf496dc14bf1f52d61.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Antique Bar & Bakery",
      dsc: "Stuffed Bread Loaves - Choose Your Own 2 Pack",
      price: 59,
      rate: 4,
      country: "Hoboken, NJ",
      category: "steak",
      slug: "antique-bar-bakery",
    },
    {
      id: 11,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129676/hot-and-spicy-cheese-bread-2-pack.014477417093300bfb5e9ed8645bd0a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Stella's of Madison",
      dsc: "Hot & Spicy Cheese Bread - 2 Pack",
      price: 39,
      rate: 4,
      country: "Madison, WI",
      category: "fried-chicken",
      slug: "stellas-of-madison",
    },
  ],
  categories: [
    {
      name: "Burger",
      code: "burger",
    },
    {
      name: "Pizza",
      code: "pizza",
    },
    {
      name: "Bread",
      code: "bread",
    },
    {
      name: "Sausage",
      code: "sausage",
    },
    {
      name: "Steak",
      code: "steak",
    },
    {
      name: "Fried Chicken",
      code: "fried-chicken",
    },
  ],
};

window.onscroll = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// ==========================================================================================

const listCate = jsonData.categories;
const listProducts = jsonData.products;

// Tạo danh sách danh mục

const renderListBtnCate = (code) => {
  listCate.unshift({
    name: "All",
    code: "all",
  });
  const listBtnElements = listCate
    .map((item) => {
      return `<button class="cate-btn ${item.code == code ? "active" : ""}">${item.name}</button>`;
    })
    .join("");
  const listCateEl = document.querySelector(".list-cate");
  if (listCateEl) {
    listCateEl.innerHTML = listBtnElements;
  }
};

renderListBtnCate("all");

// Tạo danh sách sản phẩm từ mảng dữ liệu đã cho

const renderProducts = (filterProduct) => {
  const listProductEl = filterProduct
    .map(
      (item) => `
      <div class="item">
        <img src="${item.img}" class="img" />
        <div class="line">
          <p class="name">${item.name}</p>
          <p class="price">$${item.price}</p>
        </div>
        <div class="line">
          <p class="short-desc">“${item.dsc}”</p>
          <div class="rating">
            <p>${item.rate.toFixed(1)}</p>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div class="line">
          <div class="address">
            <i class="fa-solid fa-location-dot"></i>
            <p>${item.country}</p>
          </div>
          <div class="order-btn">Order</div>
        </div>
      </div>
    `
    )
    .join("");

  const productListEl = document.querySelector(".list");
  if (productListEl) {
    productListEl.innerHTML = listProductEl;
  }
};

renderProducts(listProducts);

// Xử lý click danh mục

const listCateBtn = document.querySelectorAll(".cate-btn");

listCateBtn.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    // Xử lý active button
    const activeEl = document.querySelector(".cate-btn.active");
    if (activeEl) activeEl.classList.remove("active");
    e.target.classList.add("active");

    // Xử lý lấy code của category
    const targetCate = listCate[index];
    const cateCode = targetCate.code;

    // Xử lý lọc sản phẩm theo category code
    let filterProduct = [];

    if (cateCode == "all") filterProduct = listProducts;
    else {
      filterProduct = listProducts.filter((item) => item.category == cateCode);
    }
    renderProducts(filterProduct);
  });
});
