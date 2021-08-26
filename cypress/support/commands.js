//custom comand
Cypress.Commands.add('login',()=>{
    cy.contains('Login').click()
})

Cypress.Commands.add('daftar',()=>{
    cy.contains('Daftar').click()
})

Cypress.Commands.add('bukaUrl',()=>{
    cy.visit('https://www.demoblaze.com/index.html')
})


