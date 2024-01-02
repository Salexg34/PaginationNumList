// eslint-disable-next-line import/named
import {test, expect} from 'vitest';

import {findElements} from '../../utils/find_elements';
import {getNamedQueryParams} from '../../utils/get-named-query-params';
import {setQueryParam} from '../../utils/set-query-param';
import getArrayCards from '../generate-slides/index';

import {renderCardsToDOM} from './utils';

test('проверка renderCardsToDOM', () => {
    const startIndex = 0;
    const {arrayCards} = getArrayCards();
    // console.log(arrayCards, 3333);
    
    setQueryParam({key: 'pageSize', value: 9});
    renderCardsToDOM(startIndex, arrayCards);
    
    const {pageSize: currentVisibleRange} = getNamedQueryParams();
    const {sliderWrapper, slidesCount} = findElements();

    // console.log(slidesCount, sliderWrapper.children.length, currentVisibleRange);
    expect(sliderWrapper.children.length).toBe(currentVisibleRange);
    expect(sliderWrapper.children.length).toBe(slidesCount);
    
});
