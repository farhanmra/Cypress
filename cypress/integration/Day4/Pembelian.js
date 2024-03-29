describe('kumpulan test case', function () {
    before(()=>{
        cy.bukaUrl()
    })
    it('pembelian', function(){
        
        cy.get(':nth-child(5) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        
        cy.get(':nth-child(3) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        
        cy.get('#cartur').click()
        cy.wait(10000)
        cy.get('.col-lg-1 > .btn').click()
        cy.wait(1000)
        cy.get('#name').type('pembeli').should('have.value','pembeli')
        cy.get('#country').type('negara').should('have.value','negara')
        cy.get('#city').type('kota').should('have.value','kota')
        cy.get('#card').type('99299-99299-92000').should('have.value','99299-99299-92000')
        cy.get('#month').type('agustus').should('have.value','agustus')
        cy.get('#year').type('2021').should('have.value','2021')
        cy.wait(1000)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('Thank you for your purchase!').should('exist')
        cy.wait(10000)
        cy.get('.confirm').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
