describe('kumpulan test case', function () {
    // before(()=>{
    //     cy.visit('https://bukalapak.com')
    // })
    // beforeEach(()=>{
    //     cy.visit('https://bukalapak.com')
    //     cy.wait(10000)
    // })

    it('login', function(){
        cy.visit('https://bukalapak.com')
        cy.login()
        cy.go('back')
        cy.wait(1000)
        cy.go('forward')
    })
    it('daftar', function(){
        cy.daftar()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
