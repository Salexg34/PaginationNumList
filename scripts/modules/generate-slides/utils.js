export const addIndexElementToCard = (card, index) => {
    const defaultIndexEl = document.createElement('div');
    defaultIndexEl.textContent = index;
    defaultIndexEl.classList.add('default_index');
    card.setAttribute('data-slide-index', index);
    card.appendChild(defaultIndexEl);
};
