/// <reference types="Cypress" />
import { emp } from './helper'

const loggedIn = () => {
	cy.location('pathname').should('eq', '/employees')
			.get('#greetings')
			.should('be.visible')
			.should('have.text', `Hello ${Cypress.env('username')}`)
}

const empCreated = () => {
	cy.get('#employee-list').should('contain', `${emp.firstName} ${emp.lastName}`)
}

Cypress.Commands.add('login', () => {
  cy.visit(`${Cypress.env('baseUrl')}/login`)
			.get('[ng-model="user.name"]').type(Cypress.env('username'))
			.get('[ng-model="user.password"]').type(Cypress.env('password'))
		.get('#login-form').submit()
	
	loggedIn()
})

Cypress.Commands.add('createEmployee', () => {
	cy
		//write emp data to fixture 
		.writeFile('cypress/fixtures/createdEmp.json', emp)
	
		.get('#bAdd').click()
    .get('[ng-model="selectedEmployee.firstName"]').type(emp.firstName)
    .get('[ng-model="selectedEmployee.lastName"]').type(emp.lastName)
    .get('[ng-model="selectedEmployee.startDate"]').type(emp.date)
    .get('[ng-model="selectedEmployee.email"]').type(emp.email)
    .get('.formFooter').click()
	
	empCreated()
})

    // cy.request({
		//   method: 'GET',
    //   url: 'https://cafetownsend-angular-rails.herokuapp.com/login',
    //   headers: {
    //     Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    //   }
    // }).then((resp) => {
    //   var el = document.createElement('html');
    //   el.innerHTML = (resp.body).replace(`<!doctype html>`,``)

    //   const csrf_token = el.getElementsByTagName('meta')[1].getAttribute("content")
    //   cy.log('head ===', csrf_token)
    //   const cookie = resp.headers['set-cookie'][0].split('=')[1]
    //   cy.request({
    //     method: 'POST',
    //     url: 'https://cafetownsend-angular-rails.herokuapp.com/sessions',
    //     headers: {
    //       Accept: 'application/json, text/plain, */*',
    //       'X-CSRF-TOKEN': csrf_token,
    //       'X-Requested-With': XMLHttpRequest,
    //       'Content-Type': 'application/json;charset=utf-8',
    //       Cookie: cookie,
    //       Connection: 'keep-alive'
    //     },
    //     body: {
    //       name:'Luke',password:'Skywalker'
    //     }
    //   })
    // })
    
  
