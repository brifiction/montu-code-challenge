import { GetAutoCompleteDetailsResponseSchema } from "../src/lib/types";
import { COUNTRY_ISO_CODES } from "../src/utils/constants";

describe("GetAutoCompleteDetailsResponseSchema", () => {
  // Sample data that adheres to the GetAutoCompleteDetailsResponse type
  const sampleAutocompleteResponse: GetAutoCompleteDetailsResponseSchema = {
    type: "Street",
    id: "EcePYZ-uG3vIMUf520qT5A",
    score: 4.6116523743,
    address: {
      streetName: "Charlotte Street",
      countrySecondarySubdivision: "Central Coast Queensland",
      countrySubdivision: "Queensland",
      countrySubdivisionName: "Queensland",
      countrySubdivisionCode: "QLD",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: COUNTRY_ISO_CODES.AUS,
      freeformAddress: "Charlotte Street, Central Coast QueenslandQueensland,",
    },
    position: {
      lat: -23.162896,
      lon: 150.761297,
    },
    viewport: {
      topLeftPoint: {
        lat: -23.16286,
        lon: 150.76096,
      },
      btmRightPoint: {
        lat: -23.16292,
        lon: 150.76157,
      },
    },
  };

  it("should have correct properties", () => {
    // Check if all properties are present
    expect(sampleAutocompleteResponse).toHaveProperty("type");
    expect(sampleAutocompleteResponse).toHaveProperty("id");
    expect(sampleAutocompleteResponse).toHaveProperty("score");
    expect(sampleAutocompleteResponse).toHaveProperty("address");
    expect(sampleAutocompleteResponse).toHaveProperty("position");
    expect(sampleAutocompleteResponse).toHaveProperty("viewport");

    // Check address properties
    expect(sampleAutocompleteResponse.address).toHaveProperty("streetName");
    expect(sampleAutocompleteResponse.address).toHaveProperty(
      "countrySecondarySubdivision"
    );
    expect(sampleAutocompleteResponse.address).toHaveProperty(
      "countrySubdivision"
    );
    expect(sampleAutocompleteResponse.address).toHaveProperty(
      "countrySubdivisionName"
    );
    expect(sampleAutocompleteResponse.address).toHaveProperty(
      "countrySubdivisionCode"
    );
    expect(sampleAutocompleteResponse.address).toHaveProperty("countryCode");
    expect(sampleAutocompleteResponse.address).toHaveProperty("country");
    expect(sampleAutocompleteResponse.address).toHaveProperty(
      "countryCodeISO3"
    );
    expect(sampleAutocompleteResponse.address).toHaveProperty(
      "freeformAddress"
    );

    // Check position properties
    expect(sampleAutocompleteResponse.position).toHaveProperty("lat");
    expect(sampleAutocompleteResponse.position).toHaveProperty("lon");

    // Check viewport properties
    expect(sampleAutocompleteResponse.viewport).toHaveProperty("topLeftPoint");
    expect(sampleAutocompleteResponse.viewport).toHaveProperty("btmRightPoint");
  });

  it("should have correct property types", () => {
    // Check property types
    expect(typeof sampleAutocompleteResponse.type).toBe("string");
    expect(typeof sampleAutocompleteResponse.id).toBe("string");
    expect(typeof sampleAutocompleteResponse.score).toBe("number");

    // Check address property types
    expect(typeof sampleAutocompleteResponse.address.streetName).toBe("string");
    expect(
      typeof sampleAutocompleteResponse.address.countrySecondarySubdivision
    ).toBe("string");
    expect(typeof sampleAutocompleteResponse.address.countrySubdivision).toBe(
      "string"
    );
    expect(
      typeof sampleAutocompleteResponse.address.countrySubdivisionName
    ).toBe("string");
    expect(
      typeof sampleAutocompleteResponse.address.countrySubdivisionCode
    ).toBe("string");
    expect(typeof sampleAutocompleteResponse.address.countryCode).toBe(
      "string"
    );
    expect(typeof sampleAutocompleteResponse.address.country).toBe("string");
    expect(typeof sampleAutocompleteResponse.address.countryCodeISO3).toBe(
      "string"
    );
    expect(typeof sampleAutocompleteResponse.address.freeformAddress).toBe(
      "string"
    );

    // Check position property types
    expect(typeof sampleAutocompleteResponse.position.lat).toBe("number");
    expect(typeof sampleAutocompleteResponse.position.lon).toBe("number");

    // Check viewport property types
    expect(typeof sampleAutocompleteResponse.viewport.topLeftPoint.lat).toBe(
      "number"
    );
    expect(typeof sampleAutocompleteResponse.viewport.topLeftPoint.lon).toBe(
      "number"
    );
    expect(typeof sampleAutocompleteResponse.viewport.btmRightPoint.lat).toBe(
      "number"
    );
    expect(typeof sampleAutocompleteResponse.viewport.btmRightPoint.lon).toBe(
      "number"
    );
  });
});
