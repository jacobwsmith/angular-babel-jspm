// Main Application Dependencies
import normalize from 'normalize.css';
import angular from 'angular';
import appCtrl from './app'; // gets the app controller
import feature1 from './feature1/feature1'; // gets the feature 1 controller
import feature2 from './feature2/feature2'; // gets the feature 2 controller

// Vanilla javascript to add the app, controller and the template
// This allows us to keep no logic in the parent html
// TODO: Test this on build
var tpl = "<div ng-include=\"'/app/app.html'\"></div>";
var div = document.createElement('div');
div.innerHTML = '<div ng-app="app">'+tpl+'</div>';
document.getElementsByTagName('body')[0].appendChild(
	div
);

// Main Application Angular Dependencies
angular
	.module('app', [])
	.controller('app', appCtrl)
	.controller('feature1', feature1)
	.controller('feature2', feature2)


// DOES THIS MAKE SENSE???
// I THINK IT MAKES MORE SENSE TO INITIALIZE THE CONTROLLERS IN THE