import { config } from "dotenv";
import { describe } from "@jest/globals";
import { getPlaceAutocomplete } from "../src/maps-api";
import { getAutoCompleteDetails } from "../src";

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
      const firstRes = res[0].address; // TODO don't forget `address` prop is accessed in first key item of array of objects..
      //expect(firstRes).toHaveProperty("placeId"); // TODO Error: no such property in `address` prop
      //expect(firstRes).toHaveProperty("streetNumber");  // TODO Error: no such property in `address` prop
      expect(firstRes).toHaveProperty("countryCode");
      expect(firstRes).toHaveProperty("country");
      expect(firstRes).toHaveProperty("freeformAddress");
      expect(firstRes).toHaveProperty("municipality");
    });
  });

  describe("getAutoCompleteDetails", () => {
    it("returns a promise", () => {
      const res = getAutoCompleteDetails("Charlotte Street");
      expect(res).toBeInstanceOf(Promise);
    });

    it("can fetch from the autocomplete api", async () => {
      const res = await getAutoCompleteDetails("Charlotte Street");
      const { address, id } = res[0]; // TODO don't forget `address` prop is accessed in first key item of array of objects..
      //expect(firstRes).toHaveProperty("placeId"); // TODO Error: no such property in `address` prop, nullable prop based on country (e.g. US)?
      //expect(firstRes).toHaveProperty("streetNumber");  // TODO Error: no such property in `address` prop, nullable prop based on country (e.g. US)?
      expect(res[0]).toHaveProperty("id");
      expect(address).toHaveProperty("streetName");
      expect(address).toHaveProperty("localName");
      expect(address).toHaveProperty("countrySubdivision");
      expect(address).toHaveProperty("countryCode");
      expect(address).toHaveProperty("country");
      expect(address).toHaveProperty("freeformAddress");
      expect(address).toHaveProperty("municipality");
    });
  });

  describe("getPlaceAutocomplete", () => {
    it("handles no results", async () => {
      const res = await getPlaceAutocomplete(apiKey, "asfasffasfasafsafs");
      expect(res).toStrictEqual([]);
    });

    it("handles error", async () => {
      expect(getPlaceAutocomplete(apiKey, "")).rejects.toThrow();
    });
  });
});
