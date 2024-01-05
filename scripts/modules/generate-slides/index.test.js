import {test, expect} from 'vitest';

import {ELEMENTS_COUNT} from './consts';
import createSlider from './index';

test('Проверка длины массива и нумерации индексов', () => {
    const {arrayCards} = createSlider();

    expect(Array.isArray(arrayCards)).toBe(true);
    expect(arrayCards.length).toBe(ELEMENTS_COUNT);

    arrayCards.forEach((slide, index) => {
        const expectedIndex = index + 1;
        expect(slide.dataset.slideIndex).toBe(expectedIndex.toString());
    });
});
