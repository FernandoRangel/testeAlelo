angular.module("app").service("itemAPI", function($http, config){
	this.getItens = function(idLista) {
		return $http.get(config.baseUrl + "getListById/"+idLista).then(function(r){
			angular.forEach(r.data, function(value, key) {
				(value.status == 1) ? value.status = "Online" : value.status = "Offline"
			});
			return r.data;
        });
	};

	this.addItem = function(idLista, nomeItem) {
		$post = {
			listId: idLista,
			name: nomeItem
		};
		return $http.post(
			config.baseUrl + "saveListItem", 
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

	this.removeItem = function(idItem) {
		return $http.get(config.baseUrl + "removeItem/"+idItem).then(function () {
			return true;
		});
	};
});