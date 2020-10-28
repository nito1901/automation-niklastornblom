/// <reference types="cypress" />


//Elements
const createBillButton = 'h2 > .btn'
const lastCreatedBill = '.bills > :last-child'
const billCardDropdown = ':last-child > .action > img'
const deleteButton = '.menu > :nth-child(2)'

//Actions
function navigateToCreateBill(cy, contentToConfirm){
    cy.get(createBillButton).click()
    cy.contains(contentToConfirm)

}

function deleteBill(cy, contentToConfirm){
    cy.get(lastCreatedBill)
    cy.get(billCardDropdown).click()
    cy.get(':last-child > .id').then(($selectorContent) => {
        const bill = $selectorContent.text()
        cy.get(deleteButton).click()
        cy.contains(contentToConfirm)
        cy.get(lastCreatedBill).should('not.contain', bill)

    })
}

//Exports
module.exports = {
    navigateToCreateBill,
    deleteBill
}