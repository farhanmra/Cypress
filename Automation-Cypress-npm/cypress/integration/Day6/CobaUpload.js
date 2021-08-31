describe('function Upload',function(){
    it('upload',function(){
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('e@dojobox.id')
        cy.get('#input-password').type('admin')
        cy.get('#btn-login').click()
        cy.get('.d-flex > .btn').click()
        cy.get('input[type="file"]').attachFile('sample.jpg')
    })
})