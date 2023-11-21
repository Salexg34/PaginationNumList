import generalConsts from '../consts/general.js';

import {getQueryParam} from './get-query-param.js';

export const selectSlide = document.getElementById('quantitySelect');

//Создаем кастомный обработчик событий
const sizeChangeEvent = new Event('sizeChangeEvent', {
    pageSize: 10,
});

const handleSelectChange = () => {
    console.log('handleSelectChange сработала');
    const selectedSlideValue = parseInt(selectSlide.options[selectSlide.selectedIndex].value);
    const currentLocation = new URL(window.location.href);
    currentLocation.searchParams.set('pageSize', selectedSlideValue);
    currentLocation.searchParams.set('indexPage', 1);
    selectSlide.options[selectSlide.selectedIndex].setAttribute('selected', 'selected');
    window.history.pushState({}, '', currentLocation.href);
    
    //Передаем в значение page ранее созданного обработчика значение,
    // получаемое из выбранного в выпадающем списке
    sizeChangeEvent.pageSize = selectedSlideValue;
    
    //инициируем запуск события
    document.dispatchEvent(sizeChangeEvent);
   
};

selectSlide.addEventListener('change', handleSelectChange);
const initialPageSize = getQueryParam({
    key: 'pageSize',
    defaultValue: generalConsts.DEFAULT_PAGE_SIZE,
    typeConverter: parseInt,
});
const optionToSelect = selectSlide.querySelector(`option[value = '${initialPageSize}']`);
optionToSelect.setAttribute('selected', true);
