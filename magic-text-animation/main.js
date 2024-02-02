import './style.css';

const wrapper = document.querySelector('.wrapper');
const items = gsap.utils.toArray('[data-animated-item]');
let isHovering = false;

const animateItem = (item) => {
    if (isHovering) {
        gsap.fromTo(
            item,
            {
                opacity: 1,
                x: () => gsap.utils.random(0, wrapper.offsetWidth - item.offsetWidth),
                y: 'random(-40, 0)',
            },
            {
                y: '-=20',
                opacity: 0,
                duration: 1.2,
                delay: gsap.utils.random(0, 1.25),
                overwrite: 'auto',
                immediateRender: false,
                onComplete: () => animateItem(item),
            }
        );
    }
};

wrapper.addEventListener('mouseenter', () => {
    isHovering = true;
    items.forEach(animateItem);
});

wrapper.addEventListener('mouseleave', () => {
    isHovering = false;
});
