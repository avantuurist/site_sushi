function toggleCardStatus(){

  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmpty = document.querySelector('[data-cart-empty]');  //Корзина пуста
  const orderForm = document.querySelector('#order-form'); //окошко "Оформить заказ"

  //  children - выводит HTML коллекцию(элементы)
  //  children.length - выводит количество элментов в cartWrapper
  //classLIst используется для доступа к классам в html и для добавления, удаления, или проверки класса.

  if(cartWrapper.children.length > 0){ // если в корзине есть добавленные элементы
    cartEmpty.classList.add('none'); //скрываем статус "корзина пуста"
    orderForm.classList.remove('none'); //выводим окошко "Оформить заказ"
  }else{                             
    cartEmpty.classList.remove('none') //выводим статус "корзина пуста"
    orderForm.classList.add('none') //скрываем окошко "Офромить заказ"
  }
}