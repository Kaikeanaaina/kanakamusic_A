angular.module('app.dateServices', [])

.service('dateService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4000';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getDaysForViewTimer = function(){
    return $http.get(domain + '/dates/');
  };

  this.updateWeek = function(day){
    return $http.put(domain + '/dates/weekly', day);
  };

  this.updateMonth = function(day){
    return $http.put(domain + '/dates/monthly', day);
  };


//activated only when the date needs to be created again
  // this.createDate = function(){
  //   console.log(22222222);
  //   return $http.post(domain + '/dates/');
  // };

}]);