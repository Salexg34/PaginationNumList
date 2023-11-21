import generalConsts from '../consts/general.js';

import {getQueryParam} from './get-query-param.js';

const urlChangeEvent = new CustomEvent(generalConsts.URL_CHANGE_NAME);

export const renderCards = (cardsArr) => {
    // вешаем обработчик события на изменения значения из выпадающего списка
    document.addEventListener('sizeChangeEvent', () => {
        renderCards(cardsArr);
    });

    // Получаем значение visibleRange через функцию getQueryParam
    const visibleRange = getQueryParam({
        key: 'pageSize',
        defaultValue: generalConsts.DEFAULT_PAGE_SIZE,
        typeConverter: parseInt,
    });

    console.log(visibleRange);

    const slider = document.querySelector(generalConsts.SLIDER_CLASS);
    const sliderWrapper = document.querySelector(generalConsts.SLIDER_WRAPPER_CLASS);
    const paginationPage = Math.ceil(cardsArr.length / visibleRange);
    let sliderPaginationNum = document.querySelector('.slider__pagination-num');

    //проверка на отсутствие / наличие пагинации
    // при ее отсутствии - добавляем
    if (!sliderPaginationNum) {
        sliderPaginationNum = document.createElement('div');
        sliderPaginationNum.classList.add('slider__pagination-num');
        slider.appendChild(sliderPaginationNum);
    }
    
    function updateSlider (startindex) {
        // добавляем переменную текущий выбранный элемент из выпадающего списка
        const currentVisibleRange = getQueryParam({
            key: 'pageSize',
            defaultValue: generalConsts.DEFAULT_PAGE_SIZE,
            typeConverter: parseInt,
        });
        sliderWrapper.innerHTML = '';
        const endIndex = Math.min(startindex + currentVisibleRange, cardsArr.length);
        for (let i = startindex; i < endIndex; i++) {
            const cardElement = cardsArr[i];
            sliderWrapper.appendChild(cardElement);
        }
    }

    function pageQueryParams (i) {
        const startindex = (i - 1) * visibleRange;
        console.log(startindex);
        updateSlider(startindex);
        
        const queryPageIndex = new URL(window.location.href);
        queryPageIndex.searchParams.set('indexPage', i);
        window.history.pushState({indexPage: i}, '', queryPageIndex);
        sliderWrapper.dispatchEvent(urlChangeEvent);
    }
    //делаем проверку на наличие контента в коллекции дочерних элементов
    //sliderPaginationNum, если он есть, то очищаем его
    if (sliderPaginationNum.children) {
        sliderPaginationNum.innerHTML = '';
    }

    for (let i = 1; i <= paginationPage; i++) {
        const paginationNum = document.createElement('div');

        paginationNum.textContent = i;
        paginationNum.classList.add('pagination__num');
        sliderPaginationNum.appendChild(paginationNum);

        const currentPage = new URL(window.location.href).searchParams.get('indexPage');
        if (i == currentPage || (!currentPage && i == 1)) {
            paginationNum.classList.add('active');
        }

        paginationNum.addEventListener('click', () => {
            pageQueryParams(i);
            document.querySelector('.pagination__num.active').classList.remove('active');
            paginationNum.classList.add('active');

        });
        sliderPaginationNum.appendChild(paginationNum);
    }

    const url = new URLSearchParams(window.location.search);
    const indexPage = url.get('indexPage');
    if (indexPage) {
        updateSlider(indexPage * visibleRange - visibleRange);
    } else {
        updateSlider(0);
    }
};
