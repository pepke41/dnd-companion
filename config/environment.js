/* eslint-env node */
"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "curse-of-strahd-companion",
    environment,
    rootURL: "/",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: process.env["FIREBASE_API_KEY"],
      authDomain: `${process.env["FIREBASE_PROJECT_ID"]}.firebaseapp.com`,
      databaseURL: `https://${process.env["FIREBASE_PROJECT_ID"]}.firebaseio.com`,
      storageBucket: `${process.env["FIREBASE_PROJECT_ID"]}.appspot.com`
    },
    torii: {
      sessionServiceName: "session"
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
  }

  if (environment === "production") {
    ENV.locationType = "hash";
    ENV.rootURL = "/dnd-companion/";
    // here you can enable a production-specific feature
  }

  return ENV;
};
