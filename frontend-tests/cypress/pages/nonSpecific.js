/// <reference types="cypress" />

//Elements
const logoutButton = '.user > .btn'

//Actions
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


//Exports
module.exports = {
    performLogout

}