angular.module('app.loginServices', [])

.service('loginService', function($q, $http) {
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4000';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.registerUser = function(user){
    return $http.post(domain + '/users/register', user);
  };

  this.loginUser = function(user){
    console.log(2222, user);
    return $http.post(domain + '/users/login', user);
  };

  this.logOutUser = function() {
    return $http.get(domain + '/users/logout');
  };
});