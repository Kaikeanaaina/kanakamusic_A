angular.module('app.albumServices', [])

.service('albumService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4000';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getAllAlbums = function(){
    return $http.get(domain + '/albums');
  };

  this.addAlbum = function(album){
    return $http.post(domain + '/albums', album);
  };

  this.getAlbum = function(albumName){
    return $http.get(domain + '/albums/' + albumName);
  };

  this.getSpecificAlbums = function(ArtistId){
    return $http.get(domain + '/albums/ofArtist/' + ArtistId);
  };

  this.editAlbum = function(albumPath, album){
    return $http.put(domain + '/albums/' + albumPath, album);
  };

  this.deleteAlbum = function(album){
    return $http.delete(domain + '/albums/' + album.id, album);
  };

}]);