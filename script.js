let cartBtn = document.querySelector('#cart-btn');
let cart = document.querySelector('.h1');

cartBtn.addEventListener('click', (e) => {
   cart.classList.toggle("cart-open");
});