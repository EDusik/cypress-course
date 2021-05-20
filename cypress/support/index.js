/* eslint-disable no-undef */
import './commands'

beforeEach(() => {
  cy.intercept("/");
});
