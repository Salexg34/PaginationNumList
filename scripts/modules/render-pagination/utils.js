import {findElements} from '../../utils/find_elements';

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
