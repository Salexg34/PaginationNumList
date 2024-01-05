import generalConsts from '../../../consts/general';
import {getQueryParam} from '../../../utils/get-query-param';

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
