const headerButton = document.querySelector('.header-button');
const changeHeader = document.querySelector('.the-header');
const mainButton = document.querySelector('.main-button');

if (headerButton && changeHeader) {
    headerButton.addEventListener('click', function() {
        changeHeader.classList.toggle('bg-green');
    })
}

if (mainButton) {
    mainButton.addEventListener('click', function() {
        const fontClass = prompt('Welke class wilt u de letters hebben?', 'font-red');
        document.body.classList.toggle(fontClass);
    })
}