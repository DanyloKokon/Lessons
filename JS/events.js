const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', () => {
    targetBtn.addEventListener('click', () => {
        console.log('Works');
    });
})

removeListenerBtn.addEventListener('click', () => {
    targetBtn.removeEventListener('click', () => {
        console.log('Works end');
    });
});

/*
 * Події.
 * - Створення та видалення слухача
 * - Назви колбеків для слухачів
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Посилальна ідентичність колбеків
 * - Об'ект Події
 */


const products = [
    {
        name: 'Товар-2',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
        price: 3000,
        available: false,
        onSale: false,
    },
    {
        name: 'Товар-3',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
        price: 1500,
        available: true,
        onSale: false,
    },
    {
        name: 'Товар-4',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
        price: 2500,
        available: false,
        onSale: false,
    },
];



function createArticles (articles){
   return articles.map((product) => {
    return `<article class="product">
       <h2 class="product__name">${product.name}</h2>
       <p class="product__descr">${product.description}</p>
     <p product__pridct>Ціна: ${product.price} кредитів</p>
      </article>`
}).join(' ')}
console.log(articles);


articleEl.innerHTML = articles.join(' ')

const addButton = document.querySelector('.js-add-product');
const addGallary = document.querySelector('.ja-gallery');
addButton.addEventListener('click', () => {
    addGallary.insertAdjacentHTML('beforeend', createArticles(products));
});