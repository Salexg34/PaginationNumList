import {findElements} from '../../utils/find_elements.js';
import {getNamedQueryParams} from '../../utils/get-named-query-params.js';
import {setQueryParam} from '../../utils/set-query-param.js';
import {addPaginationElements} from '../render-pagination/index.js';

import {urlChangeEvent} from './consts.js';
import {getPaginationPagesCount, renderCardsToDOM} from './utils.js';

export const renderCards = (cardsArr) => {
    /** 
     * Получаем значение visibleRange через функцию getQueryParam
    */
    const {pageSize, indexPage} = getNamedQueryParams();

    const {sliderWrapper} = findElements();

    function pageQueryParams (i) {
        const startIndex = (i - 1) * pageSize;
        renderCardsToDOM(startIndex, cardsArr);
        setQueryParam({key: 'indexPage', value: i});
        sliderWrapper.dispatchEvent(urlChangeEvent);
    }

    addPaginationElements({
        paginationPagesCount: getPaginationPagesCount({
            cardsCount: cardsArr.length,
            visibleRange: pageSize,
        }),
        pageQueryParams,
    });

    if (indexPage) {
        renderCardsToDOM(indexPage * pageSize - pageSize, cardsArr);
    } else {
        renderCardsToDOM(0);
    }
};
