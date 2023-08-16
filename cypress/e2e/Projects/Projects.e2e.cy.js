/* eslint-disable no-undef */

// Add intellisense
/// <reference types="cypress" />

import { environment } from "../../../src/environments/environments";
import repository from "../../fixtures/projects/repositories.json";

describe("Cypress Test Integration: Component Project", async () => {

  it("should show the correct info for repository[0]: 'be-the-hero'", () => {
    cy.intercept(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:projects/repositories.json"
    );

    cy.goToTheHomePage();

    cy.get('.repository').then(repo => {
      cy.get(repo[0]).should("contain", repository[0].name);
      cy.get(repo[0]).should("contain", repository[0].full_name);
      cy.get(repo[0]).should("contain", repository[0].description);
      cy.get(repo[0]).should("contain", repository[0].language);
    });
  });

  it("should show the correct info for repository[1]: 'dev-radar'", () => {
    cy.intercept(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:projects/repositories.json"
    );

    cy.goToTheHomePage();

    cy.get("a").should("contain", repository[1].name);
    cy.get("i").should("contain", repository[1].full_name);
    cy.get("p").should("contain", repository[1].description);
    cy.get("span").should("contain", repository[1].language);
  });

  it("should show the correct info for repository[2]: 'dollynho-fighter'", () => {
    cy.intercept(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:projects/repositories.json"
    );

    cy.goToTheHomePage();

    cy.get('[data-test=dollynho-fighter]').should("contain", repository[2].name);
    cy.get(':nth-child(3) > i').should("contain", repository[2].full_name);
    cy.get(':nth-child(3) > p').should("contain", repository[2].description);
    cy.get(':nth-child(3) > .language').should("contain", repository[2].language);
  })

  it("should show the correct info for repository[3]: 'portfolio'", () => {
    cy.intercept(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:projects/repositories.json"
    );

    cy.goToTheHomePage();

    cy.get('.repository').then(repo => {
      cy.get(repo[3]).find("a").should("contain", repository[3].name);
      cy.get(repo[3]).find("i").should("contain", repository[3].full_name);
      cy.get(repo[3]).find("p").should("contain", repository[3].description);
      cy.get(repo[3]).find("span").should("contain", repository[3].language);
    });
  });
  
  it("should show the correct info for repository[4]: 'react-tetris'", () => {
    cy.intercept(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:projects/repositories.json"
    );

    cy.goToTheHomePage();

    cy.get('.repository').then(repo => {
      cy.get(repo[4]).find("a").should("contain", repository[4].name);
      cy.get(repo[4]).find("i").should("contain", repository[4].full_name);
      cy.get(repo[4]).find("p").should("contain", repository[4].description);
      cy.get(repo[4]).find("span").should("contain", repository[4].language);
    });
  });

  it("should show the correct info for repository[5]: 'sharing-data-angular'", () => {
    cy.intercept(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:projects/repositories.json"
    );

    cy.goToTheHomePage();

    cy.get('.repository').then(repo => {
      cy.get(repo[5]).find("a").should("contain", repository[5].name);
      cy.get(repo[5]).find("i").should("contain", repository[5].full_name);
      cy.get(repo[5]).find("p").should("contain", repository[5].description);
      cy.get(repo[5]).find("span").should("contain", repository[5].language);
    });
  });
});
