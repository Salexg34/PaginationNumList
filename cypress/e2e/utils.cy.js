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
});
