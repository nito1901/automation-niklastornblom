/// <reference types="cypress" />

import faker from 'faker'

//Elements
const nameInput = ':nth-child(1) > input'
const emailInput = ':nth-child(2) > input'
const telephoneInput = ':nth-child(3) > input'
const saveButton = '.blue'
const createdClientCard = '.clients > :last-child'

//Input values


//Actions
function createClient(cy, contentToConfirm){
    let firstNameLastName = faker.name.firstName() + ' ' + faker.name.lastName()
    let email = faker.internet.email()
    let phoneNumber = faker.phone.phoneNumber()

    cy.get(nameInput).type(firstNameLastName)
    cy.get(emailInput).type(email)
    cy.get(telephoneInput).type(phoneNumber)
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
    cy.get(createdClientCard).children()
        .should('contain', firstNameLastName)
        .and('contain', email)
        .and('contain', phoneNumber)
}

//Exports
module.exports = {
    createClient
}