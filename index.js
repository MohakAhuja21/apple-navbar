const searchButton=document.querySelector('.desktop-nav .link-search');
const closeButton=document.querySelector('.link-close');
const searchContainer=document.querySelector('.search-container');
const desktopNav=document.querySelector('.desktop-nav');
const overlay=document.querySelector('.overlay');

searchButton.addEventListener('click',()=>{
    desktopNav.classList.add('hide');
    searchContainer.classList.remove('hide');
    overlay.classList.add('show');
})

closeButton.addEventListener('click',()=>{
    overlay.classList.remove('show'); 
    searchContainer.classList.add('hide');
    desktopNav.classList.remove('hide');
})
overlay.addEventListener('click',()=>{
    overlay.classList.remove('show'); 
    searchContainer.classList.add('hide');
    desktopNav.classList.remove('hide');
})

// mobile navigation
const navContainer=document.querySelector('.nav-container');
const menuIconContainer=document.querySelector('.menu-icon-container');

menuIconContainer.addEventListener('click',()=>{
    navContainer.classList.add('active');
})