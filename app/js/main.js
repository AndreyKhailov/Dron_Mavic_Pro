// ************** Create mobile menu ******************************
const   burgerBtn = document.getElementById('menu-burger')
        mobileMenu = document.getElementById('menu')  
// Mobile menu is opened and closed by clicking on the button menu       
burgerBtn.addEventListener('click', () => {
    // Open and close menu button -->
    burgerBtn.classList.value === "header__menu-burger btn--active" 
        ? burgerBtn.classList.remove('btn--active')
        : burgerBtn.classList.add('btn--active');
    // Open and close mobile menu -->
    mobileMenu.classList.value === "header__menu-list menu--active" 
        ? mobileMenu.classList.remove('menu--active')
        : mobileMenu.classList.add('menu--active');  
});
// Mobile menu is closed by clicking on the menu links
mobileMenu.addEventListener('click', () => {
    burgerBtn.classList.remove('btn--active');
    mobileMenu.classList.remove('menu--active');
});
// ****************************************************************

// ************** Create Dropdown section *************************
const   dropdown_1 = document.getElementById('dropdown_1')
        dropdown_2 = document.getElementById('dropdown_2')
        dropdown_3 = document.getElementById('dropdown_3')
        dropdown_4 = document.getElementById('dropdown_4');
// Open and close dropdown menu -->    
dropdown_1.addEventListener('click', () => {
    dropdown_1.classList.value === "questions__article dropdown--active"
    ? dropdown_1.classList.remove('dropdown--active')
    : dropdown_1.classList.add('dropdown--active'); 
});
dropdown_2.addEventListener('click', () => {
    dropdown_2.classList.value === "questions__article dropdown--active"
    ? dropdown_2.classList.remove('dropdown--active')
    : dropdown_2.classList.add('dropdown--active'); 
});
dropdown_3.addEventListener('click', () => {
    dropdown_3.classList.value === "questions__article dropdown--active"
    ? dropdown_3.classList.remove('dropdown--active')
    : dropdown_3.classList.add('dropdown--active'); 
});
dropdown_4.addEventListener('click', () => {
    dropdown_4.classList.value === "questions__article dropdown--active"
    ? dropdown_4.classList.remove('dropdown--active')
    : dropdown_4.classList.add('dropdown--active'); 
});
// ****************************************************************