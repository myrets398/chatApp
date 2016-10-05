angular.module("practice").service("mainServ", function($http){

  this.data = [1,2,4];
  this.getData = function(){
    return $http({

          method:"GET",
          url:"/chat"
        }).then(function(x){

          return x;});};
var API_method_function = function(){
  this.getData;
    $http.(return response);
};
        });
      };

});
