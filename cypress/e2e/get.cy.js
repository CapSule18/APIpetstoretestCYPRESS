describe ('petstore API inventory testing', () => {
    it('get inventory testing - GET', () => {
        cy.request('https://petstore.swagger.io/v2/store/inventory').as('getinventory');
        cy.get('@getinventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
    })
})