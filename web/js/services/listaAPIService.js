angular.module("app").service("listaAPI", function($http, config){
	this.getListas = function(idCategoria) {
		return $http.get(config.baseUrl + "byTypeId/"+idCategoria).then(function(r){
			return r.data;
        });
	};

	this.addLista = function(idCategoria, nomeLista) {
		$post = {
			typeId: idCategoria,
			name: nomeLista
		};
		return $http.post(
			config.baseUrl + "saveList", 
			$post, 
			{
				headers : {
	        		'Content-Type' : undefined
		    	}
		    }
	    ).then(function (data) {
	    	return data;
	    });
	};

	this.removeLista = function(idLista) {
		return $http.get(config.baseUrl + "removeListAndItems/"+idLista).then(function () {
			return true;
		});
	};
});