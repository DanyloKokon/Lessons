// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click', () => {
//     targetBtn.addEventListener('click', () => {
//         console.log('Works');
//     });
// })

// removeListenerBtn.addEventListener('click', () => {
//     targetBtn.removeEventListener('click', () => {
//         console.log('Works end');
//     });
// });

// /*
//  * Події.
//  * - Створення та видалення слухача
//  * - Назви колбеків для слухачів
//  *    - handle*: handleSubjectEvent
//  *    - *Handler: subjectEventHandler
//  *    - on*: onSubjectEvent
//  * - Посилальна ідентичність колбеків
//  * - Об'ект Події
//  */


// const products = [
//     {
//         name: 'Товар-2',
//         description:
//             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//         price: 3000,
//         available: false,
//         onSale: false,
//     },
//     {
//         name: 'Товар-3',
//         description:
//             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//         price: 1500,
//         available: true,
//         onSale: false,
//     },
//     {
//         name: 'Товар-4',
//         description:
//             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//         price: 2500,
//         available: false,
//         onSale: false,
//     },
// ];



// function createArticles (articles){
//    return articles.map((product) => {
//     return `<article class="product">
//        <h2 class="product__name">${product.name}</h2>
//        <p class="product__descr">${product.description}</p>
//      <p product__pridct>Ціна: ${product.price} кредитів</p>
//       </article>`
// }).join(' ')}
// console.log(articles);


// articleEl.innerHTML = articles.join(' ')

// const addButton = document.querySelector('.js-add-product');
// const addGallary = document.querySelector('.ja-gallery');
// addButton.addEventListener('click', () => {
//     addGallary.insertAdjacentHTML('beforeend', createArticles(products));
//});




// ----------------------------------------------------------------------
// const inputEl = document.querySelector('.js-input');
// const chekboxEl = document.querySelector('.js-license');
// const buttonEl = document.querySelector('.js-button');
// const spanEl = document.querySelector('.js-button span');
// const soundEl = document.querySelector('.js-sound');
// //inputEl.addEventListener('input', (event) => {
// //console.log(event.currentTarget.value);
// //spanEl.textContent = event.currentTarget.value;
// //})
// chekboxEl.addEventListener('change', (event) => {
//     // if (event.currentTarget.checked) {
//     //     buttonEl.removeAttribute('disabled');
//     // } else {
//     //     buttonEl.setAttribute('disabled', true);
//     // }
//     buttonEl.disabled = !event.currentTarget.checked;
// })

// inputEl.addEventListener('blur', (event) => {
// console.log(event.currentTarget.value);
// })

// soundEl.addEventListener('change', (event) => {
// console.log(event.currentTarget.value);

// })



// const formEl = document.querySelector(".js-register-form");
// formEl.addEventListener("submit", onSubmit)
// function onSubmit(event) {
//     event.preventDefault();
//     console.dir(event.currentTarget.elements.email.value);
//     event.currentTarget.reset();

// }

// const formEl = document.querySelector(".form");
// formEl.addEventListener("submit", onSubmit)
// function onSubmit(event) {
//     event.preventDefault();
//     alert(`Cntcs ${event.currentTarget.elements.name.value} number ${event.currentTarget.elements.tel.value}`);
//     event.currentTarget.reset();

// }








const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
  };
  
    window.addEventListener('keypress', onKeypress)

 function onKeypress(event){
    
  console.log('event.code: ', event.code);
  console.log('event.key: ', event.key);

 }