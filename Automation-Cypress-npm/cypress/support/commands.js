//custom comand
Cypress.Commands.add('login',()=>{
    cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('farhantest123').should('have.value','farhantest123')
        cy.get('#loginpassword').type('farhantest123').should('have.value','farhantest123')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // cy.contains('farhantest123').should('exist')
        cy.get('#nameofuser').should('be.visible')
})

Cypress.Commands.add('daftar',()=>{
    cy.contains('Daftar').click()
})

Cypress.Commands.add('bukaUrl',()=>{
    cy.visit('https://www.demoblaze.com/index.html')
})