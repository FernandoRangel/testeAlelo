angular.module("app").config(function($routeProvider) {
	$routeProvider.when("/categoria", {
		templateUrl: "view/categoria/listagem.html",
		controller: "categoriaCtrl",
		resolve: {
			categorias: function(categoriaAPI) {
				return categoriaAPI.getCategorias();
			}
		}
	});

	$routeProvider.when("/lista/:idCategoria/:nomeCategoria", {
		templateUrl: "view/lista/listagem.html",
		controller: "listaCtrl"
	});

	$routeProvider.when("/item/:idLista/:nomeLista", {
		templateUrl: "view/item/listagem.html",
		controller: "itemCtrl"
	});

	$routeProvider.otherwise({redirectTo: "/categoria"});
});