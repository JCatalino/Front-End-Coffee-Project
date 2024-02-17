let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.form-search');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let itemcart = document.querySelector('.itemcartcon');

document.querySelector('#cart-btn').onclick = () => {
    itemcart.classList.toggle('active');
}
