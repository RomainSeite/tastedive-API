# tastedive-API
Simple project using Tastedive API with Cypress personnalized commands and json files using cucumber preprocessor

# HOW TO:

Write your tastes in **examples** in cypress/integration/search.feature, then what type you want to find for every taste : band, game, podcast..
This will create a folder **results** in the root of the project with a file for every search, containing the results.
This will write up to 70 results for every search, since the limit parameter of the API is limited at 70.
It is possible to change the default parameter **Infos** to 1 to get more info about every result (always at 0 for now)

Limit, Infos and API key parameters can't be changed for every request but you can do it in the code.
