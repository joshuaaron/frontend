import './style.css';

const buildThresholds = (steps) => {
    const thresholds = [0];
    for (let i = 1.0; i <= steps; i++) {
        let ratio = i / steps;
        thresholds.push(ratio);
    }
    return thresholds;
};

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.setProperty('--opacity', entry.intersectionRatio);
                if (ratio >= 1) {
                    observer.unobserve(entry.target);
                }
            }
        });
    },
    {
        root: null,
        rootMargin: '0px',
        threshold: buildThresholds(100),
    }
);

const images = [...document.querySelectorAll('img')];
images.forEach((img) => {
    observer.observe(img);
});
