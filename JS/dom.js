// console.dir(document);
// document.querySelector('.site-nav')
// console.log(document.querySelector('.site-nav'));
// console.log(document.querySelectorAll('.site-nav'));

// const listEl = document.querySelector('ul');
// const firstItemEl = listEl.firstElementChild
// console.log(firstItemEl);
// const listUlOne = firstItemEl.parentElement
// console.log(listUlOneП);

const img = document.querySelector(".hero__image");
console.dir(img);
//console.log(img.src = "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480");
//img.alt = 'kitten';



/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// console.log(img.hasAttribute('alt'));
// console.log(img.hasAttribute('djdj'));
// img.removeAttribute('src')

// const mainTitle = document.querySelector('.hero__title')
// const magicBtn = document.querySelector('.js-magic-btn');
// const linkEl = document.querySelector('.site-nav__link')
// const navListEl = document.querySelector('.site-nav')
// linkEl.computedStyleMap.color = 'green'
// linkEl.style.back
// mainTitle.classList.add('main__title')
// mainTitle.classList.remove('hero__title')


// mainTitle.addEventListener('click', () => {
//     mainTitle.classList.toggle('toggle')
//     mainTitle.classList.replace('main__title', 'replace')
//     console.log(mainTitle.classList.contains('toggle'));
// })



/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКлас)
 * - contains(клас)
 */

const titleEl = document.createElement('h1');
titleEl.classList.add('page-title')
titleEl.textContent = 'My element'
titleEl.style.color = 'red'

const heroEl = document.querySelector('.hero')
/* Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imageEl = document.createElement('img')
imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg'
imageEl.alt = 'valais-alpine-mountains-glacier'
console.log(imageEl);

// heroEl.appendChild(titleEl)
// heroEl.appendChild(imageEl)
heroEl.append(titleEl, imageEl)


/*
 * Створюємо і додаємо новий пункт меню
 */
{/* <li class="site-nav__item">
<a href="" class="site-nav__link">Контакти</a>
</li> */}
// const listEl = document.querySelector('.site-nav')
// const itemEl = document.createElement('li');
// itemEl.classList.add('site-nav__item');
// const navLink = document.createElement('a');
// navLink.href = '';
// navLink.classList.add('site-nav__link');
// navLink.textContent = 'New punkt of list';
// itemEl.appendChild(navLink);
// listEl.appendChild(itemEl);





{/* <article class="product">
  <h2 class="product__name">Назва</h2>
  <p class="product__descr">Опис</p>
  <p product__pridct>Ціна: 1111 кредитів</p>
</article> */}
const product = {
    name: 'Товар-2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
    price: 3000,
    available: false,
    onSale: false,
  }

const articleEl = document.querySelector('.hero');
articleEl.innerHTML = `<article class="product">
  <h2 class="product__name">${product.name}</h2>
  <p class="product__descr">${product.description}</p>
  <p product__pridct>Ціна:${product.price}</p>
</article>`;
