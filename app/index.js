import './css/index.css';

import angular from 'angular';
import '@uirouter/angularjs';

import config from './config';

import github from './services/github';

import repositories from './components/repositories';
import repository from './components/repository';


const app = angular.module('myApp', ['ui.router'])
config(app);
github(app);
repositories(app);
repository(app);
