
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
	.controller('appCtrl', function() {
		var vm = this;
		vm.colores = ['green', 'blue', 'orange'];

	})
	.controller('navCtrl', function($location) {
		var map = this;
		map.estoy = function(ruta){
			return $location.path() == ruta;
		}
	});
	