import {addPaginationWrapper} from './utils.js';

export const addPaginationElements = ({
    paginationPagesCount, 
    pageQueryParams,
}) => { 
    const sliderPaginationWrapper = addPaginationWrapper();

    for (let i = 1; i <= paginationPagesCount; i++) {
        const paginationNum = document.createElement('div');

        paginationNum.textContent = i;
        paginationNum.classList.add('pagination__num');
        sliderPaginationWrapper.appendChild(paginationNum);

        const currentPage = new URL(window.location.href).searchParams.get('indexPage');
        if (i == currentPage || (!currentPage && i == 1)) {
            paginationNum.classList.add('active');
        }

        paginationNum.addEventListener('click', () => {
            pageQueryParams(i);
            document.querySelector('.pagination__num.active').classList.remove('active');
            paginationNum.classList.add('active');

        });
        sliderPaginationWrapper.appendChild(paginationNum);
    }
};
