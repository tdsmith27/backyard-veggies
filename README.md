# backyard-veggies

Welcome to backyard-veggies, a single page application built with React and Node with Express. This app allows users to search for recipes using locally seasonal ingredients in US States in any month of the year.

## Live Deployed App

http://backyard-veggies.com

## Table of Contents

1. [App Usage](#app-usage)
2. [Developer Usage](#developer-usage)
   <br>a. [Installation](#installation)
   <br>b. [Database Setup](#database-setup)
   <br>c. [API Setup](#to-set-up-api-access)
   <br>d. [For Use in Development](#for-use-in-development)

## App Usage

<iframe class="imgur-embed" width="100%" height="798" frameborder="0" src="https://i.imgur.com/mycVTxz.gifv#embed"></iframe>

## Developer Usage

#### Prerequisites

This application is built with Node and will require Node to be installed to run. To install Node, follow the [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) <br>
<sub>_installing with nvm recommended_</sub>

#### Installation

1. Navigate to [repo](https://github.com/tdsmith27/backyard-veggies)
2. Clone locally using `git clone https://github.com/tdsmith27/backyard-veggies.git`
3. Install dependencies with `npm install`

#### Database and API setup

This app uses an Atlas-hosted mongoDB cluster and the edamam recipe API.

##### To set up the database

1. Navigate to mongodb.com/cloud/atlas in your web browser and sign in or create an account
2. Create a new project
3. Within this project, build a new DB cluster
4. Click the "Connect" button for the newly created cluster
5. After making sure to whitelist the IP address that your server will run from, create a MongoDB user and click "Choose a connection method"
6. Click "Connect Your Application" to generate a connection string
7. In your local repo, navigate to the file titled sample.env and rename it or duplicate it as .env
8. In the .env file, complete the DB_USR and DB_PASS fields with the username and password created from step 5
9. Complete the DB_STRING field with everything between the @ and ? in the generated connection string from step 6
10. Seed your database with `node db/seedVeggies.js`<br>
    <sub>_Be patient, this step could take several minutes_</sub>

##### To set up API access

1. Navigate to developer.edamam.com in your web browser
2. Click "sign up" in the Recipe Search box and follow instructions to create an edamam developer account
3. From your API Developer Dashboard create a new application for use with the Recipe Search API
4. Add your "Application ID" and "Application Key" to the API_ID and API_KEY fields in your local .env file

#### For use in development

<sub>From the root directory of your locally cloned repo:</sub>

1. Build with `npm run watch`
2. Start server with `npm run dev`
3. Navigate to localhost:3000 to view development version of app
