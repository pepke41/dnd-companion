# curse-of-strahd-companion

This project is an online extension of the player's handbook used in Dungeons and Dragons. Currently this project keeps track of player notes (friends, foes, and general info) and character information. The project uses firebase, with ember-fire, for authentication and database storage. The UI is designed with ember paper, and ember trix editor for input.

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd curse-of-strahd-companion`
* `npm install`
* Setting up Firebase
  * Sign up for a [Firebase](https://firebase.google.com/) account
  * Create a new Firebase app from the [Firebase Console](https://console.firebase.google.com)
  * Enable Authentication
    * Under the Develop Section select _Authentication_
    * Click on the _Sign-in Method_
    * Click on the edit icon on the Google section
    * Enable Google Authentication
  * Enable Storage
    * Under the Develop Section select _Database_
    * Choose the _Realtime Database_ option and click _Get Started_
    * Select _Start in test mode_ and click enable
  * Set up local authentication
    * Find the gear in the top left next to _Project Overview_
    * Grab the _Project ID_ and _Web API Key_ you'll need those for your Firebase environment variables


## Running / Development

```
FIREBASE_API_KEY="your_firebase_api_key" FIREBASE_PROJECT_ID="your_firebase_project_id" npm run start
```

* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

