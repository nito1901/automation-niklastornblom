/// <reference types="cypress" />

import faker from 'faker'
import * as dashboardFuncs from '../dashboardPage'
import * as clientOverviewFuncs from '../client pages/clientOverview'
import * as billOverviewFuncs from '../bill pages/billOverview'
import * as reservationOverviewFuncs from '../reservation pages/reservationOverview'

//Elements
const startDateInput = ':nth-child(1) > input'
const endDateInput = ':nth-child(2) > input'
const clientInput = ':nth-child(3) > select'
const roomInput = ':nth-child(4) > select'
const billInput = ':nth-child(5) > select'
const saveButton = '.blue'
const createdReservationCard = '.reservations > :last-child'

const valueInput = 'input'
const checkboxInput = '.checkbox'
const createdBillCard = '.bills > :last-child'
const createdBillId = ':last-child > .id'

const nameInput = ':nth-child(1) > input'
const emailInput = ':nth-child(2) > input'
const telephoneInput = ':nth-child(3) > input'
const createdClientCard = '.clients > :last-child'
const createdClientName = ':last-child  > :nth-child(2) > h3'

const categoryInput = ':nth-child(1) > select'
const numberInput = ':nth-child(2) > input'
const floorInput = ':nth-child(3) > input'
const availableInput = '.checkbox'
const priceInput = ':nth-child(5) > input'
const featuresInput = ':nth-child(6) > select'
const createdRoomCard = '.rooms > :last-child'

const backButton = ':nth-child(3) > .btn'

//Actions
function createReservation(cy){
    //Creates a room
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
    cy.get(createdRoomCard)
        .should('contain', 'Floor ' + floorNumber + ', Room ' + roomNumber)
        .and('contain', 'Available: true')
        .and('contain', 'Price: '+ priceNumber + 'kr')
        .and('contain', 'Features: ')
        .and('contain', 'Category: ' + roomType)
        .and('contain', featureType)
            cy.get(backButton).click()
    //Creates a bill
    dashboardFuncs.navigateToBillPage(cy, 'Create Bill')
    billOverviewFuncs.navigateToCreateBill(cy, 'New Bill')
    let valueNumber = faker.random.number()
    let valueCheckbox = faker.random.boolean()
    let yesOrNo = 'No'

    cy.get(valueInput).type(valueNumber)
    if(valueCheckbox){
        yesOrNo = 'Yes'
        cy.get(checkboxInput).click()
    }
    cy.get(saveButton).click()
    cy.get(createdBillCard).children()
        .should('contain', 'Value: ' + valueNumber)
        .and('contain', 'Paid: ' + yesOrNo)

        cy.get(createdBillId).then(($selectorContent) => {
        const bill = $selectorContent.text()

        cy.get(backButton).click()
    //Creates a client
    dashboardFuncs.navigateToClientPage(cy, 'Create Client')
    clientOverviewFuncs.navigateToCreateClient(cy, 'New Client')

    let firstNameLastName = faker.name.firstName() + ' ' + faker.name.lastName()
    let email = faker.internet.email()
    let phoneNumber = faker.phone.phoneNumber()

    cy.get(nameInput).type(firstNameLastName)
    cy.get(emailInput).type(email)
    cy.get(telephoneInput).type(phoneNumber)
    cy.get(saveButton).click()
    cy.get(createdClientCard).children()
        .should('contain', firstNameLastName)
        .and('contain', email)
        .and('contain', phoneNumber)

        cy.get(createdClientName).then(($selectorContent) => {
            const testClient = $selectorContent.text()

            cy.get(backButton).click()
    //Creates a reservation
    dashboardFuncs.navigateToReservationPage(cy, 'Create Reservation')
    reservationOverviewFuncs.navigateToCreateReservation(cy, 'New Reservation')
    let dateYear = faker.random.number({min: 2020, max: 2021})
    let dateMonth = faker.random.number({min: 1, max: 12})
    let dateDay = faker.random.number({min: 1, max: 28})

    if(dateMonth<10){
        dateMonth = '0' + dateMonth
    }
    if(dateDay<10){
        dateDay = '0' + dateDay
    }
    
    let dateStart = dateYear + '-' + dateMonth + '-' + dateDay
    let dateEnd = dateYear + '-' + dateMonth + '-' + dateDay

    cy.get(startDateInput).type(dateStart)
    cy.get(endDateInput).type(dateEnd)
    cy.get(clientInput).select(testClient)
    cy.get(roomInput).select('Floor ' + floorNumber + ', Room ' + roomNumber)
    cy.get(billInput).select(bill)
    cy.get(saveButton).click()
    cy.get(createdReservationCard).should('contain', 'Start: ' + dateStart)
        .and('contain', 'End: ' + dateEnd)
        .and('contain', firstNameLastName)

        })
        })
}

//Exports
module.exports = {
    createReservation
}