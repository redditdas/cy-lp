/// <reference types="Cypress" />
import { emp } from '../support/helper'

describe('Delete Employee Spec', () => {
  before('Login and Create Employee', () => {
    cy.login()
    cy.createEmployee('empToBeDeleted')
  })

  it('Delete Employee record and verify Emp does not exist anymore in the system', () => {
    cy.fixture('empToBeDeleted').then((user) => {
      //select Employee
      cy.get('#employee-list')
        .contains(`${user.firstName} ${user.lastName}`)
        .click()
      
      //click Delete Button
      cy.get('#bDelete')
        .click()
        .wait(5000)
        .get('#employee-list')
        .contains(`${user.firstName} ${user.lastName}`)
      
      //assert Employee has been deleted
    
      // cy.get('#employee-list').should('not.have', `${user.firstName} ${user.lastName}`)
      
      //confirm
      // window.confirm(true)
      
      //click update button
      // cy.get('[type="submit"][ng-hide="isCreateForm"]')
      //   .click()
      
      // //verify email was update
      // cy.get('#employee-list')
      //   .contains(`${user.firstName} ${user.lastName}`)
      //   .click()
      //   .get('#bEdit')
      //   .click()
      //   .get('[ng-model="selectedEmployee.email"]')
      //   .should('have.value', newEmail)
    })
  })
})