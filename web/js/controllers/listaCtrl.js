angular.module("app").controller('listaCtrl', function($scope, $location, $routeParams, listaAPI) {
	listaAPI.getListas($routeParams.idCategoria).then(function(data) {
		$scope.listas = data;
	});

	$scope.nomeCategoria = $routeParams.nomeCategoria;

	$("#success-alert").hide();
	$("#remove-alert").hide();
	

	$scope.verItens = function(idLista, nomeLista) {
		$location.path("/item/"+idLista+"/"+nomeLista);
	};

	$scope.criarLista = function () {
		listaAPI.addLista($routeParams.idCategoria, $scope.nomeNovaLista).then(function () {
			$("#modalNovaLista").modal("hide");
			listaAPI.getListas($routeParams.idCategoria).then(function(data) {
				$scope.listas = data;
			});
			$("#success-alert").fadeTo(2000, 1000).slideUp(500, function(){
				$("#success-alert").slideUp(500);
            });
		});
	}

	$scope.removeLista = function (idLista, nomeLista) {
		var result = confirm("Você deseja excluir a lista "+ nomeLista + "?");
		if (result) {
			listaAPI.removeLista(idLista).then(function (a) {
				listaAPI.getListas($routeParams.idCategoria).then(function(data) {
					$scope.listas = data;
				});
			});

			$("#remove-alert").fadeTo(2000, 1000).slideUp(500, function(){
				$("#remove-alert").slideUp(500);
            });
		}
	}
});