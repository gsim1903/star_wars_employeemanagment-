describe('User van view empllyes', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/people', {
      fixture: 'people.json',
    })
    cy.visit('/')
  })

  it('is expected to display 10 employees', () => {
    cy.get('[data-cy=employee-list]').children().should('have.length', 10)
  })
})
