$(function() {

    $(".questions__article-title").on("click", function() {
        $(".questions__article").removeClass("questions__article--active")
        $(this).parent().addClass("questions__article--active")
    })
})

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