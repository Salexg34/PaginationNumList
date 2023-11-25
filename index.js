/**
 * Модуль initSlider
 * @module scripts/lib_slider
 */
import {initSlider} from './scripts/lib_slider.js';
import {renderCards} from './scripts/modules/render-cards/index.js';
import {arrayCards} from './scripts/utils/generate_slides.js';
import {initPageSizeSelect} from './scripts/utils/get-quantity-selection-slide.js';

renderCards(arrayCards);
initSlider(1, 200, 40, 3);
initPageSizeSelect();
/**
 * вешаем обработчик события на изменения значения из выпадающего списка
*/
document.addEventListener('sizeChangeEvent', () => {
    renderCards(arrayCards);
});
