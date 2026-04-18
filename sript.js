function buyNow(product) {
  let phone = "8801322911626";
  let message = "Buy Now: " + product;
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.location.href = url;
}
