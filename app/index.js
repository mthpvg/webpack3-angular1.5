require('./css/index.css');

const angular = require('angular');

const app = angular.module('myApp', [])
require('./services/github')(app);
require('./components/repositories')(app);
