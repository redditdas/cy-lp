// <reference types="Cypress" />
import { emp } from '../support/helper'
describe('Edit Employee', () => {
  before('Login and Create Employee', () => {
    cy.login()
    cy.createEmployee()
  })

  it('Edit Employee details and verify new details were Saved', () => {
    cy.fixture('createdEmp').then((user) => {
      //select Employee
      cy.get('#employee-list')
        .contains(`${user.firstName} ${user.lastName}`)
        .click()
      
      //click Edit Button
      cy.get('#bEdit')
        .click()
      
      //clear email field and enter new email id
      const newEmail = emp.email
      cy.get('[ng-model="selectedEmployee.email"]')
        .clear()
        .type(newEmail)
      
      //click update button
      cy.get('[type="submit"][ng-hide="isCreateForm"]')
        .click()
      
      //verify
      cy.get('#employee-list')
        .contains(`${user.firstName} ${user.lastName}`)
        .click()
        .get('#bEdit')
        .click()
        .get('[ng-model="selectedEmployee.email"]')
        .should('have.value', newEmail)
        // .invoke('val')
        // .then((text) => {
        //   const sometext = text
        //   expect(text).to.equal(newEmail)
        // })
        // .should('have.text', newEmail)
        
      
      
    })

  })
    
})