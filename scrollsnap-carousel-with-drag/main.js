import './style.css';

const container = document.querySelector('.container');
const items = Array.from(document.querySelectorAll('.item'));

const DRAG_SPEED = 2;

let startX;
let scrollLeft;
let isDown;
let snappingTimeout;

container.addEventListener('mousedown', mouseIsDown);
container.addEventListener('mouseup', mouseUp);
container.addEventListener('mouseleave', mouseUp);
container.addEventListener('mousemove', mouseMove);

const toggleScrollClasses = (flag) => {
    container.classList.toggle('smooth-scroll', flag);
};

const mouseIsDown = (e) => {
    clearTimeout(snappingTimeout);
    toggleScrollClasses(false);
    isDown = true;
    startX = e.clientX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    const currentItem = container.querySelector('.item[data-active]');
    isDown && currentItem.style.setProperty('cursor', 'grabbing');
};

const mouseUp = (e) => {
    if (isDown) {
        isDown = false;

        // Get the current scroll left.
        const oldScrollLeft = container.scrollLeft;
        toggleScrollClasses(true);

        // By adding the class, it will automatically snap and we can work out the new container scrollLeft
        const newScrollLeft = container.scrollLeft;
        toggleScrollClasses(false);

        // Now we'll move the container BACK to the old left position before animating it back!
        container.scrollLeft = oldScrollLeft;
        container.scrollTo({left: newScrollLeft, behavior: 'smooth'});

        const currentItem = container.querySelector('.item[data-active]');
        currentItem.style.setProperty('cursor', 'grab');

        snappingTimeout = setTimeout(() => {
            if (!isDown) {
                toggleScrollClasses(true);
            }
        }, 400);
    }
};

const mouseMove = (e) => {
    if (isDown) {
        e.preventDefault();
        const x = e.clientX - container.offsetLeft;
        const walkX = (x - startX) * DRAG_SPEED;
        container.scrollTo({left: scrollLeft - walkX});
    }
};

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
            entry.target.setAttribute('data-active', 'true');
        } else {
            entry.target.removeAttribute('data-active');
            entry.target.style.setProperty('cursor', 'grab');
        }
    });
};

const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: [0.5],
});
items.forEach((item) => observer.observe(item));
