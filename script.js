let cart = [];

function addToCart(name, price) {

  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  updateCart();
}
function updateCart() {
  let total = 0;
  let count = 0;

  document.getElementById("cartItems").innerHTML = "";

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    document.getElementById("cartItems").innerHTML += `
      <p>${item.name} x${item.qty}</p>
    `;
  });

  document.getElementById("total").innerText = "Total: " + total + " TK";
  document.getElementById("cartCount").innerText = count;

  // mobile cart sync
  let mobile = document.getElementById("cartCountMobile");
  if (mobile) mobile.innerText = count;
}
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
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}

function checkoutWhatsApp() {

  let phone = "8801322911626";
  let msg = "Order:\n\n";
  let total = 0;

  cart.forEach(i => {
    msg += `${i.name} x${i.qty} = ${i.price * i.qty} TK\n`;
    total += i.price * i.qty;
  });

  msg += "\nTotal: " + total + " TK";

  window.open(
    "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(msg),
    "_blank"
  );
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
