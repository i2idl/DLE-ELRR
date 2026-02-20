/// <reference types="Cypress" />

describe('homepage', () => {
  beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
    // cy.request('/');
  });

  it('Check content-type headers', () => {
    // Check for cache control in header set to no-cache
    // ticket is for requests not responses????  need to figure out how to check requests
    cy.request('/').as('resp');
    cy.get('@resp').its('headers').its('content-type')
        .should('include', 'application/hal+json');
  });

  it('Check cache-control header', () => {
    // Check for cache control in header set to no-cache
    // ticket is for requests not responses????  need to figure out how to check requests
    cy.request('/').as('resp');
    cy.get('@resp').its('headers').its('cache-control')
        .should('include', 'no-store');
  });
});
