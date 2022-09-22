const categoriesListRef = document.querySelector("#categories");
const categoriesRef = document.querySelectorAll('.item');

for(const element of categoriesRef){

    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
}






// 