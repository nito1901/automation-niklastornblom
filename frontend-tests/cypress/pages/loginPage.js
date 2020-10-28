/// <reference types="cypress" />


//Elements
const loginPageTitle = 'Testers Hotel'
const loginPageUrl = 'http://localhost:3000'
const userNameInputfield = 'div.field:nth-child(1) > input:nth-child(2)'
const userPasswordInputfield = 'div.field:nth-child(2) > input:nth-child(2)'
const loginButton = '.btn'
const user = 'tester01'
const password = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'

//Actions
function performValidLogin(cy, contentToConfirm){
    cy.visit(loginPageUrl)
    cy.title().should('eq', loginPageTitle)
    cy.get(userNameInputfield).type(user)
    cy.get(userPasswordInputfield).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    performValidLogin
}