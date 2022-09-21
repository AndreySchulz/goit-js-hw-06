const inputControlRef = document.querySelector('#font-size-control');
const resizangTextRef = document.querySelector('#text');

inputControlRef.addEventListener("input", (event)=>{
    console.log(event.target.value);
    console.log(resizangTextRef)
    resizangTextRef.style.fontSize = `${event.target.value}px`
})