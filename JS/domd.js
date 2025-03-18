//import products from "./products";

const div = document.querySelector('.hero')
const articleEl = document.querySelector('.site-nav__item')
const products =  [

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


const product = products.map((products) => {
return `<article class="product">
  <h2 class="product__name">${products.name}</h2>
  <p class="product__descr">${products.description}</p>
  <p product__pridct>Ціна:${products.price}</p>
</article>`;
})

console.log(product);

articleEl.innerHTML = product.join(' ')