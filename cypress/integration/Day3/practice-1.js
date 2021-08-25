describe('kumpulan test case', function () {
    it('Belajar contains', function(){
        cy.visit('https://bukalapak.com')
        cy.contains('Daftar').click()
        cy.contains('Daftar dulu, yuk').should('exist')
        cy.get('.bl-text-field__input').type('farhan').should('have.value','farhan')
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
