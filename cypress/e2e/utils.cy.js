/* eslint-disable no-undef */
describe('utils spec', () => {
    it('is setQueryParams works as well?', () => {
        cy.visit('http://localhost:5173/');
        const parentEl = cy.get('#quantitySelect');
        parentEl.select('5');
        cy.url().should('include', 'pageSize=5');
        cy.url().should('include', 'indexPage=1');
        parentEl.select('15');
        cy.url().should('include', 'pageSize=15');
    });

    it('pagination dot is work', () => {
        cy.visit('http://localhost:5173/');
        const dotPagination = cy.get('.dot[data-slide-index="5"]');
        const sliderCards = cy.get('.slider__cards[data-slide-index="5"]');
        sliderCards.should('be.not.visible');
        dotPagination.click()
            .then(() => {

            });
        dotPagination.should('have.class', 'active');
        sliderCards.should('have.class', 'active');
    });
});
