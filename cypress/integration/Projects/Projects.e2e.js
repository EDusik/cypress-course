/* eslint-disable no-undef */
import { environment } from "../../../src/environments/environments";
import repository from "../../fixtures/projects/repositories.json";

describe("Cypress Test Integration: Component Project", async () => {

  it("should show the correct info for repository[0]: 'be-the-hero'", () => {
    cy.server();
    cy.route(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:projects/repositories.json"
    );

    cy.visit("/");

    cy.get('.repository').then(repo => {
      cy.get(repo[0]).should("contain", repository[0].name);
      cy.get(repo[0]).should("contain", repository[0].full_name);
      cy.get(repo[0]).should("contain", repository[0].description);
      cy.get(repo[0]).should("contain", repository[0].language);
    });
  });

  it("should show the correct info for repository[1]: 'dev-radar'", () => {
    cy.server();
    cy.route(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:projects/repositories.json"
    );

    cy.visit("/");
     
    cy.get("a").should("contain", repository[1].name);
    cy.get("i").should("contain", repository[1].full_name);
    cy.get("p").should("contain", repository[1].description);
    cy.get("span").should("contain", repository[1].language);
  });

});
