import {test, expect} from 'vitest';

import {addIndexElementToCard} from './utils';

test('Проверка соответствия индекса', () => {
    const card = document.createElement('div');
    
    addIndexElementToCard(card, 1);
  
    const addElement = card.querySelector('.default_index');
    const addedElements = card.querySelectorAll('.default_index');
    
    expect(addElement.textContent).toBe('1');
    expect(card.getAttribute('data-slide-index')).toBe('1');
    expect(addedElements.length).toBe(1);
});
