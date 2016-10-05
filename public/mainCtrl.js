angular.module("practice").controller("mainCtrl",function($scope, mainServ,){

          $scope.test="this is a test";
        $scope.data=[{
          name :"L",
          hobby:"x",
        },{name:"N",
      hobby:"y"},];

        $scope.list=mainServ.data;

        var linksServ = function(){
          return $http({

                method:"GET",
                url:"/chat";
              }).then(function(x){
                return this.getData;
                return x;
};
        $scope.func = function ( ) {

          console.log("Hello");
var $scope.postChat=function(){
  mainServ.postChat(chat);
};
        };
//$scope.response;
        mainServ.getData()
        .then(function(response){
//testing
          //$scope.moredata = response;

        }),

});
