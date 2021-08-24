describe('kumpulan test case',function(){
    it('TC_1',function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Farhan')
        cy.get('#lastName').type('M R A')
        cy.get('#userEmail').type('farhan@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('088299292')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#currentAddress').type('bekasi harapan indah')
        cy.get('#submit').click()
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})