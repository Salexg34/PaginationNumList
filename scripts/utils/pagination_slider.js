/* eslint-disable max-len */
/**
 * Модуль paginationSlider
 * @module utils/pagination_slider
 * 
 * Создает пагинацию для слайдера и назначает обработчики событий для переключения слайдов.
 *
 * @param {object} paginationSlider - Объект с параметрами для создания пагинации и обработчиков событий.
 * @param {number} paginationSlider.slidesCount - Общее количество слайдов в слайдере.
 * @param {HTMLElement} paginationSlider.pagination - Ссылка на элемент пагинации слайдера, куда будут добавлены точки для навигации.
 * @param {function} paginationSlider.choiceSlider - Функция для выбора слайда по его индексу.
 * @returns {void}
 */

import {getDotNumberWithPage} from "./get-dot-number-with-page.js";

export const paginationSlider = function paginationSlider ({slidesCount, pagination, choiceSlider}) {
    pagination.innerHTML = '';
    
    console.log(slidesCount, 'paginationSlider');
    for (let i = 1; i < slidesCount + 1; i++) {
        const paginationDot = document.createElement('div');
        paginationDot.classList.add('dot');
        paginationDot.setAttribute('data-slide-index', i);
        paginationDot.innerHTML = '<img src="/img/slider/paginationDotActive.svg">';
        pagination.appendChild(paginationDot);

        if (i == 1) { // после обновления страницы активный слайдер только с индексом 1
            console.log(i);
            paginationDot.classList.add('active');
            document.querySelector(`
                [data-slide-index = '${getDotNumberWithPage(i)}']
            `).classList.add('active');

        }

        paginationDot.addEventListener('click', function () {
            choiceSlider(i);
        });
    };
};
