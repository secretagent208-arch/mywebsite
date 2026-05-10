let cart = [];

// WhatsApp Buy Now
function buyNow(product) {

  let phone = "8801322911626";

  let message = "I want to buy: " + product;

  let url =
    "https://api.whatsapp.com/send?phone=" +
    phone +
    "&text=" +
    encodeURIComponent(message);

  window.location.href = url;
}

// Add To Cart
function addToCart(name, price) {

  cart.push({ name, price });

  // Cart Count Update
  document.getElementById("cartCount").innerText = cart.length;

  alert(name + " added to cart!");

  displayCart();
}

// Show Cart Items
function displayCart() {

  let cartItems = document.getElementById("cartItems");

  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach(item => {

    cartItems.innerHTML +=
      "<p>" + item.name + " - " + item.price + " TK</p>";

    total += priceToNumber(item.price);

  });

  document.getElementById("total").innerText =
    "Total: " + total + " TK";
}

// Convert Price Text To Number
function priceToNumber(price) {

  return parseInt(price);

}
