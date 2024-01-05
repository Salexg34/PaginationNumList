import {findElements} from '../../utils/find_elements';
import {getNamedQueryParams} from '../../utils/get-named-query-params';

export const getPaginationPagesCount = ({cardsCount, visibleRange}) => {
    return Math.ceil(cardsCount / visibleRange);
};
export function renderCardsToDOM (startIndex, cardsArr) {
    const {sliderWrapper} = findElements();

    const {pageSize: currentVisibleRange} = getNamedQueryParams();
    sliderWrapper.innerHTML = '';
    const endIndex = Math.min(startIndex + currentVisibleRange, cardsArr.length);
    for (let i = startIndex; i < endIndex; i++) {
        const cardElement = cardsArr[i];
        sliderWrapper.appendChild(cardElement);
    }
};
