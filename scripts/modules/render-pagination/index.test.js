// eslint-disable-next-line import/named
import {test, expect} from 'vitest';

import {setQueryParam} from '../../utils/set-query-param';
import {renderCardsToDOM} from '../render-cards/utils';

import {addPaginationElements} from '.';
import {addPaginationWrapper} from './utils';

const classEl = 'slider__pagination-num';

test('проверка addPaginationWrapper', () => {
    const sliderPaginationNum = addPaginationWrapper();

    const gettedElement = document.querySelector(`.${classEl}`);

    expect(gettedElement).toBeInstanceOf(window.Element);
    expect(sliderPaginationNum.classList.contains(classEl)).toBe(true);
    expect(sliderPaginationNum.children.length === 0).toBe(true);
});

function pageQueryParams (i) {
    const startIndex = 9;
    renderCardsToDOM(startIndex);
    setQueryParam({key: 'indexPage', value: i});
    // sliderWrapper.dispatchEvent(urlChangeEvent);
}

test('test added elements to DOM', () => {
    const count = 30;
    addPaginationElements({
        paginationPagesCount: count,
        pageQueryParams,
    });
    const sliderPaginationNum = document.querySelector(`.${classEl}`);
    const elementsFromDOM = document.querySelectorAll('.pagination__num');

    expect(sliderPaginationNum.children.length).toBe(count);
    expect(elementsFromDOM.length).toBe(count);
    for (let elIndex = 0; elIndex < elementsFromDOM.length; elIndex++) {
        const expectedValue = elIndex + 1;
        expect(Number(elementsFromDOM[elIndex].textContent)).toBe(expectedValue);
    }
});

test('is pagination num click active valid', () => {
    let activeClassCount = document.querySelectorAll('.pagination__num.active').length;
    expect(activeClassCount).toBe(1);
    const btn = document.querySelector('.pagination__num');
    btn.click();
    activeClassCount = document.querySelectorAll('.pagination__num.active').length;

    expect(activeClassCount).toBe(1);
    expect(btn.classList.contains('active')).toBe(true);
});

test('проверка передачи queryParam', () => {
    
});

/**
 * Test case:
 * 1. Если элементов больше 6, то:
 *    - проверяем наличие класса разрыва пагинации
 * 2. Проверяем, что только один элемент разрыва при условиях:
 *    - если выбран элемент 1
 *    - если выбран последний элемент
 *    - если выбран n + 3 элемент от начала пагинцаии
 *    - если выбран n - 3 элемент от конца пагинцаии
 * 3. При клике на разрыв пагинации:
 *    - правый разврыв n + 5 страниц пагинации
 *    - левый разврыв n - 5 страниц пагинации
 *    
 * 4. Видимые элементы
 *    - при клике на видимую страницу показываем n + 2 страницы до разрыва (справа и слева)
 *    
 * 
 */
function injectPaginationElements (count) {
    addPaginationElements({
        paginationPagesCount: count, 
        pageQueryParams,
    });
    const elementsFromDOM = document.querySelectorAll('.pagination__num');
    return elementsFromDOM;
}
test('проверка наличия класса разрыва пагинации', () => {
    const elementsFromDOM = injectPaginationElements(30);
    if (elementsFromDOM.length >= 6) {
        const paginationGap = document.querySelectorAll('.pagination__gap');
        expect(paginationGap.length).toBeGreaterThanOrEqual(1);
    };
});

test('Проверка наличия разрыва при выбранном 1 элементе', () => {
    injectPaginationElements(30);
    const paginationGap = document.querySelectorAll('.pagination__gap');
    expect(paginationGap.length).toBe(1);
});

test('Проверка наличия разрыва при выбранном последнем элементе', () => {
    const elementsFromDOM = injectPaginationElements(30);
    elementsFromDOM[elementsFromDOM.length - 1].click();
    const paginationGap = document.querySelectorAll('.pagination__gap');
    expect(paginationGap.length).toBe(1);
});

test('Проверка наличия разрыва при n + 3 элемента', () => {
    const elementsFromDOM = injectPaginationElements(30);
    elementsFromDOM[3].click();
    const paginationGap = document.querySelectorAll('.pagination__gap');
    expect(paginationGap.length).toBe(1);
});

test('Проверка наличия разрыва при n - 3 элемента', () => {
    const elementsFromDOM = injectPaginationElements(30);
    const countLength = (elementsFromDOM.length - 1) - 3;
    elementsFromDOM[countLength].click();
    const paginationGap = document.querySelectorAll('.pagination__gap');
    expect(paginationGap.length).toBe(1);
});

test('При клике на разрыв пагинации смещается n + 5 элементов', () => {
    const elementsFromDOM = injectPaginationElements(30);
    const countLength = 5;
    elementsFromDOM[countLength].click();
    const paginationGap = document.querySelectorAll('.pagination__gap');
    paginationGap[paginationGap.length - 1].click();
    expect(elementsFromDOM[countLength + 5].classList.contains('active')).toBe(true);
});

test('При клике на разрыв пагинации смещается n - 5 элементов', () => {
    const elementsFromDOM = injectPaginationElements(30);
    const countLength = 5;
    elementsFromDOM[countLength].click();
    const paginationGap = document.querySelectorAll('.pagination__gap');
    paginationGap[0].click();
    expect(elementsFromDOM[countLength - 5].classList.contains('active')).toBe(true);
});

test('При клике на видимую страницу диапозон элементов меняется на +2', () => {
    const elementsFromDOM = injectPaginationElements(30);
    const countLength = 5;
    elementsFromDOM[countLength].click();
    expect(elementsFromDOM[countLength].classList.contains('active')).toBe(true);
});