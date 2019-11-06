/// <reference types="Cypress" />

import { randomString, randomDate } from '../support/helper'

describe('Create Employee Spec', () => {
  before('login', () => {
    cy.login()
  })

  it('Create New Employee and Verify its created', () => {
     
    const firstName = randomString(4)
    const lastName = randomString(5)
    const email = `${firstName}.${lastName}@cypress.io`
    
      cy
      //create Employee
      .get('#bAdd').click()
      .get('[ng-model="selectedEmployee.firstName"]').type(firstName)
      .get('[ng-model="selectedEmployee.lastName"]').type(lastName)
      .get('[ng-model="selectedEmployee.startDate"]').type(randomDate())
      .get('[ng-model="selectedEmployee.email"]').type(email)
      .get('.formFooter').click()
    
      //assert
      .get('#employee-list').should('contain', `${firstName} ${lastName}`)
    })
    
})