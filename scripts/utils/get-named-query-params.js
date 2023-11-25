import generalConsts from '../consts/general.js';

import {getQueryParam} from './get-query-param.js';

export const getNamedQueryParams = () => {
    /** 
     * Получаем значение pageSize через функцию getQueryParam
    */
    const pageSize = getQueryParam({
        key: 'pageSize',
        defaultValue: generalConsts.DEFAULT_PAGE_SIZE,
        typeConverter: parseInt,
    });
    const indexPage = getQueryParam({
        key: 'indexPage',
        defaultValue: generalConsts.DEFAULT_PAGE_SIZE,
        typeConverter: parseInt,
    });
    
    return {pageSize, indexPage};
};
