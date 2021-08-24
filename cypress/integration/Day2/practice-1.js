describe('kumpulan test case',function(){
    it('tc-1',function(){
        // cy.visit('https://www.bukalapak.com/')
        // cy.get('.bl-link > .pr-4').click()
        // cy.get('.bl-text-field__inner').type('089282292299')
        // cy.get('.mv-24 > .bl-button').click()
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('opel')
        cy.get('[value="Car"]').check()

    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})