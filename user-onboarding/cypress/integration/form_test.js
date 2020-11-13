describe('formtester', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3001')
    })



    it('nametest', ()=>{
        cy.get('input[name="name"]').type('Name goes here!')
        cy.get('input[name="name"]').should('have.value', 'Name goes here!')
        cy.get('input[name="email"]').type("JonDoe@jondoe.com")
        cy.get('input[name="password"]').type("apassword")
        cy.get('input[name="terms"]').click()
        cy.get('input[name="terms"]').should('have.value',"on")
        cy.get('.submitButton').should('not.be.disabled')
    })
    it('emptytest',()=>{
        cy.get('input[name="name"]').type('Name goes here!')
        cy.get('input[name="email"]').type("JonDoe@jondoe.com")
        cy.get('.submitButton').should('be.disabled')
    })
})