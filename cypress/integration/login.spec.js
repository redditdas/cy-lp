describe('Login Spec', () => {
  before('Open Login Page',() => {
    cy.visit(`${Cypress.env('baseUrl')}/login`)
  })

	it('Login with Correct credentials', () => {
    cy
      //actions
			.get('[ng-model="user.name"]').type(Cypress.env('username'))
			.get('[ng-model="user.password"]').type(Cypress.env('password'))
      .get('#login-form').submit()
      
      cy.getCookie('_CafeTownsend-Angular-Rails_session')
         .then((cookie) => {
         cy.log(JSON.stringify(cookie));
         })
        
        cy.getCookie('_CafeTownsend-Angular-Rails_session').should('exist')

      //assertions
      .location('pathname').should('eq', '/employees')
			.get('#greetings')
			.should('be.visible')
			.should('have.text', `Hello ${Cypress.env('username')}`)
	})
})