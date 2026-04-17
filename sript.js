function buyNow(product) {
  let phone = "8801322911626";
  let message = "I want to buy: " + product;
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
