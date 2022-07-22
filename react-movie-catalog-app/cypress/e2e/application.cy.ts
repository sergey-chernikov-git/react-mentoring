describe('Testing Movie APP', () => {
    it('Home page contains 10 most popular movies and search input is empty', () => {
      cy.visit(Cypress.env('host'));
      cy.get("b[class='movie-count']").should('include.text', '10');
      cy.get("input[id='search-input-value']").should('have.value', '');
    });

    it('Search parameterized page has the same content in search bar', () => {
      cy.visit(Cypress.env('host') + "/search/Test");
      cy.get("input[id='search-input-value']").should('have.value', 'Test');
    });

    it('Search parameterized page has selected genre', () => {
      cy.visit(Cypress.env('host') + "/search?genre=Drama");
      cy.get("div[class='movie-preview-gender']").should('include.text','Drama');
    });

    it('Add movie window is shown', () => {
      cy.visit(Cypress.env('host'));
      cy.get("button[class='search-movie-add-button']").click();
      cy.get("div[class='movie-add']");
      cy.get("input[name='title']").should('have.value', '');
    });
    
  });