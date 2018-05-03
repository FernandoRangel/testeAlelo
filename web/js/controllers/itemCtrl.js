angular.module("app").controller('itemCtrl', function($scope, $location, $routeParams, itemAPI) {
	
	itemAPI.getItens($routeParams.idLista).then(function(data) {
		$scope.itens = data.items;
	});

	$scope.nomeLista = $routeParams.nomeLista;

	$("#success-alert").hide();
	$("#remove-alert").hide();

	$scope.criarItem = function () {
		itemAPI.addItem($routeParams.idLista, $scope.nomeNovoItem).then(function () {
			$("#modalNovoItem").modal("hide");
			itemAPI.getItens($routeParams.idLista).then(function(data) {
				$scope.itens = data.items;
			});
			$("#success-alert").fadeTo(2000, 1000).slideUp(500, function(){
				$("#success-alert").slideUp(500);
            });
		});
	}

	$scope.removeItem = function (idItem, nomeItem) {
		var result = confirm("Você deseja excluir o item "+ nomeItem + "?");
		if (result) {
			itemAPI.removeItem(idItem).then(function (a) {
				itemAPI.getItens($routeParams.idLista).then(function(data) {
					$scope.itens = data.items;
				});
			});

			$("#remove-alert").fadeTo(2000, 1000).slideUp(500, function(){
				$("#remove-alert").slideUp(500);
            });
		}
	}
});