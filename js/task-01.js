const ulCategories = document.querySelectorAll('.item');

for(const element of ulCategories){
 
    console.log(element.children[0].textContent)
    console.log(element.children[1].children.length)
}
