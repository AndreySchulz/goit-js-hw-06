const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

const listenInput = (event) => {
  const { value } = event.target;
  console.log(inputRef.dataset.length);

  if (value.length === Number(inputRef.dataset.length)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", listenInput);
