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
    // for (let elIndex in elementsFromDOM) {
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
