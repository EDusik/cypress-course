/* eslint-disable no-undef */
import { environment } from "../../../src/environments/environments";
import profile from "../../fixtures/about/profile.json";

describe("Cypress Test Integration: Component About", async () => {

  it("should show the correct profile data", () => {
    cy.server();
    cy.route(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:about/profile.json"
    );

    cy.visit("/");

    cy.get("[data-test='avatar']").should("have.attr", "alt").should("contain", profile.login);
    cy.get("[data-test='avatar']").should("have.attr", "src").should("contain", profile.avatar_url);

    cy.get("h1").should("contain", profile.name);
    cy.get("h2").should("contain", profile.company);
    cy.get("[data-test='profile-create-at']").should("contain", "08/04/2016");
    cy.get("[data-test='profile-updated-at']").should("contain", "08/12/2020");
    cy.get("[data-test='profile-bio']").should("contain", profile.bio);
  });

  it("should show 'Loading...' when you have a status 500 error response", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: `${environment.url}${environment.user}`,
      status: 500,
      response: {
        data: {},
      },
    });

    cy.visit("/");
    cy.get('.no-repo').should("contain", "Loading...")
  });
});
