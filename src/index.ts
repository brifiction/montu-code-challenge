import { getPlaceAutocomplete } from "./maps-api";
import { COUNTRY_ISO_CODES } from "./utils/constants";

export async function getAutoCompleteDetails(address: any): Promise<any> {
  const apiKey = process.env.TOMTOM_API_KEY;
  const countrySet = COUNTRY_ISO_CODES.AUS; // TODO This could be an environment var, func param etc

  // get autocomplete results
  const res = getPlaceAutocomplete(apiKey, address, countrySet).then(
    (autocompleteResults) => autocompleteResults
  );
  // loop over and get details and map results
  return res;
}
