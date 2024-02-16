import './style.css';

const slider = document.querySelector('input');
const wrapper = document.querySelector('.wrapper');
slider.addEventListener('input', (e) => {
    wrapper.style.setProperty('--dx', `${e.target.value}%`);
});
