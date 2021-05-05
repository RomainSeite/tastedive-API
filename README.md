# tastedive-API
Simple project using Tastedive API with Cypress personnalized commands and json files

# HOW TO:

```bash
git clone https://github.com/RomainSeite/tastedive-API
npm install
npx cypress open
```

You are prompted what you like when opening the test, then it will send a request for every item in the json to the API and write a file with the results at the root of the project, and then do it for your prompt. It uses my API key and yields the maximum of results for every request : 70. It must be opened with a head.
