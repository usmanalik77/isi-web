/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //Validat that variables exist
    if(toggle && nav){
        //We add the show-menu class to the dic tag with the nav__menu class
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2500,
    reset: false
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .board__content, .contact__container, .previous_data, .previous__title,
            .board__description, .board__initial, partner__container, partner__img`, {
    interval: 200
})

//===== DARK MODE TOGGLE =====//
const darkModeToggle = document.querySelector('.dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
document.body.classList.toggle('light-mode');
darkModeToggle.classList.toggle('active');
if (document.body.classList.contains('dark-mode')) {
localStorage.setItem('mode', 'dark');
} else {
localStorage.setItem('mode', 'light');
}
});

const mode = localStorage.getItem('mode');
if (mode === 'dark') {
document.body.classList.add('dark-mode');
darkModeToggle.classList.add('active');
} else if (mode === 'light') {
document.body.classList.add('light-mode');
darkModeToggle.classList.add('active');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.body.classList.add('dark-mode');
darkModeToggle.classList.add('active');
}

const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
toggleSwitch.addEventListener('click', function() {
if(this.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
} else {
document.documentElement.setAttribute('data-theme', 'light');
}
});

// Function to change the theme based on system preference
function setThemePreference() {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.documentElement.setAttribute('data-theme', 'dark');
} else {
document.documentElement.setAttribute('data-theme', 'light');
}
}

// Call setThemePreference when the page loads
setThemePreference();

// Function to handle toggle switch for light and dark mode
function toggleTheme(e) {
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
const currentTheme = document.documentElement.getAttribute('data-theme');
if (currentTheme === 'dark') {
document.documentElement.setAttribute('data-theme', 'light');
toggleSwitch.checked = false;
} else {
document.documentElement.setAttribute('data-theme', 'dark');
toggleSwitch.checked = true;
}
}
const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.style.setProperty('--bg-color', '#fff');
    body.style.setProperty('--text-color', '#333');
    button.textContent = 'Dark mode';
  } else {
    body.classList.add('dark');
    body.style.setProperty('--bg-color', '#333');
    body.style.setProperty('--text-color', '#fff');
    button.textContent = 'Light mode';
  }
});