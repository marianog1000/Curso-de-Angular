
angular
	.module("app", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'home.html',
				controllerAs: 'vm',
				controller: 'appCtrl'
			})
			.when('/descargas', {
				templateUrl: 'descargas.html',
				controllerAs: 'vm',
				controller: 'appCtrl'
			})
			.when('/opciones', {
				controllerAs: 'vm',
				templateUrl: 'opciones.html',
				controller: 'appCtrl'
			})
			.otherwise({
				redirecTo: '/'
			});
	})
	.factory("descargasFactory", function() {
		var colores = ['blue', 'white', 'orange'];
		var interfaz = {
			getColores: function() {
				return colores;
			},
			nuevoColor: function(nuevo) {
				colores.push(nuevo);
			},
			borrarColores: function() {
				colores = [];
			}

		}
		return interfaz;
	})
	.controller('appCtrl', function(descargasFactory) {
		var vm = this;
		vm.getColores = function() {
			return descargasFactory.getColores();
		}
		vm.guardarColor = function(color) {
			descargasFactory.nuevoColor(color);
		}

		vm.borrarColores = function() {
			descargasFactory.borrarColores();
		}

	})
	.controller('navCtrl', function($location) {
		var map = this;
		map.estoy = function(ruta) {
			return $location.path() == ruta;
		}
	});
	