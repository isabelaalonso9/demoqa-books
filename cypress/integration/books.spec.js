require("cypress-xpath");

describe('Books', () => {
     
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/login')
        cy.get('#userName').type("admin")
        cy.get('#password').type("Admin12!")
        cy.get('#login').click()
        cy.get('.main-header').should('have.text', 'Profile')
    });

    it('Add a book on collection', () => {
        cy.get('#gotoStore').click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click()
        cy.xpath('//*[@id="see-book-Programming JavaScript Applications"]/a').click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.get('.text-right > #addNewRecordButton').click()
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.contains('Book added to your collection.');
        });
        cy.get('.text-left > #addNewRecordButton').click()
    })

    it('Try to add the book again on collection', () => {
        cy.get('#gotoStore').click()
        cy.xpath('//*[@id="see-book-Programming JavaScript Applications"]/a').click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.get('.text-right > #addNewRecordButton').click()
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Book already present in the your collection!');
        });
        cy.get('.text-left > #addNewRecordButton').click()
    })
    
    it('Delete a book of collection', () => {
        cy.get('#gotoStore').click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click()
        cy.get(':nth-child(1) > .rt-tr > [style="flex: 70 0 auto; width: 70px; max-width: 70px;"] > .action-buttons > #delete-record-undefined > svg').click()
        cy.get('#example-modal-sizes-title-sm').should('have.text', 'Delete Book')
        cy.xpath('//*[@id="closeSmallModal-ok"]').click({force:true})
    });

});

