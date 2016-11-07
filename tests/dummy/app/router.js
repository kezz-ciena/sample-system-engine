import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.mount('sample-system-engine',{
    as: 'system'
  })
  this.nav('demo', {
    path: '/'
  }, function () {
    this.category('Category 1', {
      pack: 'dummy',
      icon: 'sample'
    }, function () {
      this.column('Column 1', {
        color: '#009eef'
      }, function () {
    this.link('metrics', {
      url: 'system/metrics'
    })
  })
})
})

})
export default Router
