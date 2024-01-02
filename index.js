/**
 * Модуль initSlider
 * @module scripts/lib_slider
 */
import generateSlides from './scripts/modules/generate-slides/index.js';
import {pageSizeSelect} from './scripts/modules/init-page-size-select/index.js';
import {initSlider} from './scripts/modules/lib-slider/index.js';
import {renderCards} from './scripts/modules/render-cards/index.js';

const {arrayCards} = generateSlides();
renderCards(arrayCards);
initSlider(1, 200, 40, 3);
pageSizeSelect();
/**
 * вешаем обработчик события на изменения значения из выпадающего списка
*/
document.addEventListener('sizeChangeEvent', () => {
    renderCards(arrayCards);
});
