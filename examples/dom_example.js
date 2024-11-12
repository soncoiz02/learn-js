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
    {
      id: 367,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133490/game-sausage-sampler-3-pack.fe4692864f3fc27be8061c0c9b0787f2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Fabrique Délices",
      dsc: "Game Sausage Sampler - 3 Pack",
      price: 89,
      rate: 5,
      country: "Hayward, CA",
      categoryId: 7,
      slug: "fabrique-delices",
    },
    {
      id: 368,
      img: "https://goldbelly.imgix.net/uploads/product_image/image/112301/texas-sized-sausage-sampler-package.11dca9b675f50b30604f19cc305d2aaf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Goode Co. Barbeque",
      dsc: "Texas-Sized Sausage Feast",
      price: 199,
      rate: 4,
      country: "Houston, TX",
      categoryId: 7,
      slug: "goode-co-barbeque",
    },
    {
      id: 369,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131231/usda-prime-black-angus-filet-mignon-barrel-cut.04bcc3143f079afc4b31274b3338be24.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Pat LaFrieda Meats",
      dsc: "Grandpa's Hot Italian Sausage - 3 lbs.",
      price: 33,
      rate: 5,
      country: "North Bergen, NJ",
      categoryId: 7,
      slug: "pat-lafrieda-meats",
    },
    {
      id: 370,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132273/polish-smoked-sausage.8712f5e19f6d26cf3ff079b3fbcce1bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Southside Market & Barbeque",
      dsc: "Polish Smoked Sausage",
      price: 79,
      rate: 5,
      country: "Elgin, TX",
      categoryId: 7,
      slug: "southside-market-barbeque",
    },
    {
      id: 371,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96675/smoked-sausage-2-lbs.58096049afa8b3e448956c83d9690503.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Old 300 BBQ",
      dsc: "Smoked Sausage - 2 lbs.",
      price: 99,
      rate: 5,
      country: "Blanco, TX",
      categoryId: 7,
      slug: "old-300-bbq",
    },
    {
      id: 372,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106379/green-chili-hot-links-12-pack.eaea63f751aac8b82fe2874e47f45c65.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "4505 Burgers & BBQ",
      dsc: "Sausage & Hot Dog - Choose Your Own 3 lbs.",
      price: 89,
      rate: 5,
      country: "San Francisco, CA",
      categoryId: 7,
      slug: "4505-burgers-bbq",
    },
    {
      id: 373,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96226/california-reserve-filet-mignon-steaks-gift-box.bf226e317aad85f47897ae7e325f790d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "California Reserve Filet Mignon Steaks Gift Box",
      price: 129,
      rate: 5,
      country: "San Rafael, CA",
      categoryId: 8,
      slug: "flannery-beef",
    },
    {
      id: 374,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132850/california-reserve-ribeye-steaks-gift-box.87b8f6acf5851abe58778d3017105edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "California Reserve Ribeye Steaks Gift Box",
      price: 99,
      rate: 4,
      country: "San Rafael, CA",
      categoryId: 8,
      slug: "flannery-beef",
    },
    {
      id: 375,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118617/valentines-steaks-and-cakes-dinner-for-2.0c63dab635eed46209455dc33cd25ea8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Chesapeake Bay Gourmet",
      dsc: "Steaks and Cakes Date Night Dinner for 2",
      price: 129,
      rate: 4,
      country: "Jessup, MD",
      categoryId: 8,
      slug: "chesapeake-bay-gourmet",
    },
    {
      id: 376,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113759/holiday-sampler-9-pack.2de75ca80282ffe9d064eb757ff7a5a1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Saltbrick Prime",
      dsc: "Chef Matt's Steak Sampler for 10-12",
      price: 179,
      rate: 5,
      country: "New York, NY",
      categoryId: 8,
      slug: "saltbrick-prime",
    },
    {
      id: 377,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113844/bone-in-rib-steak.b13d9d4233035767605f0de9acdce1ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Old Homestead Steakhouse",
      dsc: "Bone-in Rib Steak",
      price: 159,
      rate: 5,
      country: "New York, NY",
      categoryId: 8,
      slug: "old-homestead-steakhouse",
    },
    {
      id: 378,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132442/american-wagyu-gold-grade-sirloins.040dbeb8f8e615b91fa7e513e3dc089c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Snake River Farms",
      dsc: "American Wagyu Gold Grade Top Sirloins",
      price: 119,
      rate: 5,
      country: "Boise, ID",
      categoryId: 8,
      slug: "snake-river-farms",
    },
    {
      id: 379,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131920/peter-luger-steak-pack-b.9feb0300e6be2dfecfa314f2006a2183.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Peter Luger Steak House",
      dsc: "Peter Luger Porterhouse Steaks",
      price: 215.95,
      rate: 4,
      country: "Brooklyn, NY",
      categoryId: 8,
      slug: "peter-luger-steak-house",
    },
    {
      id: 380,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114307/ribeye-prime-steak-gift-box.e74cb016baabbb2df73861de8150f29c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Churchill's Steakhouse",
      dsc: "Ribeye Prime Steak Gift Box",
      price: 229,
      rate: 4,
      country: "Spokane, WA",
      categoryId: 8,
      slug: "churchills-steakhouse",
    },
    {
      id: 381,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107003/wagyu-filet-mignon-2-pack.5da42476f7d1b7e7cfe58b4d054e6861.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Westholme Wagyu",
      dsc: "Wagyu Filet Mignon - 2 Pack",
      price: 139,
      rate: 4,
      country: "Queensland, Australia",
      categoryId: 8,
      slug: "westholme-wagyu",
    },
    {
      id: 382,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124865/usda-prime-black-angus-filet-mignon-barrel-cut.6ee213799e7d1848763d12edca18e3b1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Pat LaFrieda Meats",
      dsc: "Dry-Aged USDA Prime Black Angus Porterhouse Steak - 2 Pack",
      price: 96.7,
      rate: 4,
      country: "North Bergen, NJ",
      categoryId: 8,
      slug: "pat-lafrieda-meats",
    },
    {
      id: 383,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133878/california-reserve-ribeye-steak-12-oz.d367c5ae72dd9f89e170662104bef4fc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "California Reserve Ribeye Steak - 12 oz",
      price: 32,
      rate: 5,
      country: "San Rafael, CA",
      categoryId: 8,
      slug: "flannery-beef",
    },
    {
      id: 384,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126887/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Chef Francis Mallmann",
      dsc: "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
      price: 225,
      rate: 4,
      country: "Patagonia, Argentina",
      categoryId: 8,
      slug: "chef-francis-mallmann",
    },
    {
      id: 385,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96252/california-reserve-filet-mignon-steak.ff15071964ec8141d30c2ba05fb117e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "California Reserve Filet Mignon Steak",
      price: 22,
      rate: 5,
      country: "San Rafael, CA",
      categoryId: 8,
      slug: "flannery-beef",
    },
    {
      id: 386,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99462/mesquite-smoked-peppered-beef-tenderloin.5c314418a1f75c7057eed686e2fad46f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Perini Ranch Steakhouse",
      dsc: "Mesquite Smoked Peppered Beef Tenderloin",
      price: 165,
      rate: 4,
      country: "Buffalo Gap, TX",
      categoryId: 8,
      slug: "perini-ranch-steakhouse",
    },
    {
      id: 387,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134435/sausage-wagyu-steak-sampler-choose-your-own.8a66af51c802dd54a863c20f768ea686.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Gastros Craft Meats",
      dsc: "Sausage + Wagyu Steak Sampler - Choose Your Own",
      price: 165,
      rate: 4,
      country: "Woonsocket, RI",
      categoryId: 8,
      slug: "gastros-craft-meats",
    },
    {
      id: 388,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132710/steak-dinner-kit-for-2.3046e9db1f796c3305a71253ad8d86f2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Old Homestead Steakhouse",
      dsc: "Steak Dinner Kit for 2",
      price: 189,
      rate: 5,
      country: "New York, NY",
      categoryId: 8,
      slug: "old-homestead-steakhouse",
    },
    {
      id: 389,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133748/cardiff-crack-tri-tip-2-pack.100775575438423b43aa601f273f0713.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Seaside Market",
      dsc: "Cardiff Crack Tri Tip - 2 Pack",
      price: 169,
      rate: 5,
      country: "Cardiff by the Sea, CA",
      categoryId: 8,
      slug: "seaside-market",
    },
    {
      id: 390,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96663/california-reserve-filet-mignon-steaks-6-pack.9d19cd56391a3a62a6f075182d8e5b1e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "California Reserve Filet Mignon Steaks - 6 Pack",
      price: 159,
      rate: 4,
      country: "San Rafael, CA",
      categoryId: 8,
      slug: "flannery-beef",
    },
    {
      id: 391,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131433/wagyu-ny-strip-steaks-2-pack.5b760cb84d5a57582e7dd8d1e25c9972.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Westholme Wagyu",
      dsc: "Wagyu NY Strip Steak - 2 Pack",
      price: 169,
      rate: 5,
      country: "Queensland, Australia",
      categoryId: 8,
      slug: "westholme-wagyu",
    },
    {
      id: 392,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96208/california-reserve-new-york-steaks-gift-box.2ac1b5dd138c87e7914f96310bf3bcd3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "California Reserve New York Steaks Gift Box",
      price: 119,
      rate: 4,
      country: "San Rafael, CA",
      categoryId: 8,
      slug: "flannery-beef",
    },
    {
      id: 393,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105600/choice-strip-steak-6-pack.822c77cb36216c8bec513f295b94d2f0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Meats by Linz",
      dsc: "Choice Strip Steak - 6 Pack",
      price: 99,
      rate: 4,
      country: "Calumet City, IL",
      categoryId: 8,
      slug: "meats-by-linz",
    },
    {
      id: 394,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103374/wagyu-coulotte-10-oz.8f1a8f4075160241d9698d3f4b1bf488.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Westholme Wagyu",
      dsc: "Wagyu Coulotte Steak - 4 Pack",
      price: 155,
      rate: 4,
      country: "Queensland, Australia",
      categoryId: 8,
      slug: "westholme-wagyu",
    },
    {
      id: 395,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114275/ribeye-and-filet-mignon-prime-steak-gift-box.894fbe515c343b8517ad91e956150306.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Churchill's Steakhouse",
      dsc: "Ribeye & Filet Mignon Prime Steak Gift Box",
      price: 249,
      rate: 5,
      country: "Spokane, WA",
      categoryId: 8,
      slug: "churchills-steakhouse",
    },
    {
      id: 396,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115509/2-choice-bone-in-ribeyes-2-choice-new-york-strip-steaks.80e8bf5ec76921c9632b7a5c5736fa7e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Niman Ranch",
      dsc: "2 Choice Bone-In Ribeyes + 2 Choice New York Strip Steaks",
      price: 139,
      rate: 4,
      country: "Brea, CA",
      categoryId: 8,
      slug: "niman-ranch",
    },
    {
      id: 397,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133612/goldbelly-steak-burger-sampler.30f9703bf7c2355cffa8846e328481d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Pat LaFrieda Meats",
      dsc: "Goldbelly Steak + Burger Sampler",
      price: 135,
      rate: 4,
      country: "North Bergen, NJ",
      categoryId: 8,
      slug: "pat-lafrieda-meats",
    },
    {
      id: 398,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132656/steak-dinner-for-4-6.b438ef565a0f8803d9a3a641e1b8d1b6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Chesapeake Bay Gourmet",
      dsc: "Fourth Of July Steak Dinner for 4-6",
      price: 219,
      rate: 4,
      country: "Jessup, MD",
      categoryId: 8,
      slug: "chesapeake-bay-gourmet",
    },
    {
      id: 399,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114536/american-wagyu-strip-steaks-2-pack.71ec339dc69d6fc12a4911b4dfd35f39.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Gastros Craft Meats",
      dsc: "American Wagyu Strip Steaks - 2 Pack",
      price: 119,
      rate: 4,
      country: "Woonsocket, RI",
      categoryId: 8,
      slug: "gastros-craft-meats",
    },
    {
      id: 400,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133140/peter-luger-steak-pack-a.e8f3bb163811e5ffcd60a5831d32874b.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Peter Luger Steak House",
      dsc: "USDA PRIME Dry-aged Strip Steaks",
      price: 266.95,
      rate: 5,
      country: "Brooklyn, NY",
      categoryId: 8,
      slug: "peter-luger-steak-house",
    },
    {
      id: 401,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89041/world-famous-shrimp-cocktail-for-4-6.9e41abca0496dfbd5a9fb2adbffeef88.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "St. Elmo Steak House",
      dsc: "World Famous Shrimp Cocktail for 4-6",
      price: 99,
      rate: 5,
      country: "Indianapolis, IN",
      categoryId: 8,
      slug: "st-elmo-steak-house",
    },
    {
      id: 402,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105249/chateaubriand-steak-for-2.2cb9ed7cc3227fd26c455d51ca9745ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Keens Steakhouse",
      dsc: "Chateaubriand Steak for Two",
      price: 159,
      rate: 5,
      country: "New York, NY",
      categoryId: 8,
      slug: "keens-steakhouse",
    },
    {
      id: 403,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131977/choice-center-cut-new-york-strip-steaks-4-pack.facecef35750e684ca69355c78f6a637.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Niman Ranch",
      dsc: "Choice Center Cut New York Strip Steaks - 4 Pack",
      price: 109,
      rate: 4,
      country: "Brea, CA",
      categoryId: 8,
      slug: "niman-ranch",
    },
    {
      id: 404,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115321/strip-steak-gift-box.aef2d6be6646bf15bd532ce0d11e092a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "The Pine Club",
      dsc: "Strip Steak Gift Box",
      price: 149,
      rate: 5,
      country: "Dayton, OH",
      categoryId: 8,
      slug: "the-pine-club",
    },
    {
      id: 405,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124074/ribeye-steaks-8-pack.5c110f415c1f47becd92430f6895dd8e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "State Street Brats",
      dsc: "Ribeye Steaks - 8 Pack",
      price: 85,
      rate: 4,
      country: "Madison, WI",
      categoryId: 8,
      slug: "state-street-brats",
    },
    {
      id: 406,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103486/steak-au-poivre-kit-2-pack.14f9926937c1716b9430316d677873df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Raoul's",
      dsc: "Steak Au Poivre Kit - 2 Pack",
      price: 149,
      rate: 4,
      country: "New York, NY",
      categoryId: 8,
      slug: "raouls",
    },
    {
      id: 407,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69598/steak-mushroom-onion-and-gruyere-pie.169cb773b3f53ba330ae18fa0edb0b4c.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Dangerously Delicious Pies",
      dsc: "Steak Mushroom Onion and Gruyere Pie",
      price: 79,
      rate: 4,
      country: "Baltimore, MD",
      categoryId: 8,
      slug: "dangerously-delicious-pies",
    },
    {
      id: 408,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134788/philly-cheesesteak-4-pack.ee73df8fae1147633dfe6d2bbd966c9b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Jim's Steaks",
      dsc: "Jim's Philly Cheesesteaks - 4 pack",
      price: 99,
      rate: 5,
      country: "Philadelphia, PA",
      categoryId: 8,
      slug: "jims-steaks",
    },
    {
      id: 409,
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109670/upper-prime-black-angus-tomahawks.cfc048cb768788bc7289be5acdbecb6e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Holy Grail Steak Co.",
      dsc: "Upper Prime Black Angus Tomahawks",
      price: 219,
      rate: 5,
      country: "San Francisco, CA",
      categoryId: 8,
      slug: "holy-grail-steak-co",
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

// =============================

let page = 1;
let limit = 10;

// ==============================

window.onscroll = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// ==========================================================================================

const listCate = jsonData.categories;
let listProducts = JSON.parse(JSON.stringify(jsonData.products));

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

// ======================================================================
// Xử lý render phân trang
const renderPagination = () => {
  const totalProduct = listProducts.length;
  const totalPage = Math.ceil(totalProduct / limit);

  const paginationEl = document.querySelector(".pagination");

  let listBtn = "";

  for (let i = 0; i < totalPage; i++) {
    listBtn += `<button class="pagi-btn ${i == 0 ? "active" : ""}">${i + 1}</button>`;
  }
  paginationEl.innerHTML = listBtn;
};

renderPagination();
const handlePagination = () => {
  const listPagiBtn = document.querySelectorAll(".pagi-btn");
  listPagiBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      const activeEl = document.querySelector(".pagi-btn.active");
      if (activeEl) activeEl.classList.remove("active");
      e.target.classList.add("active");

      page = index + 1;
      renderProducts(listProducts);
      window.scrollTo(0, 0);
    });
  });
};

handlePagination();

// Tạo danh sách sản phẩm từ mảng dữ liệu đã cho

const renderProducts = (filterProduct) => {
  const skip = (page - 1) * limit;
  // page = 1: skip = 0 -> 20
  // page = 2: skip = 20 -> 40

  const productsPerPage = JSON.parse(JSON.stringify(filterProduct)).splice(skip, limit);
  const listProductEl = productsPerPage
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

    renderPagination();
    handlePagination();
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

    if (cateCode == "all") filterProduct = jsonData.products;
    else {
      filterProduct = jsonData.products.filter((item) => item.category == cateCode);
    }
    listProducts = filterProduct;
    renderProducts(listProducts);
  });
});

// ===========================================================

const renderRatedStar = () => {
  const starArr = [1, 2, 3, 4, 5];

  const starEl = starArr
    .map((star) => {
      return `
      <div class="star">
        <input class="star-radio" type="checkbox" id="star-${star}" value="${star}" name="rated" />
        <label for="star-${star}">
          <i class="fa-solid fa-star"></i>
        </label>
      </div>
    `;
    })
    .join("");

  const listStarEl = document.querySelector(".list-rate");
  listStarEl.innerHTML = starEl;
};

renderRatedStar();

const listStarBtn = document.querySelectorAll(".star-radio");

const activeStar = (targetStar) => {
  if (targetStar === 0) return;
  for (let i = 0; i < listStarBtn.length; i++) {
    listStarBtn[i].checked = i < targetStar ? true : false;
  }
};

activeStar(1);

listStarBtn.forEach((el) => {
  el.addEventListener("change", (e) => {
    const targetStar = +e.target.value;
    activeStar(targetStar);
    const filterProduct = jsonData.products.filter((item) => item.rate === targetStar);
    listProducts = filterProduct;
    renderProducts(listProducts);
  });
});

// =====================================================================
const priceRangeInput = document.querySelector("#price-range");
const priceLabel = document.querySelector(".price-label");

const changePriceLabel = (value) => {
  priceLabel.innerHTML = value + "$";
};

priceRangeInput.addEventListener("input", (e) => {
  const priceValue = +e.target.value;
  changePriceLabel(priceValue);
});

priceRangeInput.addEventListener("change", (e) => {
  const priceValue = +e.target.value;
  const filterProduct = listProducts.filter((item) => item.price <= priceValue);
  listProducts = filterProduct;
  renderProducts(listProducts);
});

// =================================================================
// Xử lý nút xóa lọc

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", (e) => {
  renderProducts(listProducts);
  activeStar(1);
  priceRangeInput.value = 0;
  changePriceLabel(0);
});

// ============================================================
// Xử lý tìm kiếm sản phẩm

const searchInput = document.querySelector("#search-input");
const searchBar = document.querySelector(".search-bar");

let searchValue = "";

searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value.trim();
});

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  let filterProduct = [];
  if (searchValue) {
    filterProduct = listProducts.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
  } else {
    filterProduct = jsonData.products;
  }
  listProducts = filterProduct;
  renderProducts(listProducts);
});
