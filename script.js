const cartSlide = document.getElementById("cart");
const cartBtn = document.getElementById("cart-btn");

cartBtn.onclick = () => {
   cartSlide.style.left = '0';
}

const closeBtn = document.getElementById("close-btn");

closeBtn.onclick = () => {
   cartSlide.style.left = '-100%';
}



