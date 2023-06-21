const container = document.querySelector('.container');
const sideLeft = document.querySelector('.side-left');

const handleMouseMove = (e) => {
    const percentage = (e.clientX / window.innerWidth) * 100;
    sideLeft.style.setProperty('--slide-left', `${percentage}%`);
};

container.addEventListener('mousemove', handleMouseMove);
