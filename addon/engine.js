import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix, podModulePrefix } = config;

const Eng = Engine.extend({
  modulePrefix,
  podModulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;
