let cart = [];

/* -----------------------------
   LOAD CART (LOCAL STORAGE)
------------------------------*/
function loadCart() {
  let data = localStorage.getItem("cart");
  if (data) {
    cart = JSON.parse(data);
  }
  updateCart();
}
loadCart();

/* -----------------------------
   ADD TO CART
------------------------------*/
function addToCart(name, price) {

  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  updateCart();
}

/* -----------------------------
   UPDATE CART UI
------------------------------*/
function updateCart() {

  let cartItems = document.getElementById("cartItems");
  let total = 0;
  let count = 0;

  cartItems.innerHTML = "";

  cart.forEach(item => {

    cartItems.innerHTML += `
      <p>${item.name} x${item.qty} = ${item.price * item.qty} TK</p>
    `;

    total += item.price * item.qty;
    count += item.qty;
  });

  document.getElementById("total").innerText = "Total: " + total + " TK";
  document.getElementById("cartCount").innerText = count;

  // mobile sync
  let mobile = document.getElementById("cartCountMobile");
  if (mobile) mobile.innerText = count;

  saveCart();
}

/* -----------------------------
   SAVE CART (LOCAL STORAGE)
------------------------------*/
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* -----------------------------
   CART SIDEBAR TOGGLE
------------------------------*/
function toggleCart() {
  let sidebar = document.getElementById("cartSidebar");
  if (sidebar) {
    sidebar.classList.toggle("active");
  }
}

/* -----------------------------
   WHATSAPP CHECKOUT
------------------------------*/
function checkoutWhatsApp() {

  let phone = "8801322911626";
  let msg = "🛒 ORDER DETAILS\n-----------------\n\n";
  let total = 0;

  cart.forEach(i => {
    msg += `${i.name} x${i.qty} = ${i.price * i.qty} TK\n`;
    total += i.price * i.qty;
  });

  msg += "\n💰 Total: " + total + " TK";

  window.open(
    "https://api.whatsapp.com/send?phone=" +
    phone +
    "&text=" +
    encodeURIComponent(msg),
    "_blank"
  );
}

/* -----------------------------
   DARK MODE TOGGLE
------------------------------*/
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* -----------------------------
   SEARCH FUNCTION (SAFE LOAD)
------------------------------*/
window.addEventListener("DOMContentLoaded", function () {

  let search = document.getElementById("search");

  if (search) {

    search.addEventListener("keyup", function () {

      let value = this.value.toLowerCase();
      let products = document.querySelectorAll(".product-card");

      products.forEach(p => {
        let text = p.innerText.toLowerCase();
        p.style.display = text.includes(value) ? "block" : "none";
      });

    });

  }

});
