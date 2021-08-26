describe('kumpulan test case', function () {
    before(()=>{
        cy.bukaUrl()
    })
    it('login', function(){
        
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('farhantest123').should('have.value','farhantest123')
        cy.get('#loginpassword').type('farhantest123').should('have.value','farhantest123')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // cy.contains('farhantest123').should('exist')
        cy.get('#nameofuser').should('be.visible')

    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
