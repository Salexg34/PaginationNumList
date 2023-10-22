/**
 * Модуль getMaxWidth
 * @module utils/get_max_width
 * 
 * Рассчитывает и возвращает максимальное смещение слайдера на основе переданных параметров.
 *
 * @param {object} getMaxWidth - Объект для рассчета максимального смещения слайдера.
 * @param {number} getMaxWidth.width - Ширина каждой карточки в пикселях.
 * @param {number} getMaxWidth.gap - Промежуток между карточками в пикселях.
 * @param {number} getMaxWidth.slidesCount - Общее количество слайдов в слайдере.
 * @param {number} getMaxWidth.cardsToShow - Количество карточек для отображения одновременно.
 * @returns {number} Максимальное смещение слайдера (в пикселях) до последнего слайда.
 */
export const getMaxWidth = function ({width, gap, slidesCount, cardsToShow}) {
    return parseInt((width + gap) * (slidesCount - cardsToShow));
};

// export const getFullCardsWidth = function ({width, gap, scroll}) {
//     return parseInt((width + gap) * scroll);
// };