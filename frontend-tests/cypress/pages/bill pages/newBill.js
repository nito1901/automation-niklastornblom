/// <reference types="cypress" />

import faker from 'faker'

//Elements
const valueInput = 'input'
const checkboxInput = '.checkbox'
const saveButton = '.blue'
const createdBillCard = '.bills > :last-child'

//Input values



//Actions
function createBill(cy, contentToConfirm){
    let valueNumber = faker.random.number()
    let valueCheckbox = faker.random.boolean()
    let yesOrNo = 'No'

    cy.get(valueInput).type(valueNumber)
    if(valueCheckbox){
        yesOrNo = 'Yes'
        cy.get(checkboxInput).click()
    }
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
    cy.get(createdBillCard).children()
    .should('contain', 'Value: ' + valueNumber)
    .and('contain', 'Paid: ' + yesOrNo)
}

//Exports
module.exports = {
    createBill
}