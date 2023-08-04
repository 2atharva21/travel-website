
let menu=document.getElementById('menu-icon');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    // alert(1)
}) 
// =() =>{
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');

// }