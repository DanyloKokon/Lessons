const openM = document.querySelector('[data-action="open-modal"]');
const backdrop = document.querySelector('.js-backdrop');
const modal = document.querySelector('.modal');
const body = document.body
const closeM = document.querySelector('[data-action="close-modal"]')

function onBtnClick () {
    document.body.classList.toggle('show-modal')
    }
openM.addEventListener('click', onBtnClick);
closeM.addEventListener('click', onBtnClick)