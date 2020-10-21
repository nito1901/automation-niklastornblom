/// <reference types="cypress" />


describe('Assignment1 test suite', function(){
    it('create room', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.get('div.field:nth-child(1) > input:nth-child(2)').type('tester01')
        cy.get('div.field:nth-child(2) > input:nth-child(2)').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Rooms')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Create Room')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('Double').select('Single').select('Twin')
        cy.get(':nth-child(2) > input').type('3{uparrow}')
        cy.get(':nth-child(3) > input').type('1{uparrow}')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('500{uparrow}')
        cy.get(':nth-child(6) > select').select(['Balcony', 'Ensuite', 'Sea View', 'Penthouse'])
        cy.get('.blue').click()
        cy.contains('Rooms')
        cy.get('.rooms > :last-child').children()
        .should('contain', 'Floor 1, Room 3')
        .and('contain', 'Category: twin')
        .and('contain', 'Available: true')
        .and('contain', 'Price: 500kr')
        .and('contain', 'Features:')
        .and('contain', 'balcony')
        .and('contain', 'ensuite')
        .and('contain', 'sea view')
        .and('contain', 'penthouse')

    })

})