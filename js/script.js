// Toggle class active untuk humburger
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Menu Humberger Di Pencet
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

//Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) =>{
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};


//Penccet Di Luar sidebar ajang ngalengitken nav
const hm = document.querySelector('#humburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e){
  if(!hm.contains(e.target)& !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }

  if(!sb.contains(e.target)& !searchForm.contains(e.target)){
    searchForm.classList.remove('active');
  }

  if(!sc.contains(e.target)& !shoppingCart.contains(e.target)){
    shoppingCart.classList.remove('active');
  }
});

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Pesan Berhasil Di Kirim!");
    })
  });
});

//modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('.item-detail-button');

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = 'flex';
  e.preventDefault();
};

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};
// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};