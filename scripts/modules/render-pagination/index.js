import generalConsts from '../../consts/general';
import {findElements} from '../../utils/find_elements';
import {getNamedQueryParams} from '../../utils/get-named-query-params';

import {MAX_VISIBLE_PAGE} from './consts';
import {addPaginationWrapper, setActivePage, createPaginationNum} from './utils';

export const addPaginationElements = ({
    paginationPagesCount,
    pageQueryParams,
}) => {
    const sliderPaginationWrapper = addPaginationWrapper();

    const preapreToRerender = () => {
        sliderPaginationWrapper.innerHTML = '';
        sliderWrapper.removeEventListener(generalConsts.URL_CHANGE_NAME, preapreToRerender);

        addPaginationElements({
            paginationPagesCount,
            pageQueryParams,
        });
    };

    const {sliderWrapper} = findElements();
    sliderWrapper.addEventListener(generalConsts.URL_CHANGE_NAME, preapreToRerender);

    const {indexPage: currentPage} = getNamedQueryParams();

    let startPaginationPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGE / 2));
    let endPaginationPage = Math.min(startPaginationPage + MAX_VISIBLE_PAGE - 1, paginationPagesCount);

    //определяем нужен ли разделитель в начале пагинации
    if (startPaginationPage > 1) {
        const paginationNumStart = createPaginationNum(
            1,
            () => {
                pageQueryParams(1);
                setActivePage(1);
            },
            'pagination__num',
        );

        sliderPaginationWrapper.appendChild(paginationNumStart);

        if (startPaginationPage > 2) {
            const paginationGapStart = createPaginationNum(
                '<...',
                () => {
                    pageQueryParams(endPaginationPage - MAX_VISIBLE_PAGE + 1);
                    setActivePage(endPaginationPage - MAX_VISIBLE_PAGE + 1);
                },
                'pagination__gap',
            );

            sliderPaginationWrapper.appendChild(paginationGapStart);
        };
    };

    console.log(startPaginationPage, 'SPP');
    console.log(endPaginationPage, 'EPP');

    // Создаем видимые номера страниц
    for (let i = startPaginationPage; i <= endPaginationPage; i++) {
        const paginationNum = createPaginationNum(
            i,
            () => {
                pageQueryParams(i);
                setActivePage(i);
            },
            'pagination__num',
        );

        if (currentPage == i) {
            paginationNum.classList.add('active');
        };

        sliderPaginationWrapper.appendChild(paginationNum);
    };

    // создаем разделитель в конце
    if (endPaginationPage < paginationPagesCount) {
        const paginationGapEnd = createPaginationNum(
            '...>',
            () => {
                pageQueryParams(endPaginationPage);
                setActivePage(endPaginationPage);
                // updatePagination(endPaginationPage - 2, endPaginationPage + 2);
                // window.location.reload();
            },
            'pagination__gap',
        );

        sliderPaginationWrapper.appendChild(paginationGapEnd);

        const paginationNumEnd = createPaginationNum(
            paginationPagesCount,
            () => {
                pageQueryParams(paginationPagesCount);
                setActivePage(paginationPagesCount);
            },
            'pagination__num',
        );

        sliderPaginationWrapper.appendChild(paginationNumEnd);
    };
};

