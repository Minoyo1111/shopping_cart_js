document.addEventListener('DOMContentLoaded', () => {
  const trashBtns = document.querySelectorAll('.trash-btn')
  trashBtns.forEach(btn =>{
    btn.addEventListener('click', (e) => {
      const row = e.currentTarget.parentElement.parentElement
      row.remove()
    })
  })
})