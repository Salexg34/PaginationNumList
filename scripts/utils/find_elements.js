 /**
 * Модуль findElements
 * @module utils/find_elements
 *
 * Находит и возвращает различные элементы слайдера.
 *
 * @returns {object} Объект, содержащий найденные элементы слайдера.
 * @property {number} slidesCount - Количество слайдов в слайдере (число).
 * @property {HTMLElement} buttonNext - Ссылка на кнопку "Следующий слайд".
 * @property {HTMLElement} buttonPrev - Ссылка на кнопку "Предыдущий слайд".
 * @property {HTMLElement} sliderWrapper - Ссылка на div слайдера.
 * @property {HTMLElement} pagination - Ссылка на элемент пагинации слайдера.
 */

export const findElements = function () {
    const slidesCount = document.querySelectorAll('div.slider__cards').length;
    const buttonNext = document.querySelector('.slider__button_next');
    const buttonPrev = document.querySelector('.slider__button_prev');
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const pagination = document.querySelector('.pagination');

    return {
        slidesCount,
        buttonNext,
        buttonPrev, 
        sliderWrapper,
        // slider,
        pagination
    }
}
