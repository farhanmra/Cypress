describe('day 6',function(){
    it('Latihan',function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Farhan').should('have.value','Farhan')
        cy.get('#lastName').type('Tes').should('have.value','Tes')
        cy.get('#userEmail').type('Farhantes@dojobox.id').should('have.value','Farhantes@dojobox.id')
        cy.contains('Male').click().should('be.visible')
        cy.get('#userNumber').type('0888292929').should('have.value','0888292929')
        cy.get('#dateOfBirthInput').click()
        cy.contains('23').click()
        cy.get('.subjects-auto-complete__value-container').type('Arts{enter}')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
        cy.get('#uploadPicture').attachFile('sample.jpg').should('exist')
        cy.get('#currentAddress').type('alamat disini').should('exist')
        cy.get('#stateCity-wrapper > :nth-child(2)').type('NCR{enter}')
        cy.get('#stateCity-wrapper > :nth-child(3)').type('Panipat{enter}')
        cy.get('#submit').click({force:true})
        cy.contains('Thanks for submitting the form').should('exist')
    })
})