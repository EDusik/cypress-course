/* eslint-disable no-undef */
import { environment } from "../../../src/environments/environments";
import profile from "../../fixtures/about/profile.json";

describe("Cypress Test Integration: Component About", async () => {
  it("should do something", () => {
    cy.server();
    cy.route(
      "GET",
      `${environment.url}${environment.user}`,
      "fixture:about/profile.json"
    );

    cy.visit("/");

    cy.get("h1").should("contain", profile.name);
  });
});
