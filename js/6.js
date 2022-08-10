
const navEl = document.querySelector('ul') // получаем ссылку на первое совпадение (ul) (используется любой CSS селектор).

const navLinksEl = document.querySelectorAll('.site-nav__link')

const imageEl = document.querySelector('.hero__image');

imageEl.src = '//new adress';

inmage.alt = 'this new image';

const heroTitleEl = document.querySelector('.text__title')

console.log(heroTitleEl.textContent);

heroTitleEl.textContent = 'I am new text';

console.log(imageEl.getAttribute('src'));

const actions = querySelectorAll('.js-actions buttons')

//events

const targetBtn = document.querySelector('.js-target-btn');

targetBtn.addEventListener('click', handleClick());

function handleTargetButtonClick() {
    console.log('Клик');
}

//

const form = document.querySelector('js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();// предотвращает перезагрузку страницы поумолчанию

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;

    const password = formElements.password.value;

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => { })
    
    //

    const refs = {
        input: document.querySelector('.js-input'),
        nameLabel: document.querySelector('.js-button > span'),
        licenseCheckbox: document.querySelector('.js-license'),
        btn: document.querySelector(.'js-button'),
    }

    refs.input.addEventListener('focus', onInputFocus);

    refs.input.addEventListener('input', onInputChange)

    refs.licenseCheckbox.addEventListener('change', onLicenseChange)


    function onInputFocus() {
        
    }

    refs.input.addEventListener('input', onInputChange)
    
    function onInputChange(event) {
        refs.nameLabel.textContent = event.currentTarget.value;
    }

    function onLicenseChange(event) {
        refs.btn.disabled = !event.currentTarget.checked
    }

    //keyboard

    const refs = {
        output = document.querySelector('.js-output'),
        clearBtn = document.querySelector('.js-clear'),
    }

    window.addEventListener('keypress', oneKeypress);
    refs.clearBtn.addEventListener('click', onClearOutput)

    function oneKeypress(event) {
        refs.output.textContent += event.key;
    }

    function onClearOutput(event) {
        refs.output.textContent = '';
    }

    //modal window

    const refs = {
        openModalbtn: document.querySelector(['data-action="open-modal"']),
        closeModalBtn: document.querySelector(['data-action="close-modal"']),
        backdrop = document.querySelector('.js-backdrop'),
    }

    refs.openModalBtn.addEventListener('click', onOpenModal);
    refs.closeModalBtn.addEventListener('click', onCloseModal);
    refs.backdrop.addEventListener('click', onBackdropClick);

    

    function onOpenModal() {
        window.addEventListener('keydown', onEscKeyPress);
        document.body.classList.add('show-modal');
    }

    function onCloseModal() {
        window.removeEventListener('keydown', onEscKeyPress);
        document.body.classList.remove('show-modal');
    }

    function onBackdropClick(event) {
        
        if (event.target === event.currentTarget) {
            console.log('кликнули именно в бекдроп');
            onCloseModal();
        }

    }

    function onEscKeyPress(event) {
        
        if (event.code = 'Escape') {
            onCloseModal();
        }
    }