require("cypress-xpath");

describe('Using the following user, add at least 3 books, check them and remove the second book in the list, checking them again.', () => {

    beforeEach(() => {    
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/login')
        cy.get('#userName').type("admin")
        cy.get('#password').type("Admin12!")
        cy.get('#login').click()
        cy.get('.main-header').should('have.text', 'Profile')
     });

    it('Add 3 books', () => {
        cy.get('#gotoStore').click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.xpath('//*[@id="see-book-Programming JavaScript Applications"]/a').click()
        cy.get('.text-right > #addNewRecordButton').click()
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.contains('Book added to your collection.');
        });
        cy.get('.text-left > #addNewRecordButton').click()

        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.xpath('//*[@id="see-book-Designing Evolvable Web APIs with ASP.NET"]/a').click()
        cy.get('.text-right > #addNewRecordButton').click()
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.contains('Book added to your collection.');
        });
        cy.get('.text-left > #addNewRecordButton').click()

        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.xpath('//*[@id="see-book-Understanding ECMAScript 6"]/a').click()
        cy.get('.text-right > #addNewRecordButton').click()
        cy.on('window:confirm',(txt)=>{
           expect(txt).to.contains('Book added to your collection.');
        });
        cy.get('.text-left > #addNewRecordButton').click()
     });

    it('Check the added books', () => {
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.xpath('//*[@id="see-book-Programming JavaScript Applications"]/a').should('have.text', 'Programming JavaScript Applications')
        cy.xpath('//*[@id="see-book-Designing Evolvable Web APIs with ASP.NET"]/a').should('have.text', 'Designing Evolvable Web APIs with ASP.NET')
        cy.xpath('//*[@id="see-book-Understanding ECMAScript 6"]/a').should('have.text', 'Understanding ECMAScript 6')
    });

    it('Remove the second book in the list', () => {      
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.get(':nth-child(2) > .rt-tr > [style="flex: 70 0 auto; width: 70px; max-width: 70px;"] > .action-buttons > #delete-record-undefined > svg').click()
        cy.get('#example-modal-sizes-title-sm').should('have.text', 'Delete Book')
        cy.xpath('//*[@id="closeSmallModal-ok"]').click({force:true})

    });

    it('Check after the removed book', () => {
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').scrollIntoView()
        cy.xpath('//*[@id="see-book-Programming JavaScript Applications"]/a').should('have.text', 'Programming JavaScript Applications')
        cy.xpath('//*[@id="see-book-Understanding ECMAScript 6"]/a').should('have.text', 'Understanding ECMAScript 6')
    });

});