var app = angular.module('devmtnApp');

app.service('fourSquareAPI', function ($http, $q) {

//  *****get establishment from foursquare api*****
  this.explore = function (location, distance, price) {
    var deffered = $q.defer();
    var milesToMeters = distance * 1609.34;
    return $http.get(
      "https://api.foursquare.com/v2/venues/explore?limit=50&near=" + location + "&categoryId=4d4b7105d754a06374d81259&price=1," + price +  "&radius=" + milesToMeters + "&venuePhotos=1&client_id=&client_secret=&v=20150312"
    )
    .then(function(response) {
      deffered.resolve(response.data.response.groups[0].items)
      return deffered.promise
    })
  }

//  ***** get activity information *****
  this.activity = function (location, distance, activity) {
    var deffered = $q.defer();
    var milesToMeters = distance * 1609.34;
    return $http.get(
      "https://api.foursquare.com/v2/venues/search?limit=50&near=" + location + "&categoryId=" + activity + "&radius=" + milesToMeters + "&venuePhotos=1&client_id=&client_secret=&v=20150312"
    )
    .then(function(response) {
      console.log(response);
      deffered.resolve(response.data.response.venues);
      return deffered.promise;
    })
  }
  
})



