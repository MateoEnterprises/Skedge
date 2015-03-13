var app = angular.module('devmtnApp');

app.service('fourSquareAPI', function ($http, $q) {

//  *****get data from foursquare api*****
  this.explore = function (location, distance) {
    var deffered = $q.defer();
    return $http.get(
//      "https://api.foursquare.com/v2/venues/explore?near=" + location + "&section=food"+ "&radius=" + distance + "client_id=KQUHSKE204IWZWEUQOSQBAHTB5EQZLIJ0MNEZMXVPYZTEZI5&client_secret=BTDWPJFAPDKNWXBIGNXVEILSKGO2E2PZEWOX1AJWVD5TDSDJ&v=20150101"
      "https://api.foursquare.com/v2/venues/explore?limit=50&near=" + location + "&section=restaurant,topPicks&raduis=" + distance + "&client_id=KQUHSKE204IWZWEUQOSQBAHTB5EQZLIJ0MNEZPYZTEZI5&client_secret=BTDWPJFAPDKNWXVEILSKGO2E2PZEWOX1AJWVD5TDSDJ&v=20150312"
    )
    .then(function(response) {
      console.log(response);
      deffered.resolve(response.data.response.groups[0].items)
      return deffered.promise
    })
  }

})



