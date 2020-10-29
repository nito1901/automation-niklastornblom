/// <reference types="cypress" />


//Elements
const createRoomButton = 'h2 > .btn'
const lastCreatedRoom = '.rooms > :last-child'
const roomCardDropdown = ':last-child > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const createdRoomName = ':last-child > :nth-child(2) > h3'


//Actions
function navigateToCreateRoom(cy, contentToConfirm){
    cy.get(createRoomButton).click()
    cy.contains(contentToConfirm)
}

function deleteRoom(cy, contentToConfirm){
    cy.get(lastCreatedRoom)
    cy.get(roomCardDropdown).click()
    cy.get(createdRoomName).then(($selectorContent) => {
        const roomNumberFloor = $selectorContent.text()
        cy.get(deleteButton).click()
        cy.contains(contentToConfirm)
        cy.get(lastCreatedRoom).should('not.contain', roomNumberFloor)

    })
}


//Exports
module.exports = {
    navigateToCreateRoom,
    deleteRoom

}