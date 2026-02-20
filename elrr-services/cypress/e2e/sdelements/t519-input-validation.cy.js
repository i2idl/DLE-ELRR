describe('T519: Input Validation Tests for ELRR API', () => {
  const baseUrl = '/api/person';

  it('validates string input in POST requests', () => {
    const invalidBody = {
      name: 12345,
      firstName: null,
      lastName: {}
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      body: invalidBody,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });

  it('validates UUID format in GET request query', () => {
    cy.request({
      method: 'GET',
      url: baseUrl,
      qs: { id: 'invalid-uuid' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });

  it('validates numeric fields when sending incorrect types', () => {
    const invalidNumericBody = {
      height: 'not-a-number',
      weight: 'not-a-number'
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      body: invalidNumericBody,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });

  it('validates date fields with invalid formats', () => {
    const invalidDateBody = {
      birthdate: 'invalid-date'
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      body: invalidDateBody,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });

});
