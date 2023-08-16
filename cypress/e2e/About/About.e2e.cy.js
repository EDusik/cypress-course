/* eslint-disable no-undef */

// Add intellisense
/// <reference types="cypress" />

import { environment } from "../../../src/environments/environments";
import profile from "../../fixtures/about/profile.json";

describe("Cypress Test Integration: Component About", async () => {
  // it.skip
  it("should show the correct profile data and get items using 'data-test'", () => {
    cy.intercept(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:about/profile.json"
    );

    cy.goToTheHomePage();

    cy.get("[data-test='avatar']").should("have.attr", "alt").should("contain", profile.login);
    cy.get("[data-test='avatar']").should("have.attr", "src").should("contain", profile.avatar_url);

    cy.get("h1").should("contain", profile.name);
    cy.get("h2").should("contain", profile.company);
    cy.get("[data-test='profile-create-at']").should("contain", "08/12/2020");
    cy.get("[data-test='profile-updated-at']").should("contain", "17/08/2023");
    cy.get("[data-test='profile-bio']").should("contain", profile.bio);
  });

  it("should show the correct profile data and get items using 'data-cy'", () => {
    cy.intercept(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:about/profile.json"
    );

    cy.goToTheHomePage();

    cy.get("[data-cy='cy-avatar']").should("have.attr", "alt").should("contain", profile.login);
    cy.get("[data-cy='cy-avatar']").should("have.attr", "src").should("contain", profile.avatar_url);

    cy.get("h1").should("contain", profile.name);
    cy.get("h2").should("contain", profile.company);
    cy.get("[data-cy='cy-profile-create-at']").should("contain", "08/12/2020");
    cy.get("[data-cy='cy-profile-updated-at']").should("contain", "17/08/2023");
    cy.get("[data-cy='cy-profile-bio']").should("contain", profile.bio);
  });

  it("should show 'Loading...' when you have a status 500 error response", () => {
    // cy.intercept({
    //   method: "GET",
    //   url: `${environment.url}${environment.user}`,
    //   statusCode: 500,
    //   body: {
    //   }
    // });

    cy.intercept('GET', `${environment.url}${environment.user}`, {
      statusCode: 500,
      body: {
        data: {}
      },
    })

    cy.goToTheHomePage();
  });
});
