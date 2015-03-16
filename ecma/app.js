var app = angular.module('devmtnApp', []);

app.controller('devCont', function ($scope, fourSquareAPI) {
  
  $scope.test = 'test';
  $scope.getActivity = false;
  
//  *****Gets data from FourSquare*****
  $scope.queryFourSquare = function () {
    fourSquareAPI.explore($scope.location, $scope.distance, $scope.price)
    .then(function(response){
      $scope.establishments = response; //this is an array of data
//      var randomNumber = ;
      $scope.randomEstablishment = $scope.establishments[Math.floor(Math.random() * ($scope.establishments.length))];
    })
    
    if ($scope.getActivity) {
      fourSquareAPI.activity($scope.location, $scope.distance, $scope.activity)
      .then(function(response){
      $scope.activities = response; //this is an array of data
      $scope.randomActivity = $scope.activities[Math.floor(Math.random() * ($scope.activities.length))];
      console.log($scope.randomActivity.name)
      })
    }
  }
  
});