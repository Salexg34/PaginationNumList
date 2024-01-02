import {setQueryParam} from '../../utils/set-query-param.js';

import {sizeChangeEvent} from './consts.js';

//Создаем кастомный обработчик событий
export const handleSelectChange = () => {
    const selectSlide = document.getElementById('quantitySelect');
    const selectedSlideValue = parseInt(selectSlide.options[selectSlide.selectedIndex].value);
    setQueryParam({key: 'pageSize', value: selectedSlideValue});
    setQueryParam({key: 'indexPage', value: 1});
    selectSlide.options[selectSlide.selectedIndex].setAttribute('selected', 'selected');

    /**
     * Передаем в значение page ранее созданного обработчика значение
     * получаемое из выбранного в выпадающем списке
     */
    sizeChangeEvent.pageSize = selectedSlideValue;

    //инициируем запуск события
    document.dispatchEvent(sizeChangeEvent);

};
