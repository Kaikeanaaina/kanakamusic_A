angular.module('app.recordLabelServices', [])

.service('recordLabelService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4000';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getAllRecordLabels = function(){
    return $http.get(domain + '/recordLabels');
  };

  this.addRecordLabel = function(recordLabel){
    return $http.post(domain + '/recordLabels', recordLabel);
  };

  this.getRecordLabel = function(recordLabelName){
    return $http.get(domain + '/recordLabels/' + recordLabelName);
  };

  this.editRecordLabel = function(recordLabelPath, recordLabel){
    return $http.put(domain + '/recordLabels/' + recordLabelPath, recordLabel);
  };

  this.deleteRecordLabel = function(recordLabel){
    return $http.delete(domain + '/recordLabels/' + recordLabel.id, recordLabel);
  };

}]);