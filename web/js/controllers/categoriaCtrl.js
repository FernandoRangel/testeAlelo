angular.module("app").controller('categoriaCtrl', function($scope, $location, categoriaAPI, categorias) {
	$scope.categorias = categorias;

	$scope.verListas = function(idCategoria, nomeCategoria) {
		$location.path("/lista/"+idCategoria+"/"+nomeCategoria);
	};
});