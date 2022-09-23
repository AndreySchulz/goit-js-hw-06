const categoriesListRef = document.querySelector("#categories");
const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories:${categoriesListRef.children.length}`)
for(const element of categoriesRef){
    
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
}






// 