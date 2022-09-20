
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrimentEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

let counterValue = 0

incrimentEl.addEventListener('click', () => {

   counterEl.textContent = counterValue +=1
})  
decrementEl.addEventListener('click', () => {

    counterEl.textContent = counterValue -=1
 })  

s