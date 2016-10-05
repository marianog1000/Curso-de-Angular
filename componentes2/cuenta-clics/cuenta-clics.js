	
angular
	.module("cuentaClics", [])
	.controller('CuentaClicsController', function() {
		var vm = this;
		vm.numClics = 0;
		vm.incrementarClics = function() {
			vm.numClics++;
		}


	})	
	.component('cuentaClics', {
		templateUrl: 'cuenta-clics/cuentaClics.html', 
		controller: 'CuentaClicsController',
		controllerAs: 'vm'
	});
	