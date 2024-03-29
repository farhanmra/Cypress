describe('Fungsional Pembelian',function(){
    it('TC01 Pembelian',function(){
        cy.bukaUrl()
        cy.login()
        cy.contains('Phones').click()
        cy.contains('HTC One M9').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.screenshot()
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        
        cy.contains('Laptops').click()
        cy.contains('Dell i7 8gb').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.screenshot()
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        
        cy.contains('Monitors').click()
        cy.contains('Apple monitor 24').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.screenshot()
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
})