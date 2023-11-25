// eslint-disable-next-line import/named
import {expect, test} from 'vitest';

import {getQueryParam} from './get-query-param';
import {setQueryParam} from './set-query-param';

const TEST_DEFAULT_VALUES = {
    key: 'test',
    value: 1,
};

test('is set query params works?', () => {
    setQueryParam(TEST_DEFAULT_VALUES);

    const gettedValue = getQueryParam({
        key: TEST_DEFAULT_VALUES.key,
        typeConverter: parseInt,
    });

    expect(gettedValue).toBe(1);
});
