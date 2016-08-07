angular.module('app.songServices', [])

.service('songService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4000';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getAllSongs = function(){
    return $http.get(domain + '/songs');
  };

  this.addSong = function(song){
    return $http.post(domain + '/songs', song);
  };

  this.getSong = function(songTitle){
    return $http.get(domain + '/songs/' + songTitle);
  };

  this.editSong = function(songPath, song){
    return $http.put(domain + '/songs/' + songPath, song);
  };

  this.editSongsByArtist = function(artist){
    return $http.put(domain + '/songs/ByArtistId/' + artist.id, artist);
  };

  this.editSongsByAlbum = function(album){
    return $http.put(domain + '/songs/ByAlbumId/' + album.id, album);
  }

  this.getSpecificSongsFromArtist = function(ArtistId){
    return $http.get(domain + '/songs/ofArtist/' + ArtistId);
  };

  this.getSpecificSongsFromAlbum = function(AlbumId){
    return $http.get(domain + '/songs/ofAlbum/' + AlbumId);
  };

  this.deleteSong = function(song){
    return $http.delete(domain + '/songs/' + song.id, song);
  };

  this.deleteSongByArtist = function(artist){
    return $http.delete(domain + '/songs/ByArtistId/' + artist.id, artist );
  }

  this.deleteSongsByAlbum = function(album){
    return $http.delete(domain + '/songs/ByAlbumId/' + album.id, album);
  }

}]);

