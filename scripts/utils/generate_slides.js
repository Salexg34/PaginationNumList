const addIndexElementToCard = (card, index) => {
    const defaultIndexEl = document.createElement('div');
    defaultIndexEl.textContent = index;
    defaultIndexEl.classList.add('default_index');
    card.appendChild(defaultIndexEl);
};

const createSlider = () => {
    const ELEMENTS_COUNT = 96;
    const arrayCards = [];
    const defaultCard = document.querySelector('.slider__cards');

    function createSlide (index) {
        const clonedCard = defaultCard.cloneNode(true);
        addIndexElementToCard(clonedCard, index);
        arrayCards.push(clonedCard);
    }
    const generateSlides = () => {
        for (let i = 1; i <= ELEMENTS_COUNT; i++) {
            createSlide(i);

        }
        const sliderWrapper = document.querySelector('.slider__wrapper');
        sliderWrapper.removeChild(defaultCard);
        return {
            arrayCards,
            sliderWrapper,
        };

    };

    return generateSlides;

};

const generatorSlider = createSlider();
const dataGeneratorSlider = generatorSlider();
export const arrayCards = dataGeneratorSlider.arrayCards;
export const sliderWrapper = dataGeneratorSlider.sliderWrapper;
