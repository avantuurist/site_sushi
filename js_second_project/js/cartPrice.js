function cartPrice(){
  const cartItems = document.querySelectorAll('.cart-item')
  const totalPriceEl = document.querySelector('.total-price')
  const cartDelivery = document.querySelector('[data-cart-delivery]')
  const deliveryCost = document.querySelector('.delivery-cost')

  let pricetotal = 0;

  cartItems.forEach(function (item){  // item - каждая карточка добавленная в корзину 
    
    const amountEl = item.querySelector('[data-counter]'); //количество
    const priceEl = item.querySelector('.price__currency'); // цена
    

    const currentPrice = parseInt(priceEl.innerText) * parseInt(amountEl.innerText); // вся стоимость в каждой карточке

     pricetotal += currentPrice; //вся стоимость всех карточек
     
  })
  // Отображаем цену на странице
  totalPriceEl.innerText = pricetotal;
    
  //Скрываем / Показываем блок со стоимостью доставки
  if(pricetotal > 0){
    cartDelivery.classList.remove('none')
  }
  else{
    cartDelivery.classList.add('none')
  }


  // Указываем стоимость доставки
  if(pricetotal >= 600){
    deliveryCost.classList.add('free')
    deliveryCost.innerText = 'бесплатно'
  } else {
    deliveryCost.classList.remove('free')
    deliveryCost.innerText = '250'
  }
}


