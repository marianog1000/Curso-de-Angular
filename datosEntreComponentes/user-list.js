
	angular.module("userList", [])
		.component("userList", {
			templateUrl: "user-list.html",
			controller: function($http) {
				var vm = this;

				$http.get("http://jsonplaceholder.typicode.com/users")
					.then(function(respuesta) {
      					vm.usuarios = respuesta.data;
					})
				}
		});