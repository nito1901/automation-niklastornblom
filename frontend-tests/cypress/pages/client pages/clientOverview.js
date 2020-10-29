/// <reference types="cypress" />


//Elements
const createClientButton = 'h2 > .btn'
const lastCreatedClient = '.clients > :last-child'
const clientCardDropdown = ':last-child > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const createdClientName = ':last-child > :nth-child(2) > h3'

//Actions
function navigateToCreateClient(cy, contentToConfirm){
    cy.get(createClientButton).click()
    cy.contains(contentToConfirm)
}

function deleteClient(cy, contentToConfirm){
    cy.get(lastCreatedClient)
    cy.get(clientCardDropdown).click()
    cy.get(createdClientName).then(($selectorContent) => {
        const client = $selectorContent.text()
        cy.get(deleteButton).click()
        cy.contains(contentToConfirm)
        cy.get(lastCreatedClient).should('not.contain', client)

    })

}
//Exports
module.exports = {
    navigateToCreateClient,
    deleteClient
}