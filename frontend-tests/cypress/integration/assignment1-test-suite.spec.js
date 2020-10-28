/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as logoutFuncs from '../pages/nonSpecific'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomOverviewFuncs from '../pages/room pages/roomOverview'
import * as newRoomFuncs from '../pages/room pages/newRoom'
import * as clientOverviewFuncs from '../pages/client pages/clientOverview'
import * as newClientFuncs from '../pages/client pages/newClient'
import * as billOverviewFuncs from '../pages/bill pages/billOverview'
import * as newBillFuncs from '../pages/bill pages/newBill'
import * as reservationOverviewFuncs from '../pages/reservation pages/reservationOverview'
import * as newReservationFuncs from '../pages/reservation pages/newReservation'

//Test suite
describe('Assignment1 test suite', function(){
    beforeEach(() => {
        loginFuncs.performValidLogin(cy, 'Tester Hotel Overview')
    })

    afterEach(() => {
        logoutFuncs.performLogout(cy, 'Login')
    })

    it('TC01-Create room', function(){
        dashboardFuncs.navigateToRoomPage(cy, 'Create Room')
        roomOverviewFuncs.navigateToCreateRoom(cy, 'New Room')
        newRoomFuncs.createRoom(cy, 'Create Room')

    }) 

    it('TC02-Create client', function(){
        dashboardFuncs.navigateToClientPage(cy, 'Create Client')
        clientOverviewFuncs.navigateToCreateClient(cy, 'New Client')
        newClientFuncs.createClient(cy, 'Create Client')

    }) 

    it('TC03-Create bill', function(){
        dashboardFuncs.navigateToBillPage(cy, 'Create Bill')
        billOverviewFuncs.navigateToCreateBill(cy, 'New Bill')
        newBillFuncs.createBill(cy, 'Create Bill')

    })

    it('TC04-Create reservation', function(){
        dashboardFuncs.navigateToRoomPage(cy, 'Create Room')
        roomOverviewFuncs.navigateToCreateRoom(cy, 'New Room')
        newReservationFuncs.createReservation(cy,)

    })

    it('TC05-Delete room', function(){
        dashboardFuncs.navigateToRoomPage(cy, 'Create Room')
        roomOverviewFuncs.navigateToCreateRoom(cy, 'New Room')
        newRoomFuncs.createRoom(cy, 'Create Room')
        roomOverviewFuncs.deleteRoom(cy, 'Create Room')
    })

    it('TC06-Delete client', function(){
        dashboardFuncs.navigateToClientPage(cy, 'Create Client')
        clientOverviewFuncs.navigateToCreateClient(cy, 'New Client')
        newClientFuncs.createClient(cy, 'Create Client')
        clientOverviewFuncs.deleteClient(cy, 'Create Client')

    })

    it('TC07-Delete bill', function(){
        dashboardFuncs.navigateToBillPage(cy, 'Create Bill')
        billOverviewFuncs.navigateToCreateBill(cy, 'New Bill')
        newBillFuncs.createBill(cy, 'Create Bill')
        billOverviewFuncs.deleteBill(cy, 'Create Bill')
    })

    it('TC08-Delete reservation', function(){
        dashboardFuncs.navigateToRoomPage(cy, 'Create Room')
        roomOverviewFuncs.navigateToCreateRoom(cy, 'New Room')
        newReservationFuncs.createReservation(cy,)
        reservationOverviewFuncs.deleteReservation(cy, 'Create Reservation')
    })
})