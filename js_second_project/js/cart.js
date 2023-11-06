const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event){

  if(event.target.hasAttribute('data-cart')){
    //находим карточку с товаром, внутри которой был совершен клик
    const card = event.target.closest('.card');

    //собираем данные с этого товара и записываем их в единный объект productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('.text-muted').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('.items__current').innerText
    }

		//проверяем есть ли такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id = "${productInfo.id}"`)

		//если товар в корзине 
		if(itemInCart){
			const counterEl = itemInCart.querySelector('[data-counter]');
			counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
		}else{
    // собранные данные подставим в шаблон для товаров в корзине
    const cartItemHtml = `
    <!-- Cart item -->
							<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>
    `
    //отоброзим товар в корзине
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
		}

		//сброс счетчика
		card.querySelector('[data-counter]').innerText = '1';

		//Отображение статуса корзины Пустой / Полная 
		toggleCardStatus();

		cartPrice();
  }
})