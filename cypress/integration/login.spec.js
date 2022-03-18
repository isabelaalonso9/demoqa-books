describe('Login', () => {
     
    it('Login with wrong credentials', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/login')
        cy.get('#userName').type("admin")
        cy.get('#password').type("admin")
        cy.get('#login').click()
        cy.get('#name').should('have.text', 'Invalid username or password!')
    })

    it('Login with right credentials', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/login')
        cy.get('#userName').type("admin")
        cy.get('#password').type("Admin12!")
        cy.get('#login').click()
        cy.get('.main-header').should('have.text', 'Profile')
    })

})