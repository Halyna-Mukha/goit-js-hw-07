const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(element => {
    const titleEl = element.querySelector('h2').textContent;
    console.log(`Category: ${titleEl}`);
    const liCountAll = element.querySelectorAll('ul li').length;
    console.log(`Elements: ${liCountAll}`);
});


const parentUl = document.getElementById('categories');

parentUl.classList.add('categories');

const items = parentUl.querySelectorAll('.item');

items.forEach(item => {
    item.classList.add('item-list');

    const nextUl = item.querySelector('ul');

    if (nextUl) {
        nextUl.classList.add('menu-item');

        const nextItemsEl = nextUl.querySelectorAll('li');

        nextItemsEl.forEach(nextItemEl => {
            nextItemEl.classList.add('menu-title-list');
        });
    }
});

const titleEl = document.querySelectorAll('h2');
titleEl.forEach(element => element.classList.add('menu-title'));