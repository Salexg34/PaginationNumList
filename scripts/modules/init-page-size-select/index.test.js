import {test, expect} from 'vitest';

import generalConsts from '../../consts/general';

import {pageSizeSelect} from '.';

test('Инициализация страницы с заданным значением', () => {
    const defaultValue = 10;
    const selectSlide = document.getElementById('quantitySelect');
    pageSizeSelect();

    expect(selectSlide.value).not.toBe(defaultValue);
    expect(selectSlide.value).toBe(generalConsts.DEFAULT_PAGE_SIZE.toString());
});
