describe('Happy Path', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('Does render the heading', function() {
        cy.visit('http://localhost:3000/');
        cy.contains('Open Orders');
    });
});
