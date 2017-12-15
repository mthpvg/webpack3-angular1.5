import './css/index.css';

import angular from 'angular';
import github from './services/github';
import repositories from './components/repositories';

const app = angular.module('myApp', [])
github(app);
repositories(app);
