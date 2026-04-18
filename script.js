function buyNow(product) {
  let phone = "8801322911626";
  let message = "I want to buy: " + product;

  let url = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(message);

  window.location.href = url;
}
