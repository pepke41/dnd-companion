import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.authenticatedRoute('player-handbook');
  this.route('players');
  this.route('characters');
  this.route('logged-out');
});

export default Router;
