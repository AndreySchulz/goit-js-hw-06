const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEL = document.querySelector('#ingredients');
const listIngridientsEl = ingredients.map(element => {
  const listItemElement = (document.createElement("li"))
  listItemElement.textContent = element 
  listItemElement.classList.add("item")
  return listItemElement
});


ingredientsEL.append(...listIngridientsEl);


