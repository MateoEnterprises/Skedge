var app = angular.module('devmtnApp', []);

app.controller('devCont', function ($scope, fourSquareAPI) {
  
  $scope.test = 'test';
  
//  *****Gets data from FourSquare*****
  $scope.queryFourSquare = function () {
    fourSquareAPI.explore($scope.location, $scope.distance)
      .then(function(response){
        $scope.parsedData = response; //this is an array of data
      
      })
    
  }
  
  
});