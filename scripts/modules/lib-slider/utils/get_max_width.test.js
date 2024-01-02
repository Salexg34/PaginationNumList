// eslint-disable-next-line import/named
import {expect, test} from 'vitest';

import {getMaxWidth} from './get_max_width';

const TEST_CARDS_SETUP = {
    width: 270,
    gap: 30,
    slidesCount: 6,
    cardsToShow: 3,
};

test('Is Max Width Fn valid?', () => {
    expect(getMaxWidth(TEST_CARDS_SETUP)).toBe(900);
});

test('Is Null posible?', () => {
    expect(getMaxWidth(TEST_CARDS_SETUP)).toBeGreaterThan(0);
});

test('Is Max Width Fn return valid type?', () => {
    expect(getMaxWidth(TEST_CARDS_SETUP)).toBeTypeOf('number');
});
