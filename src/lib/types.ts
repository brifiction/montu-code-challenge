import { COUNTRY_ISO_CODES } from "../utils/constants";

export type GetAutoCompleteDetailsResponseSchema = {
  type: string;
  id: string;
  score: number;
  address: {
    placeId?: string;
    streetNumber?: string;
    streetName: string;
    countrySecondarySubdivision: string;
    countrySubdivision: string;
    countrySubdivisionName: string;
    countrySubdivisionCode: string;
    countryCode: COUNTRY_ISO_CODES;
    country: string;
    countryCodeISO3: string;
    freeformAddress: string;
    municipality?: string;
    municipalitySubdivision?: string;
    localName?: string;
  };
  position: {
    lat: number;
    lon: number;
  };
  viewport: {
    topLeftPoint: {
      lat: number;
      lon: number;
    };
    btmRightPoint: {
      lat: number;
      lon: number;
    };
  };
};
