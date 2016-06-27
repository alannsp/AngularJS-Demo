// Code goes here

var app=angular.module("app",['ngRoute']);

app.config(['$routeProvider',
function($routeProvider){

  $routeProvider
  .when('/orderdetail',{
    templateUrl:'orderdetail.html',
    controller:"deletecntrl"
  })
  .when('/new',{
    templateUrl:'new.html',
    controller:"newcntrl"
  })
  .when('/edit',{
    templateUrl:'edit.html',
    controller:"editcntrl"
  })

}])

app.controller("listcntrl", function($scope, $http, $rootScope) {
  $http.get("data.json").success(function(data) {
      $rootScope.info = data;
  })
})
app.controller("deletecntrl",function($scope,$rootScope){

    $scope.delete=function(record){
      var index=$rootScope.info.indexOf(record);
      $rootScope.info.splice(index,1);
      alert("Data deleted successfully");
      }
	$scope.orderByMe = function(x) {
    $scope.myOrder = x;
	}
    $scope.hold=function(record){
      $rootScope.temp=record;
    }
     
})
app.controller("newcntrl",function($scope,$rootScope){
  $scope.new=function(){
    var index=$rootScope.info.length;
    var newid=$rootScope.info[index-1].id+1;
    var newelement={"id":newid,"description":$scope.desc,"amount":$scope.amount};
    $rootScope.info.push(newelement);
    alert("new data added successfully");
  }
})

app.controller("editcntrl",function($scope,$rootScope){
  $scope.desc=$rootScope.temp.description;
  $scope.amount=$rootScope.temp.amount;
  $scope.edit=function(){
    var index=$rootScope.info.indexOf($rootScope.temp);
    $rootScope.info[index].description=$scope.desc;
    $rootScope.info[index].amount=$scope.amount;
    alert("Data modified successfully");
  }
})



//http://172.17.28.109:8080/orders