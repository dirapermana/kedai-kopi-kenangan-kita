// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Menu Humberger Di Pencet
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


//Penccet Di Luar sidebar ajang ngalengitken nav
const humbuger = document.querySelector('#humburger-menu');

document.addEventListener('click', function(e){
  if(!humbuger.contains(e.target)& !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
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

