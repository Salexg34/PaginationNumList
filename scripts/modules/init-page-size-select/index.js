import generalConsts from '../../consts/general';
import {getQueryParam} from '../../utils/get-query-param';

import {handleSelectChange} from './utils';

export const pageSizeSelect = () => {
    const selectSlide = document.getElementById('quantitySelect');

    selectSlide.addEventListener('change', handleSelectChange);
    const initialPageSize = getQueryParam({
        key: 'pageSize',
        defaultValue: generalConsts.DEFAULT_PAGE_SIZE,
        typeConverter: parseInt,
    });

    const optionToSelect = selectSlide.querySelector(`option[value = '${initialPageSize}']`);
    optionToSelect.setAttribute('selected', true);
};
