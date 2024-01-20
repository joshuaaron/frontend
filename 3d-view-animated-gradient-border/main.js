import './style.css';
const wrapper = document.querySelector('section');

wrapper.addEventListener('mouseover', () => {
    wrapper.setAttribute('data-hovered', true);
});
wrapper.addEventListener('mouseout', () => {
    wrapper.removeAttribute('data-hovered', false);
});
