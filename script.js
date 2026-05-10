let cart = [];

// Add To Cart
function addToCart(name, price) {

  cart.push({ name, price });

  // Cart Count
  document.getElementById("cartCount").innerText = cart.length;

  alert(name + " added to cart!");

  displayCart();
}

// Display Cart
function displayCart() {

  let cartItems = document.getElementById("cartItems");

  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach(item => {

    cartItems.innerHTML += `
      <p>${item.name} - ${item.price} TK</p>
    `;

    total += item.price;

  });

  document.getElementById("total").innerText =
    "Total: " + total + " TK";
}
