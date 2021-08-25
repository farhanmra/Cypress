describe('kumpulan test case', function () {
    it('1. Isi nama dan email, lalu klik button “email me!”.', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Farhan').should('have.value','Farhan')
        cy.get('#et_pb_contact_email_0').type('Farhan@gmail.com').should('have.value','Farhan@gmail.com')
        cy.contains('Email Me!').click()
        cy.contains('Please refresh the page and try again.').should('exist')

    })
    it('2. Pilih jenis kelamin pada radio button', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="male"]').check().should('be.checked','male')

    })
    it('3. Pilih satu atau semua pilihan pada checkboxes', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').check().should('be.checked','Bike')
        cy.get('[value="Car"]').check().should('be.checked','Car')
    })
    it('4. Pilih dropdown “Audi”.', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('Audi').should('have.value','audi')
    })
    it('5. Klik tombol “Click Me”.', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.contains('Button success').should('exist')
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
