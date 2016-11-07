import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  this.route('metrics');
  this.route('logging');
  this.route('monitoring')
})
