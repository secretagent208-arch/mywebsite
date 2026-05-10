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

  document.getElementById("cartCount").textContent = getTotalItems();
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
        ${item.name} - ${item.price} TK
        (x${item.qty})

        <button onclick="increaseQty(${index})">+</button>
        <button onclick="decreaseQty(${index})">-</button>
      </p>
    `;

    total += item.price * item.qty;
  });

  document.getElementById("total").innerText =
    "Total: " + total + " TK";
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

  document.getElementById("cartCount").textContent = getTotalItems();
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

loadCart();
