var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var selectPlanButton = document.querySelectorAll('.plan-button');
console.log(toggleButton);
for(var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function() {
    closeModal();
    mobileNav.classList.remove('open');
})

if(modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
//console.dir(backdrop);