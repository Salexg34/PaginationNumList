
// export const renderCards = (cardsArr) => {
//     const sliderWrapper = document.querySelector('.slider__wrapper');
//     cardsArr.forEach(element => {
//         sliderWrapper.appendChild(element);
//     });
// } 

import { slider } from "../slider_script.js";
import { sliderWrapper } from "./generate_slides.js";

export const renderCards = (cardsArr) => {
    const VISIBLE_RANGE = 10;
    const paginationPage = Math.ceil(cardsArr.length / VISIBLE_RANGE);
    const sliderPaginationNum = document.createElement('div');
   
    sliderPaginationNum.classList.add('slider__pagination-num');
    slider.appendChild(sliderPaginationNum)

    const url = new URLSearchParams(window.location.search);
    // console.log(url)
    // debugger
    const indexPage = url.get('indexPage');
    // console.log(indexPage)
    // debugger

    if (indexPage) {
        // debugger
        updateSlider(indexPage * VISIBLE_RANGE - VISIBLE_RANGE) // не нравится такое решение
        // debugger
    } else {
        updateSlider(0);
    }

    function updateSlider(startindex) {
        sliderWrapper.innerHTML = '';
        const endIndex = Math.min(startindex + VISIBLE_RANGE, cardsArr.length);
        for (let i = startindex; i < endIndex; i++) {
            const cardElement = cardsArr[i];
            sliderWrapper.appendChild(cardElement);
        }
    }

    function pageQueryParams(i) {
        const startindex = (i - 1) * VISIBLE_RANGE;
        // console.log(startindex)
        // debugger
        updateSlider(startindex);
        // console.log(i);
        // debugger
        const queryPageIndex = new URL(window.location.href);
        queryPageIndex.searchParams.set('indexPage', i);
        // console.log(queryPageIndex);
        // debugger
        const updateQueryPageIndex = queryPageIndex.toString();
        window.history.replaceState({ indexPage: i }, '', updateQueryPageIndex);
        // debugger
        // window.addEventListener('unload', () => {
        //     
        // })

    }

    for (let i = 1; i <= paginationPage; i++) {
        const paginationNum = document.createElement('div');
        paginationNum.textContent = i;
        paginationNum.classList.add('pagination__num');

        paginationNum.addEventListener('click', () => {
            // const startindex = (i - 1) * VISIBLE_RANGE;
            // updateSlider(startindex);
            // debugger
            pageQueryParams(i)

        })
        // debugger
        sliderPaginationNum.appendChild(paginationNum);

    }
    
}
