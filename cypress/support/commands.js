// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  cy.visit(`${Cypress.env('baseUrl')}/login`)
			.get('[ng-model="user.name"]').type(Cypress.env('username'))
			.get('[ng-model="user.password"]').type(Cypress.env('password'))
      .get('#login-form').submit()

      // .location('pathname').should('eq', '/employees')
			// .get('#greetings')
			// .should('be.visible')
			// .should('have.text', `Hello ${Cypress.env('username')}`)
})