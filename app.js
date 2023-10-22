/**
 * Модуль initSlider
 * @module scripts/lib_slider
 */
import {initSlider} from './scripts/lib_slider.js';
import {generatorSlider} from './scripts/utils/generate_slides.js';
import { renderCards } from './scripts/utils/pagination_render.js';

const arrayCards = generatorSlider();
console.log(arrayCards);
renderCards(arrayCards);
initSlider(1, 200, 40, 5);
