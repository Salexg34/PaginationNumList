import {ELEMENTS_COUNT} from './consts';
import {addIndexElementToCard} from './utils';

const createSlider = () => {
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

    return generateSlides();

};
export default createSlider;
