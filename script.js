let cart = [];

function addToCart(name, price) {

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  saveCart();
  displayCart();
}

function getTotalItems() {
  let total = 0;

  cart.forEach(item => {
    total += item.qty;
  });

  return total;
}

function displayCart() {

  let cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {

    cartItems.innerHTML += `
      <p>
        ${item.name} - ${item.price} TK (x${item.qty})

        <button onclick="increaseQty(${index})">+</button>
        <button onclick="decreaseQty(${index})">-</button>
      </p>
    `;

    total += item.price * item.qty;
  });

  document.getElementById("total").innerText =
    "Total: " + total + " TK";

  document.getElementById("cartCount").textContent = getTotalItems();
}

function increaseQty(index) {
  cart[index].qty += 1;
  saveCart();
  displayCart();
}

function decreaseQty(index) {
  cart[index].qty -= 1;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  displayCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let data = localStorage.getItem("cart");

  if (data) {
    cart = JSON.parse(data);
  }

  displayCart();
  document.getElementById("cartCount").textContent = getTotalItems();
}
function checkoutWhatsApp() {

  let phone = "8801322911626";
  let message = "🛒 Order Details:\n\n";

  let total = 0;

  cart.forEach(item => {
    message += item.name + " x" + item.qty + " = " + (item.price * item.qty) + " TK\n";
    total += item.price * item.qty;
  });

  message += "\n💰 Total: " + total + " TK";

  let url =
    "https://api.whatsapp.com/send?phone=" +
    phone +
    "&text=" +
    encodeURIComponent(message);

  window.location.href = url;
}

loadCart();
function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}
