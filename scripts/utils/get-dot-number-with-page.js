import generalConsts from '../consts/general.js';

import {getQueryParam} from './get-query-param.js';

export const getDotNumberWithPage = (currentDot) => {
    const indexPage = getQueryParam({
        key: 'indexPage',
        defaultValue: 1,
        typeConverter: parseInt,
    });
    const pageSize = getQueryParam({
        key: 'pageSize',
        defaultValue: generalConsts.DEFAULT_PAGE_SIZE,
        typeConverter: parseInt,
    });

    return indexPage * pageSize + currentDot - pageSize;
};
