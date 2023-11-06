window.addEventListener('click', function(event){
  let counter;

  // event.target - получаем элемент по которому кликнли


  //проверяем клик сторого по кнопке Плюс или Минус
  if(event.target.dataset.action == 'plus' || event.target.dataset.action === 'minus'){
    //находим обертку счетчика  
    const counterWrapper = event.target.closest('.counter-wrapper');
    //находим div с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]');
  }

   // проверяем является ли элемент по которому был совершен клик кнопкой плюс
   if(event.target.dataset.action == 'plus') {
      counter.innerText = ++counter.innerText;
   }

   // проверяем является ли элемент по которому был совершен клик кнопкой минус
   if(event.target.dataset.action === 'minus'){
    if(parseInt(counter.innerText) > 1){
      counter.innerText = --counter.innerText;
    } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
       event.target.closest('.cart-item').remove();   //удаляем товар из корзины

       toggleCardStatus();  //вставляем статус "корзина пуста"
       cartPrice(); //пересчет всей стоимости
   }
  }
  
  // Проверяем клик на + или - внутри корзины
  if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
    cartPrice(); //пересчитываем всю стоимость
  }
 
})

/*
//находим элементы на странице

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]')

//остлеживаем клик на кнопку btnMinus
btnMinus.addEventListener('click', function(){
  console.log('Minus click');
  //проверяем чтобы счетчик был больше 0
  if(parseInt(counter.innerText) > 0)
    counter.innerText = --counter.innerText;
})

//отслеживаем клик на кнопку btnPlus
btnPlus.addEventListener('click', function(){
  console.log('Plus click')
  counter.innerText = ++counter.innerText;
})

*/