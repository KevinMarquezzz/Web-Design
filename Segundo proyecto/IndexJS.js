const bar= document.getElementById('bar');
const bar2= document.getElementById('bar2');
const Menus= document.getElementById('Menus');

if (bar) {
    bar.addEventListener('click', () => {
        Menus.classList.add('active');
    })
}
if (bar2) {
    bar2.addEventListener('click', () => {
        Menus.classList.remove('active');
    })
}
const menuLinks = document.querySelectorAll('#Menus li a');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    Menus.classList.remove('active');
    bar2.classList.add('closed');
  });
});
