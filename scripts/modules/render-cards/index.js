import {findElements} from '../../utils/find_elements.js';
import {getNamedQueryParams} from '../../utils/get-named-query-params.js';
import {setQueryParam} from '../../utils/set-query-param.js';
import {addPaginationElements} from '../render-pagination/index.js';

import {urlChangeEvent} from './consts.js';
import {getPaginationPagesCount} from './utils.js';

export const renderCards = (cardsArr) => {
    /** 
     * Получаем значение visibleRange через функцию getQueryParam
    */
    const {pageSize: visibleRange} = getNamedQueryParams();

    const {sliderWrapper} = findElements();

    function pageQueryParams (i) {
        const startIndex = (i - 1) * visibleRange;
        renderCards(startIndex);
        
        setQueryParam({key: 'indexPage', value: i});
        sliderWrapper.dispatchEvent(urlChangeEvent);
    }
    
    function renderCards (startIndex) {
        const {pageSize: currentVisibleRange} = getNamedQueryParams();
        sliderWrapper.innerHTML = '';

        const endIndex = Math.min(startIndex + currentVisibleRange, cardsArr.length);
        for (let i = startIndex; i < endIndex; i++) {
            const cardElement = cardsArr[i];
            sliderWrapper.appendChild(cardElement);
        }
    }

    addPaginationElements({
        paginationPagesCount: getPaginationPagesCount({
            cardsCount: cardsArr.length,
            visibleRange,
        }),
        pageQueryParams,
    });

    if (visibleRange) {
        renderCards(visibleRange * visibleRange - visibleRange);
    } else {
        renderCards(0);
    }
};
