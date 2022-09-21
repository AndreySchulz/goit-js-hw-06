const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const hendleClick = (event)=> {
    if(event.currentTarget.value === ""){
        outputRef.textContent = "Anonymous";
        return;
    }
    outputRef.textContent = event.currentTarget.value 
}
inputRef.addEventListener("input", hendleClick);