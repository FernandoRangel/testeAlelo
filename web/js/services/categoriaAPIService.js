angular.module("app").service("categoriaAPI", function($http, config){
	this.getCategorias = function() {
		return $http.get(config.baseUrl + "listTypes").then(function(r){
			return r.data;
        });
	};
});