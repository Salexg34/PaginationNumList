import {findElements} from '../../utils/find_elements';
import {getNamedQueryParams} from '../../utils/get-named-query-params';

export const addPaginationWrapper = () => {
    const {slider} = findElements();
    let sliderPaginationNum = document.querySelector('.slider__pagination-num');
    /**
     * проверка на отсутствие / наличие пагинации
     * при ее отсутствии - добавляем
    */
    if (!sliderPaginationNum) {
        sliderPaginationNum = document.createElement('div');
        sliderPaginationNum.classList.add('slider__pagination-num');
        slider.appendChild(sliderPaginationNum);
    }
    /**
     * делаем проверку на наличие контента в коллекции дочерних элементов
     * sliderPaginationNum, если он есть, то очищаем его
    */
    if (sliderPaginationNum.children) {
        sliderPaginationNum.innerHTML = '';
    }

    return sliderPaginationNum;
};

export const setActivePage = (pageNumber) => {
    const activePage = document.querySelector('.pagination__num.active');
    if (activePage) {
        activePage.classList.remove('active');
    }

    const updateActivePage = document.querySelector(`.pagination__num[data-page="${pageNumber}"]`);
    if (updateActivePage) {
        updateActivePage.classList.add('active');
    }
};

export const createPaginationNum = (pageNumber, onClick, elementClass) => {
    const paginationNum = document.createElement('div');

    paginationNum.textContent = pageNumber;
    paginationNum.classList.add(elementClass);
    paginationNum.setAttribute('data-page', pageNumber);
    paginationNum.addEventListener('click', onClick);

    return paginationNum;
};

export const createPagination = (start, end) => {
    const {indexPage: currentPage} = getNamedQueryParams();
    const sliderPaginationWrapper = addPaginationWrapper();
    for (let i = start; i <= end; i++) {
        let paginationNum = createPaginationNum(
            i,
            () => {
                // pageQueryParams(i);
                setActivePage(i);
            },
            'pagination__num',
        );
        if (currentPage == i) {
            paginationNum.classList.add('active');
        };
        sliderPaginationWrapper.appendChild(paginationNum);
    }
};
