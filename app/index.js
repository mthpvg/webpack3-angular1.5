require('./css/index.css');

const angular = require('angular');

const app = angular.module('myApp', [])
require('./components/hello-world')(app);
