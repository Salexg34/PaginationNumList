
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

    function updateSlider(startindex) {
        sliderWrapper.innerHTML = '';
        const endIndex = Math.min(startindex + VISIBLE_RANGE, cardsArr.length);
        for (let i = startindex; i < endIndex; i++) {
            const cardElement = cardsArr[i];
            sliderWrapper.appendChild(cardElement);
        }
    }

    for (let i = 1; i <= paginationPage; i++) {
        const paginationNum = document.createElement('div');
        paginationNum.textContent = i;
        paginationNum.classList.add('pagination__num');
        paginationNum.addEventListener('click', () => {
            const startindex = (i - 1) * VISIBLE_RANGE;
            updateSlider(startindex);
        })

        sliderPaginationNum.appendChild(paginationNum);

    }
    updateSlider(0);

    // const visibleCardsArr = cardsArr.splice(0,10)
    // visibleCardsArr.forEach(element => {
    //     sliderWrapper.appendChild(element);
    // });

} 
