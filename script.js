const cartSlide = document.getElementById("cart");
const cartBtn = document.getElementById("cart-btn");

cartBtn.onclick = () => {
   cartSlide.style.left = '0';
}

const closeBtn = document.getElementById("close-btn");

closeBtn.onclick = () => {
   cartSlide.style.left = '-100%';
}

// add to cart functionality

let addTocartBtns = document.querySelectorAll('.cart-btn');

addTocartBtns.forEach(button => {
   button.addEventListener('click', (e) => {
      let productBox = e.target.closest('.product');
      addTocart(productBox);
      updatePrice();
   });;
});


let addTocart = (productBox) =>{

   let productName = productBox.querySelector('h1').textContent;
   let productImg = productBox.querySelector('img').src;
   let ProductPrice = productBox.querySelector('h2').textContent;

   let cartContent = document.querySelector('.cart-box');
   let cartBox = document.createElement('div');
   cartBox.classList.add('product');
   cartBox.innerHTML = `
            <a href="#"><img src="${productImg}" alt=""></a>
            <div class="product-details">
                <p>Safari</p>
                <h1>${productName}</h1>
                <h2>${ProductPrice}</h2>
            </div>
            <div class="remove-btn">
              <i class="fa fa-trash"></i>
            </div>
   `

   cartContent.appendChild(cartBox);
   updatePrice();
}


let updatePrice = () => {

   let cartContent = document.querySelector('.cart-box');
   let totalPrice = document.querySelector('#total');
   let boxes = cartContent.querySelectorAll('.product');
   let total = 0;
   boxes.forEach(box => {
      let priceElement = box.querySelector('h2').textContent;
      let price = priceElement.replace('₹','');
      total = price + price;
   })
   totalPrice.textContent = `₹${total}`;
}
