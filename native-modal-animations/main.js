import './style.css';

document.querySelector('.launch').addEventListener('click', () => {
    document.querySelector('dialog')?.showModal();
});
