/// <reference types="Cypress" />

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
        // .wait(10000)
        //confirm employee is not present
        .get('#employee-list').click({ force: true })
        .should('not.have', `${user.firstName} ${user.lastName}`)
    })
  })
})