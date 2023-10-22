// export default function choiceSlider({ check, currentDot, slideIndex, offset, width, gap, sliderWrapper, maxWidth, buttonPrev, buttonNext }) {
//     currentDot = slideIndex;

//     const activeElements = document.querySelectorAll('div.active');
//     activeElements.forEach(function (item) {
//         item.classList.remove('active');
//     });

//     const currentElements = document.querySelectorAll(`[data-slide-index='${currentDot}']`);
//     currentElements.forEach(function (item) {
//         item.classList.add('active');
//     });

//     offset = -((width + gap) * currentDot) + (width + gap);
//     sliderWrapper.style.transform = `translateX(${offset}px)`;
//     check({ offset, maxWidth, buttonPrev, sliderWrapper, buttonNext });
// };

export default function choiceSlider({ check, currentDot, slideIndex, offset, width, gap, sliderWrapper, maxWidth, buttonPrev, buttonNext }) {
    // currentDot = slideIndex;

    // const activeElements = document.querySelectorAll('div.active');
    // activeElements.forEach(function (item) {
    //     item.classList.remove('active');
    // });

    // const currentElements = document.querySelectorAll(`[data-slide-index='${currentDot}']`);
    // currentElements.forEach(function (item) {
    //     item.classList.add('active');
    // });

    // offset = -((width + gap) * currentDot) + (width + gap);
    // sliderWrapper.style.transform = `translateX(${offset}px)`;
    // check({ offset, maxWidth, buttonPrev, sliderWrapper, buttonNext });
};