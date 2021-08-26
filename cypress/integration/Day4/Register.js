describe('kumpulan test case', function () {
    before(()=>{
        cy.bukaUrl()
    })
    it('register    ', function(){
        
        cy.get('#signin2').click()
        cy.wait(1000)
        cy.get('#sign-username').type('farhantest123').should('have.value','farhantest123')
        cy.get('#sign-password').type('farhantest123').should('have.value','farhantest123')
        cy.wait(1000)
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()

    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})