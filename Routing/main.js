﻿var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

angularRoutingApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})
		.when('/acerca', {
			templateUrl: 'pages/acerca.html',
			controller: 'aboutController'
		})
		.when('/contacto', {
			templateUrl: 'pages/contacto.html',
			controller: 'contactController'
		})
		.otherwise({
			redirecTo: '/'
		});


	});

	angularRoutingApp.controller('mainController', function($scope) {
		$scope.message = '¡Hola Mundo!';
	});

	angularRoutingApp.controller('aboutController', function($scope) {
		$scope.message = 'Esta es la Página de "Acerca de ...."';
	});
	angularRoutingApp.controller('contactController', function($scope) {
		$scope.message = 'Esta es la Página de "Contacto, aquí podemos poner un formulario"';
	});