﻿ 
 angular.module("userDetail", [])
		.component("userDetail", {
			templateUrl: "user-detail.html",
			controller: function() {
				var vm = this;
				vm.cambiarEmail = function() {
					vm.usuario.email = "miguel@desarrolloweb.com";
				}
			},
			bindings: {
				usuario: "=",
				numero: "@"
			}
		})