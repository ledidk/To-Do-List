const storageInput = document.querySelector('.tds');
const text = document.querySelector('.tds');
const button = document.querySelector('#save');
const storedInput = localStorage.getItem('textinput');

if (storageInput) {
  text.textContent = storedInput
}
storageInput.addEventListener('input', file => {
  text.textContent = file.target.value
})

const saveToLocalStorage = function () {
  localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click',saveToLocalStorage)

function resetProfile (){
  document. location. reload()
}