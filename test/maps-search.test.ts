import { config } from "dotenv";
import { describe } from "@jest/globals";
import { getPlaceAutocomplete } from "../src/maps-api";
import { getAutoCompleteDetails } from "../src";
// import * as fs from "fs";

config();

// Declare TomTom API Key
const apiKey = process.env.TOMTOM_API_KEY ?? "";

// These are end-to-end tests and need an api key
describe("Tomtom Places E2E Tests", () => {
  describe("getAutoCompleteDetails", () => {
    it("returns a promise", () => {
      const res = getAutoCompleteDetails("Charlotte Street");
      expect(res).toBeInstanceOf(Promise);
    });

    it("can fetch from the autocomplete api", async () => {
      const res = await getAutoCompleteDetails("Charlotte Street");

      // Uncomment this, if you like to extract sample results from the http request
      //   fs.writeFile("results.json", JSON.stringify(res, null, 2), (err) => {
      //     if (err) {
      //       console.error("Error writing to file:", err);
      //     } else {
      //       console.log("Data written to file successfully.");
      //     }
      //   });

      const { address } = res[0];
      expect(res[0]).toHaveProperty("id");
      expect(address).toHaveProperty("streetName");
      expect(address).toHaveProperty("countrySecondarySubdivision");
      expect(address).toHaveProperty("countrySubdivision");
      expect(address).toHaveProperty("countrySubdivisionName");
      expect(address).toHaveProperty("countrySubdivisionCode");
      expect(address).toHaveProperty("countryCode");
      expect(address).toHaveProperty("country");
      expect(address).toHaveProperty("countryCodeISO3");
      expect(address).toHaveProperty("freeformAddress");
    });
  });

  describe("getPlaceAutocomplete", () => {
    it("handles no results", async () => {
      const res = await getPlaceAutocomplete(apiKey, "asfasffasfasafsafs");
      expect(res).toStrictEqual([]);
    });

    it("handles error", async () => {
      await expect(getPlaceAutocomplete(apiKey, "")).rejects.toThrow();
    });

    it("handles error if invalid api key", async () => {
      await expect(getPlaceAutocomplete(undefined, "")).rejects.toThrow();
    });
  });
});
