function buyNow(product) {
  let phone = "8801322911626";
  let message = "I want to buy: " + product;

  let url = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(message);

  window.location.href = url;
}
let cart = [];

function addToCart(name, price) {
  cart.push({ name: name, price: price });
  alert(name + " added to cart!");
  console.log(cart);
}
function updateCart() {
  let cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";

  cart.forEach(item => {
    cartDiv.innerHTML += "<p>" + item.name + " - " + item.price + " BDT</p>";
  });
}
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  alert(name + " added to cart!");
}
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });

  document.getElementById("cartCount").innerText = cart.length;

  alert(name + " added to cart!");
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach(item => {
    cartItems.innerHTML += "<p>" + item.name + " - " + item.price + " BDT</p>";
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: " + total + " BDT";
}
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cartCount").innerText = cart.length;
  alert(name + " added to cart!");
}
function addToCart() {
  alert("JS is working");
}
