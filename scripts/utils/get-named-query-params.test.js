// eslint-disable-next-line import/named
import {test, expect} from 'vitest';

import generalConsts from '../consts/general';

import {getNamedQueryParams} from './get-named-query-params';

test('getNamedQueryParam', () => {
    const {DEFAULT_PAGE_SIZE, DEFAULT_INDEX_PAGE} = generalConsts;
    const {pageSize, indexPage} = getNamedQueryParams();
    expect(pageSize).toBe(DEFAULT_PAGE_SIZE);
    expect(indexPage).toBe(DEFAULT_INDEX_PAGE);
});
