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
    btn.addEventListener('click', setAddItemBtn)
  })

  const empty_cart = document.querySelector('.empty-cart')
  empty_cart.addEventListener('click', emptyCart)


})
  function emptyCart(e){
    document.querySelector('.item-list').innerHTML = ''
    updateCart()
  }


  function setAddItemBtn(e){
    const product = e.currentTarget.parentElement.parentElement
    const productName = product.querySelector('.cat-name').innerText
    const price = product.querySelector('.price').innerText.replace('$', '')

    const items = document.querySelectorAll('.cart-item')
    for (let i = 0; i < items.length; i ++){
      const item = items[i]
      const title = item.querySelector('.title').innerText
      if (title == productName) {
        item.querySelector('.quantity').value = Number(item.querySelector('.quantity').value) + 1
        updateCart()
        return;
      }
    }



    const row = document.createElement('tr')
    row.classList.add('cart-item')
    row.innerHTML = `
      <td>${productName}</td>
      <td class="title"><input type="number" value="1" class="quantity"></td>
      <td class="price">$${price}</td>
      <td class="subtotal">$${price}</td>
      <td><button class="btn btn-danger btn-sm trash-btn"><i class="fas fa-trash-alt"></i></button></td>
    `
    const itemList = document.querySelector('.item-list')
    itemList.appendChild(row)
    row.querySelector('.trash-btn').addEventListener('click', setRemoveItemBtn)
    row.querySelector('.cart .quantity').addEventListener('change', setInput)

    updateCart()
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
    item.querySelector('.subtotal').innerHTML = `$${ quantity * price }`
    // console.log(price)
    total += (quantity * price)
    
  })
  // console.log(total)
  document.querySelector('.total-price').innerText = `$${Math.round(total * 100) / 100 }`
 }
