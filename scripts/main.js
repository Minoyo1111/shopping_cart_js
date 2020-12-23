document.addEventListener('DOMContentLoaded', () => {
  // 監聽垃圾桶按鈕刪掉整行內容
  const trashBtns = document.querySelectorAll('.trash-btn')
  trashBtns.forEach(btn =>{
    btn.addEventListener('click', setRemoveItemBtn)
  })
  const inputs = document.querySelectorAll('.cart .quantity')
  inputs.forEach(input =>{
    input.addEventListener('change', setInput)
  })

  const add_buttons = document.querySelectorAll('.add_item')
  add_buttons.forEach(btn =>{
    btn.addEventListener('click', setItemBtn)
  })


})
  function setItemBtn(e){
    const product = e.currentTarget.parentElement.parentElement
    const productName = product.querySelector('.cat-name').innerText
    const price = product.querySelector('.price').innerText.replace('$', '')
    console.log(productName, price)

  }


  function setInput(e){
    const input = e.target
    let quantity = input.value
    if (quantity <= 0) {
     quantity = 1;
     e.target.value = quantity
    }
    const cartItem = input.parentElement.parentElement
    const price = cartItem.querySelector('.price').innerText.replace('$', '')
    cartItem.querySelector('.subtotal').innerText = `$${quantity * price}`

    updateCart()
  }


 function setRemoveItemBtn(e){
  const row = e.currentTarget.parentElement.parentElement
  row.remove()

  updateCart()
 }


 function updateCart(){
  const cartItems = document.querySelectorAll('.cart .cart-item')
  let total = 0
  cartItems.forEach(item => {
    const quantity = item.querySelector('.quantity').value
    // console.log(q
    const price = item.querySelector('.price').innerText.replace('$', '')
    // console.log(price)
    total += (quantity * price)
    
  })
  // console.log(total)
  document.querySelector('.total-price').innerText = `$${total}`

 }
