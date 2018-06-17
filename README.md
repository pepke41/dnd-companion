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

## Running / Development

* `ember serve`
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

### Firebase

* Sign up for a [Firebase](https://firebase.google.com/) account
* Update `config/environment.js` to add your firebase environment variables

For more information checkout
[emberfire](https://github.com/firebase/emberfire#getting-started-with-firebase)
