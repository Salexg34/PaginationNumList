const slidesCount = document.querySelectorAll('div.slider__cards').length;
const sliderWrapper = document.querySelector('.slider__wrapper');
const buttonNext = document.querySelector('.slider__button_next');
const buttonPrev = document.querySelector('.slider__button_prev');
export const slider = document.querySelector('.slider');

const sliderObject = {
    slidesCount,
    cardsWidth: parseInt(getComputedStyle(slider).getPropertyValue('--cards-width')),
    cardsGap: parseInt(getComputedStyle(slider).getPropertyValue('--cards-gap')),
    cardsToShow: parseInt(getComputedStyle(slider).getPropertyValue('--cards-to-show')),
    maxWidth () {
        return (this.cardsWidth + this.cardsGap) * (this.slidesCount - this.cardsToShow);
    },
    fullCardsWidth (slidesToScroll = this.cardsToShow) {
        return (this.cardsWidth + this.cardsGap) * slidesToScroll;
    },
};

let offset = 0;

checkOffset(sliderObject);

buttonNext.addEventListener('click', function () {
    turnSlides('rigth');
});

buttonPrev.addEventListener('click', function () {
    turnSlides('left');
});

function turnSlides (side) {
    if (side == 'left') {
        offset += sliderObject.fullCardsWidth();
    } else if (side == 'rigth') {
        offset -= sliderObject.fullCardsWidth();
    }

    sliderWrapper.style.transform = `translateX(${offset}px)`;
    checkOffset();
};

function checkOffset () {
    if (offset >= 0) {
        buttonPrev.setAttribute('disabled', true);
        sliderWrapper.style.transform = `translateX(${0}px)`;
        offset = 0;
    } else {
        buttonPrev.removeAttribute('disabled');
    }
    if (offset <= -sliderObject.maxWidth()) {    
        buttonNext.setAttribute('disabled', true);
        sliderWrapper.style.transform = `translateX(${-sliderObject.maxWidth()}px)`;
        offset = -sliderObject.maxWidth();
    } else {
        buttonNext.removeAttribute('disabled');
    }
};
