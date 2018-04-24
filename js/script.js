function classToggle() {
  const nav = document.querySelector('.navbar-nav')
  
  nav.classList.toggle('navbar-nav-collapse');
}

document.querySelector('.navbar-button-collapse')
  .addEventListener('click', classToggle);