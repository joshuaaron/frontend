import './style.css';

const wrapWithSpan = (text, index) => {
    const wrapper = document.createElement('div');
    const node = document.createElement('span');
    wrapper.appendChild(node);
    node.textContent = text;
    text !== ' ' && node.style.setProperty('--i', index);
    return wrapper;
};

const splitByLetter = (text) => [...text].map(wrapWithSpan);
document
    .querySelectorAll('button')
    ?.forEach((el) => el.replaceChildren(...splitByLetter(el.textContent)));
