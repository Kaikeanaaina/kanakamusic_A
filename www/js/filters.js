// angular.module('myApp')
//   .filter('titleFilter', function(){
//     return function(collection, year){
//       return collection.filter(function(item){
//         return item.year < year;
//       });
//     };
//   });

angular.module('app.Filters',[])
  .filter('albumFilter', function(){
    return function(collection, ArtistId){
      return collection.filter(function(album){

          return album.ArtistId===ArtistId;

      });
    };
  });