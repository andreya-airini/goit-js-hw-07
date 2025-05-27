const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((categories) => {
    const title = categories.querySelector('h2').textContent;
    const numbers = categories.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numbers}`);
});