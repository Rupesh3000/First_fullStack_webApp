// Product route
function getProductData(productId) {
  // This function would retrieve the product data from your database or other data source
  // For this example, we'll use a simple switch statement to return mock data
  switch (productId) {
    case "product1":
      return {
        image: "img_1.jpg",
        name: "Grey Snakeskin",
        price: "$90.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product2":
      return {
        image: "img_2.jpg",
        name: "Black & White Patent",
        price: "$80.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product3":
      return {
        image: "img_3.webp",
        name: "Chelsea Dealer",
        price: "$50.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product4":
      return {
        image: "img_4.webp",
        name: "Brogue Military",
        price: "$60.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product5":
      return {
        image: "img_5.webp",
        name: "Navy Brown Red",
        price: "$70.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product6":
      return {
        image: "img_6.webp",
        name: "Brogues 1920s",
        price: "$60.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product7":
      return {
        image: "img_7.webp",
        name: "Leather Gatsby",
        price: "$55.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product8":
      return {
        image: "img_8.webp",
        name: "Suede Tweed Laced",
        price: "$66.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product9":
      return {
        image: "img_9.png",
        name: "Suede Tweed Laced",
        price: "$54.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product10":
      return {
        image: "img_10.jpeg",
        name: "Itoki Vegan Oxford",
        price: "$60.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product11":
      return {
        image: "img_11.avif",
        name: "Wyatt 40 Leathe",
        price: "$150.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    case "product12":
      return {
        image: "img_12.avif",
        name: "Monolith Brushed",
        price: "$120.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
    default:
      return {
        image: "default.jpg",
        name: "Product Not Found",
        price: "",
        description: "Sorry, the requested product could not be found.",
      };
  }
}

module.exports = getProductData;
