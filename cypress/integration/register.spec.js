require("cypress-xpath");
const {faker} = require('@faker-js/faker');

    it('Create an account with randomized data and verify the recaptcher error.', () => {
        
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/login')
        cy.get('#newUser').click()

        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const password = faker.internet.password(8, false, /[A-Z]/, '@a3')
        
        cy.get('#firstname').type(firstName)
        cy.get('#lastname').type(lastName)
        cy.get('#userName').type(faker.internet.userName(firstName, lastName))
        cy.get('#password').type(password) 
        cy.get('#register').click()
        cy.get('#name').should('have.text', 'Please verify reCaptcha to register!')

    });

