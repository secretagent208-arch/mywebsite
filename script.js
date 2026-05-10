let cart = [];

window.addEventListener("DOMContentLoaded", function () {

  window.addToCart = function (name, price) {

    cart.push({ name, price });

    console.log("clicked");

    document.getElementById("cartCount").textContent = cart.length;

    alert(name + " added to cart!");

    displayCart();
  };

  function displayCart() {

    let cartItems = document.getElementById("cartItems");

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {

      cartItems.innerHTML += `<p>${item.name} - ${item.price} TK</p>`;

      total += item.price;

    });

    document.getElementById("total").innerText =
      "Total: " + total + " TK";
  }

});
