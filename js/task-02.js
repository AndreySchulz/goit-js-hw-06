const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEL = document.querySelector('#ingredients');
const listIngridientsEl = []

ingredients.forEach(element => {
  const listItemElement = (document.createElement("li"))
  listItemElement.textContent = element 
  listItemElement.classList.add("item")
  listIngridientsEl.push(listItemElement)
});


ingredientsEL.append(...listIngridientsEl);


