import generalConsts from './consts/general.js';
import {changeSliderProperties} from './utils/change_slider_properties.js';
import {check} from './utils/check_offset.js';
import {findElements} from './utils/find_elements.js';
import {getDotNumberWithPage} from './utils/get-dot-number-with-page.js';
import {getMaxWidth} from './utils/get_max_width.js';
import {paginationSlider} from './utils/pagination_slider.js';

/**
 * InitSlider
 * @param {number} scroll - Количество прокручиваемых слайдов 
 * @param {number} width - Ширина слайда
 * @param {number} gap - отступ между слайдами
 * @param {number} toShow - Количество вывода слайдов к показу
 */
export const initSlider = function (scroll, width, gap, toShow) {
    const {
        slidesCount,
        buttonNext,
        buttonPrev,
        sliderWrapper,
        pagination,
    } = findElements();

    let maxWidth = getMaxWidth({width, gap, slidesCount, cardsToShow: toShow});

    sliderWrapper.addEventListener(generalConsts.URL_CHANGE_NAME, () => {
        choiceSlider(1);
    });

    // вешаем обработчик события на изменения значения из выпадающего списка
    document.addEventListener('sizeChangeEvent', (event) => {
        paginationSlider({slidesCount: event.pageSize, pagination, choiceSlider});
        maxWidth = getMaxWidth({width, gap, slidesCount: event.pageSize, cardsToShow: toShow});
        choiceSlider(1);
    });
    
    if (toShow <= scroll) {
        scroll = toShow;
    };

    changeSliderProperties({width, gap, toShow});

    let offset = 0;
    let currentDot = 1;

    check({offset, maxWidth, buttonPrev, sliderWrapper, buttonNext});

    buttonNext.addEventListener('click', function () {
        turnSlides('rigth');
    });

    buttonPrev.addEventListener('click', function () {
        turnSlides('left');

    });

    function turnSlides (side) {
        if (side == 'left') {
            currentDot -= 1;
        } else if (side == 'rigth') {
            currentDot += 1;
        }

        choiceSlider(currentDot);

    };    

    paginationSlider({slidesCount, pagination, choiceSlider});

    function choiceSlider (slideIndex) {
        currentDot = slideIndex;
        
        const activeElements = document.querySelectorAll('.dot.active');
        activeElements.forEach(function (item) {
            item.classList.remove('active');
        });

        const activeSliderElements = document.querySelectorAll('.slider__cards.active');
        activeSliderElements.forEach(function (item) {
            item.classList.remove('active');
        });

        const currentElements = document.querySelectorAll(`
            [data-slide-index = '${getDotNumberWithPage(currentDot)}']
        `);
        console.log(currentDot);
        
        const currentDotElements = document.querySelectorAll(`
            [data-slide-index = '${currentDot}']
        `);
        console.log(currentDot);
        
        const elementsToActivate = [...currentElements, ...currentDotElements];
        elementsToActivate.forEach(function (item) {
            item.classList.add('active');
        });
        
        offset = -((width + gap) * currentDot) + (width + gap);
        sliderWrapper.style.transform = `translateX(${offset}px)`;
        check({offset, maxWidth, buttonPrev, sliderWrapper, buttonNext});
        console.log(maxWidth);
    }
};
