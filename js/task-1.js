const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(element => {
const titleEl = element.querySelector('h2').textContent;
console.log(`Category: ${titleEl}`);
const liCountAll = element.querySelectorAll('ul li').length;  
console.log(`Elements: ${liCountAll}`);
});

categoriesList.classList.add('menu-list');

const mainItemEl = categoriesList.querySelector('.childElement');

mainItemEl.classList.add('item')
