import './css/index.css';

import angular from 'angular';
import '@uirouter/angularjs';

import config from './config';

import github from './services/github';

import home from './components/home';
import repositories from './components/repositories';
import repository from './components/repository';
import issues from './components/issues';


const app = angular.module('myApp', ['ui.router'])
config(app);
github(app);
home(app);
repositories(app);
repository(app);
issues(app);
