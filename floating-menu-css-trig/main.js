import './style.css';

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    btn.parentNode.toggleAttribute('data-toggled');
});
