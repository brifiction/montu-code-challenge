# montu-code-challenge

I, Brian Ng have attempted the Montu BE code challenge. Please review the codebase and note that the TomTom API Key has been redacted :)

## Getting started

Run `yarn`, then execute tests with the following script options:

1. `yarn test` - without code coverage
2. `yarn test:coverage` - with code coverage

## Summary

The fuzzy search results and API key (mostly) working as expected. However, there are some unusual properties missing from every returned result variation, mostly based on the provided address input.

Regardless, further reading of the TomTom API documentation may reveal answers related to their unusual API response schema and its consistency - else, let's chalk it up to "expected behaviour" regarding the API response received for time being.

And of course, this will be elaborated further during the code challenge debrief session.
