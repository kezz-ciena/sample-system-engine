/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'sample-system-engine',
  lazyLoading: false
});
