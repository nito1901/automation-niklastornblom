/// <reference types="cypress" />

import faker from 'faker'

//Elements
const categoryInput = ':nth-child(1) > select'
const numberInput = ':nth-child(2) > input'
const floorInput = ':nth-child(3) > input'
const availableInput = '.checkbox'
const priceInput = ':nth-child(5) > input'
const featuresInput = ':nth-child(6) > select'
const saveButton = '.blue'
const createdRoom = '.rooms > :last-child'


//Actions
function createRoom(cy, contentToConFirm){

    let roomNumber = faker.random.number()
    let floorNumber = faker.random.number()
    let priceNumber = faker.random.number()
    let roomType = faker.random.arrayElement(['double', 'single', 'twin'])
    let featureType = faker.random.arrayElement(['balcony', 'ensuite', 'penthouse'])
    cy.get(categoryInput).select(roomType)
    cy.get(numberInput).type(roomNumber + '{uparrow}')
    cy.get(floorInput).type(floorNumber + '{uparrow}')
    cy.get(availableInput).click()
    cy.get(priceInput).type(priceNumber + '{uparrow}')
    cy.get(featuresInput).select(featureType)
    cy.get(saveButton).click()
    cy.contains(contentToConFirm)
    cy.get(createdRoom)
    .should('contain', 'Floor ' + floorNumber + ', Room ' + roomNumber)
    .and('contain', 'Available: true')
    .and('contain', 'Price: '+ priceNumber + 'kr')
    .and('contain', 'Features: ')
    .and('contain', 'Category: ' + roomType)
    .and('contain', featureType)

}

//Exports
module.exports = {
    createRoom
}