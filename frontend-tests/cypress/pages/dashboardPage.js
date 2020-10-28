/// <reference types="cypress" />

//Elements
const roomViewButton = ':nth-child(1) > .btn'
const clientViewButton = '.blocks > :nth-child(2) > .btn'
const billViewButton = ':nth-child(3) > .btn'
const reservationViewButton = ':nth-child(4) > .btn'

//Actions
function navigateToRoomPage(cy, contentToConfirm){
    cy.get(roomViewButton).click()
    cy.contains(contentToConfirm)
}

function navigateToClientPage(cy, contentToConfirm){
    cy.get(clientViewButton).click()
    cy.contains(contentToConfirm)
}

function navigateToBillPage(cy, contentToConfirm){
    cy.get(billViewButton).click()
    cy.contains(contentToConfirm)
}

function navigateToReservationPage(cy, contentToConfirm){
    cy.get(reservationViewButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    navigateToRoomPage,
    navigateToClientPage,
    navigateToBillPage,
    navigateToReservationPage
}