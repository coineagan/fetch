<div align="center"><img width='400' height='auto' src="https://github.com/user-attachments/assets/1ac114d6-e394-4014-a652-31b824370b00"></img></div>

# 📜 About

I decided to use [Node.js](https://nodejs.org/en) `v20.10.0` and JavaScript to write the tool as I figured there would be a good chance you have Node installed locally. 

I also used [zipcodes](https://github.com/davglass/zipcodes) for zip code and city/state validation, and [dotenv](https://github.com/motdotla/dotenv) to handle the API key environmental variable. For the integration tests, I used [Jest](https://jestjs.io/).

<br>

# 🔧 Setup

> ⚠️ To keep the API key out of a public repository, I used `dotenv`, which means you will have to add the environmental variable yourself in an `.env` file.

### Steps

1. Install [Node.js](https://nodejs.org/en). You can check if this is already installed with `node -v`.
2. Clone the repo: `git clone git@github.com:coineagan/fetch.git`
3. Change directory: `cd fetch`
4. Create an `.env` file: `touch .env && echo 'API_KEY=' >> .env`
5. Add your API key to the new `.env`. The file should look like this: `API_KEY=thekeygoeshere`.
6. Install dependencies: `npm i`
7. All done 🎉

<br>

# 🏃‍♀️ How to use

### Running the tool
The tool is run with an `npm` script named `geo`. The script accepts zip codes and direct city/state names as strings separated by spaces. For example:

```
npm run geo -- "60651" "Portland, OR"
```

It has error handling for zip codes and locations in the correct format but which do not exist. For example:

```
npm run geo -- "99999" "Fantasy Land, AA"
```

And it also has error handling for incorrectly formatted arguments and empty arguments. For example:

```
npm run geo -- "60651333" "Portland but not the Maine one"
```
```
npm run geo --
```

### Running the tests

The tests are also run with `npm`:

```
npm test
```
