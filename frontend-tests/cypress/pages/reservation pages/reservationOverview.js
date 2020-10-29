/// <reference types="cypress" />


//Elements
const createReservationButton = 'h2 > .btn'
const lastCreatedReservation = '.reservations > :last-child'
const reservationCardDropdown = ':last-child > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const createdReservationName = ':last-child > h3'

//Actions
function navigateToCreateReservation(cy, contentToConfirm){
    cy.get(createReservationButton).click()
    cy.contains(contentToConfirm)
}

function deleteReservation(cy, contentToConfirm){
    cy.get(lastCreatedReservation)
    cy.get(reservationCardDropdown).click()
    cy.get(createdReservationName).then(($selectorContent) => {
        const reservation = $selectorContent.text()

        cy.get(deleteButton).click()
        cy.contains(contentToConfirm)
        cy.get(lastCreatedReservation).should('not.contain', reservation)

    })

}
//Exports
module.exports = {
    navigateToCreateReservation,
    deleteReservation
}