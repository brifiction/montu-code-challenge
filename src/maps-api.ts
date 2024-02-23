import axios from "axios";
import { COUNTRY_ISO_CODES } from "./utils/constants";

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(
  key: string | undefined,
  address: string,
  countrySet: COUNTRY_ISO_CODES = COUNTRY_ISO_CODES.AUS
) {
  const autocomplete = await axios.get(
    `https://api.tomtom.com/search/2/search/${address}.json`,
    {
      params: {
        key,
        limit: 100,
        countrySet,
      },
    }
  );

  return autocomplete.data.results;
}
