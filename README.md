## Setting up the backend application

1. Create a folder where you want to store your backend files.
2. `npm init -y`: Create the initial package.json
3. `npm i express dotenv axios`
  - Express package.
  - dotenv packages: allows us to load the environment variables from the .env file.
  - axios: To fetch the data from a URL.
4. Create a *index.js* file which is our starting file in the app.
5. Create *.gitignore, .env* files.


## Run the backend application

1. Open a terminal.
3. run npm i to install all dependencies.
4. Type node `index.js` and press enter.
5. Go to your browser and paste this URL for all the countries.
  - http://localhost:3000/api/countries
6. For detailed information about a country using its code:
  - http://localhost:3000/api/country/:code