const open=document.querySelector('.bars');

const close=document.querySelector('.close');

const navBar=document.querySelector('.nav-bar');
const liS = document.querySelector('.li-s');

open.addEventListener('click',()=>{
    navBar.style.display="block";
    open.style.display="none";
    close.style.display="block";
}
)
close.addEventListener('click',()=>{
    navBar.style.display="none";
    open.style.display="block";
    close.style.display="none";
});