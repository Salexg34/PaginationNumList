export const renderCards = (cardsArr) => {
    const VISIBLE_RANGE = 10;
    const slider = document.querySelector('.slider');
    const paginationPage = Math.ceil(cardsArr.length / VISIBLE_RANGE);
    const sliderPaginationNum = document.createElement('div');
    sliderPaginationNum.classList.add('slider__pagination-num');
    slider.appendChild(sliderPaginationNum);

    function updateSlider (startindex) {
        const sliderWrapper = document.querySelector('.slider__wrapper');
        sliderWrapper.innerHTML = '';
        const endIndex = Math.min(startindex + VISIBLE_RANGE, cardsArr.length);
        for (let i = startindex; i < endIndex; i++) {
            const cardElement = cardsArr[i];
            sliderWrapper.appendChild(cardElement);
        }
    }

    function pageQueryParams (i) {
        const startindex = (i - 1) * VISIBLE_RANGE;
        updateSlider(startindex);
        const queryPageIndex = new URL(window.location.href);
        queryPageIndex.searchParams.set('indexPage', i);
        window.history.pushState({indexPage: i}, '', queryPageIndex);
    }

    for (let i = 1; i <= paginationPage; i++) {
        const paginationNum = document.createElement('div');
        paginationNum.textContent = i;
        paginationNum.classList.add('pagination__num');
        const currentPage = new URL(window.location.href).searchParams.get('indexPage');
        console.log(currentPage);
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
        updateSlider(indexPage * VISIBLE_RANGE - VISIBLE_RANGE);
    } else {
        updateSlider(0);
    }

};
