require("cypress-xpath");

describe('Remove all books in the end of tests', () => {

    beforeEach(() => {    
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/login')
        cy.get('#userName').type("admin")
        cy.get('#password').type("Admin12!")
        cy.get('#login').click()
        cy.get('.main-header').should('have.text', 'Profile')
     });

    it('Remove the all book in the list', () => {      
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.get(':nth-child(1) > .rt-tr > [style="flex: 70 0 auto; width: 70px; max-width: 70px;"] > .action-buttons > #delete-record-undefined > svg').click()
        cy.get('#example-modal-sizes-title-sm').should('have.text', 'Delete Book')
        cy.xpath('//*[@id="closeSmallModal-ok"]').click({force:true})
        cy.get(':nth-child(1) > .rt-tr > [style="flex: 70 0 auto; width: 70px; max-width: 70px;"] > .action-buttons > #delete-record-undefined > svg').click()
        cy.get('#example-modal-sizes-title-sm').should('have.text', 'Delete Book')
        cy.xpath('//*[@id="closeSmallModal-ok"]').click({force:true})
    });

});