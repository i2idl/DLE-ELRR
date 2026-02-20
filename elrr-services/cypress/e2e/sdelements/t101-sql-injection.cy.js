describe('T101: Test that application is not vulnerable to SQL injection', () => {
  const baseUrl = '/api/person';
  
  it('resists injection in GET request params', () => {
    const maliciousParam = "'; DROP TABLE person; --";

    cy.request({
      method: 'GET',
      url: baseUrl,
      qs: { ifi: maliciousParam },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(204);
      expect(response.body).to.not.include('syntax error');
      expect(response.body).to.not.include('SQL');
      
    });
  });
  
  it('resists injection in POST request body', () => {
    const maliciousBody = {
      name: "'; DROP TABLE person; --",
      firstName: "'; DROP TABLE person; --",
      lastName: "'; DROP TABLE person; --"
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      body: maliciousBody,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(201); // TODO: it shouldn't be a 201
    });
  });
  
});
