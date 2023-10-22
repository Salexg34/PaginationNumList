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
// export const paginationSlider = function paginationSlider({slidesCount, pagination, choiceSlider}) {
//     for (let i = 1; i < slidesCount - 1; i++) {
//         const paginationDot = document.createElement('div');
//         paginationDot.classList.add('dot');
//         paginationDot.setAttribute('data-slide-index', i);
//         paginationDot.innerHTML = '<img src="/img/slider/paginationDotActive.svg">';
//         pagination.appendChild(paginationDot);

//         if (i == 1) {
//             paginationDot.classList.add('active');
//             document.querySelector(`[data-slide-index = '${i}']`).classList.add('active');

//         }

//         paginationDot.addEventListener('click', function () {
//             choiceSlider(i);
//         });
//     };
// };

export const paginationSlider = function paginationSlider({slidesCount, pagination, choiceSlider}) {
    for (let i = 1; i < slidesCount - 1; i++) {
        const paginationDot = document.createElement('div');
        paginationDot.classList.add('dot');
        paginationDot.setAttribute('data-slide-index', i);
        paginationDot.innerHTML = '<img src="/img/slider/paginationDotActive.svg">';
        pagination.appendChild(paginationDot);

        if (i == 1) {
            paginationDot.classList.add('active');
            document.querySelector(`[data-slide-index = '${i}']`).classList.add('active');

        }

        paginationDot.addEventListener('click', function () {
            choiceSlider(i);
        });
    };
};