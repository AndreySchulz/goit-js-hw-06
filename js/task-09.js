function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyRef: document.querySelector('body'),
  textRef: document.querySelector('.color'),
  btnRef: document.querySelector('.change-color')
}
function getNewColor(){
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
  refs.textRef.textContent = `${getRandomHexColor()}`
}
refs.btnRef.addEventListener("click" , getNewColor)