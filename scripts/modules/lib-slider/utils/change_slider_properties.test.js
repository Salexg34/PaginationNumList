// eslint-disable-next-line import/named
import {expect, test} from 'vitest';

import {changeSliderProperties} from './change_slider_properties';

const DEFUALT_VALUES = {
    width: 270,
    gap: 30,
    toShow: 3,
};

test('changeSliderProperties updates slider properties correctly', () => {
    const slider = changeSliderProperties(DEFUALT_VALUES);

    expect(slider.style.getPropertyValue('--cards-width')).toBe('270px');
    expect(slider.style.getPropertyValue('--cards-gap')).toBe('30px');
    expect(slider.style.getPropertyValue('--cards-to-show')).toBe('3');
});
