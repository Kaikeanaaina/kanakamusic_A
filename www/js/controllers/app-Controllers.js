angular.module('app.Controllers', [])

.controller('kanakaMusicCtrl', function( $scope,$state,$location, $ionicPopup, $rootScope, songService, artistService, albumService, recordLabelService, loginService) {

  $scope.data = {};

  $scope.login = function() {
    loginService.loginUser($scope.data).success(function(data) {
        $rootScope.loggedInUser = data;
        if($rootScope.loggedInUser.type === "haku"){
          return $state.go('adminMenu.home.HawaiianSong');
        }
        if($rootScope.loggedInUser.type === "user"){
          return $state.go('menu.home.hawaiianSong');
        }
        else{
          console.log('error');
        }
    }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
            title: 'Login failed!',
            template: 'Please check your credentials!'
        });
    });
  };

  $scope.registerUser = function(user){
    $scope.data = {};
    var myPopup = $ionicPopup.show({
      template: ' Enter Email <input type="text" ng-model="data.userEmail"><br> Enter Confirm Email <input type="text" ng-model="data.confirmUserEmail"> <br> Enter Password <input type="password" ng-model="data.userPassword"><br>Enter Confirm Password  <input type="password" ng-model="data.confirmPassword" > ',
      title: 'Register User',
      subTitle: 'Please use normal things',
      scope: $scope,
      buttons: [{
        text: 'Cancel'
      }, {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.userPassword || !$scope.data.userEmail) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data;
          }
        }
      }, ]
    });

    myPopup.then(function(res) {
      if (res) {
        if(res.userEmail === res.confirmUserEmail && res.userPassword == res.confirmPassword){
          console.log('credentials matched');
          //this is where we register
          //service
          loginService.registerUser(res)
          .success(function(data){
            if(!data.hasOwnProperty('email')){
              return $state.go('menu.login');
            } else{
              $rootScope.loggedInUser = data;
              return $state.go('menu.home.hawaiianSong');
            }
          });
        } else {
          console.log('credentials not matched');
          // this is where the error message will return
        }
      } else {
        console.log('Enter credentials');
      }
    });
  };

  $scope.Song = [];
  $scope.NumberContemporarySong = [];
  $scope.AContemporarySong = [];
  $scope.BContemporarySong = [];
  $scope.CContemporarySong = [];
  $scope.DContemporarySong = [];
  $scope.EContemporarySong = [];
  $scope.FContemporarySong = [];
  $scope.GContemporarySong = [];
  $scope.HContemporarySong = [];
  $scope.IContemporarySong = [];
  $scope.JContemporarySong = [];
  $scope.KContemporarySong = [];
  $scope.LContemporarySong = [];
  $scope.MContemporarySong = [];
  $scope.NContemporarySong = [];
  $scope.OContemporarySong = [];
  $scope.PContemporarySong = [];
  $scope.QContemporarySong = [];
  $scope.RContemporarySong = [];
  $scope.SContemporarySong = [];
  $scope.TContemporarySong = [];
  $scope.UContemporarySong = [];
  $scope.VContemporarySong = [];
  $scope.WContemporarySong = [];
  $scope.XContemporarySong = [];
  $scope.YContemporarySong = [];
  $scope.ZContemporarySong = [];

  $scope.NumberHawaiianSong = [];
  $scope.AHawaiianSong = [];
  $scope.BHawaiianSong = [];
  $scope.CHawaiianSong = [];
  $scope.DHawaiianSong = [];
  $scope.EHawaiianSong = [];
  $scope.FHawaiianSong = [];
  $scope.GHawaiianSong = [];
  $scope.HHawaiianSong = [];
  $scope.IHawaiianSong = [];
  $scope.JHawaiianSong = [];
  $scope.KHawaiianSong = [];
  $scope.LHawaiianSong = [];
  $scope.MHawaiianSong = [];
  $scope.NHawaiianSong = [];
  $scope.OHawaiianSong = [];
  $scope.PHawaiianSong = [];
  $scope.QHawaiianSong = [];
  $scope.RHawaiianSong = [];
  $scope.SHawaiianSong = [];
  $scope.THawaiianSong = [];
  $scope.UHawaiianSong = [];
  $scope.VHawaiianSong = [];
  $scope.WHawaiianSong = [];
  $scope.XHawaiianSong = [];
  $scope.YHawaiianSong = [];
  $scope.ZHawaiianSong = [];

  $scope.Artist = [];
  $scope.Artists = [];
  $scope.NumberHawaiianArtist = [];
  $scope.AHawaiianArtist = [];
  $scope.BHawaiianArtist = [];
  $scope.CHawaiianArtist = [];
  $scope.DHawaiianArtist = [];
  $scope.EHawaiianArtist = [];
  $scope.FHawaiianArtist = [];
  $scope.GHawaiianArtist = [];
  $scope.HHawaiianArtist = [];
  $scope.IHawaiianArtist = [];
  $scope.JHawaiianArtist = [];
  $scope.KHawaiianArtist = [];
  $scope.LHawaiianArtist = [];
  $scope.MHawaiianArtist = [];
  $scope.NHawaiianArtist = [];
  $scope.OHawaiianArtist = [];
  $scope.PHawaiianArtist = [];
  $scope.QHawaiianArtist = [];
  $scope.RHawaiianArtist = [];
  $scope.SHawaiianArtist = [];
  $scope.THawaiianArtist = [];
  $scope.UHawaiianArtist = [];
  $scope.VHawaiianArtist = [];
  $scope.WHawaiianArtist = [];
  $scope.XHawaiianArtist = [];
  $scope.YHawaiianArtist = [];
  $scope.ZHawaiianArtist = [];

  $scope.Artist = [];
  $scope.Artists = [];
  $scope.NumberContemporaryArtist = [];
  $scope.AContemporaryArtist = [];
  $scope.BContemporaryArtist = [];
  $scope.CContemporaryArtist = [];
  $scope.DContemporaryArtist = [];
  $scope.EContemporaryArtist = [];
  $scope.FContemporaryArtist = [];
  $scope.GContemporaryArtist = [];
  $scope.HContemporaryArtist = [];
  $scope.IContemporaryArtist = [];
  $scope.JContemporaryArtist = [];
  $scope.KContemporaryArtist = [];
  $scope.LContemporaryArtist = [];
  $scope.MContemporaryArtist = [];
  $scope.NContemporaryArtist = [];
  $scope.OContemporaryArtist = [];
  $scope.PContemporaryArtist = [];
  $scope.QContemporaryArtist = [];
  $scope.RContemporaryArtist = [];
  $scope.SContemporaryArtist = [];
  $scope.TContemporaryArtist = [];
  $scope.UContemporaryArtist = [];
  $scope.VContemporaryArtist = [];
  $scope.WContemporaryArtist = [];
  $scope.XContemporaryArtist = [];
  $scope.YContemporaryArtist = [];
  $scope.ZContemporaryArtist = [];

  $scope.Album = [];
  $scope.Albums = [];
  $scope.NumberAlbum = [];
  $scope.AAlbum = [];
  $scope.BAlbum = [];
  $scope.CAlbum = [];
  $scope.DAlbum = [];
  $scope.EAlbum = [];
  $scope.FAlbum = [];
  $scope.GAlbum = [];
  $scope.HAlbum = [];
  $scope.IAlbum = [];
  $scope.JAlbum = [];
  $scope.KAlbum = [];
  $scope.LAlbum = [];
  $scope.MAlbum = [];
  $scope.NAlbum = [];
  $scope.OAlbum = [];
  $scope.PAlbum = [];
  $scope.QAlbum = [];
  $scope.RAlbum = [];
  $scope.SAlbum = [];
  $scope.TAlbum = [];
  $scope.UAlbum = [];
  $scope.VAlbum = [];
  $scope.WAlbum = [];
  $scope.XAlbum = [];
  $scope.YAlbum = [];
  $scope.ZAlbum = [];

  $scope.RecordLabel = [];
  $scope.RecordLabels = [];
  $scope.NumberRecordLabel = [];
  $scope.ARecordLabel = [];
  $scope.BRecordLabel = [];
  $scope.CRecordLabel = [];
  $scope.DRecordLabel = [];
  $scope.ERecordLabel = [];
  $scope.FRecordLabel = [];
  $scope.GRecordLabel = [];
  $scope.HRecordLabel = [];
  $scope.IRecordLabel = [];
  $scope.JRecordLabel = [];
  $scope.KRecordLabel = [];
  $scope.LRecordLabel = [];
  $scope.MRecordLabel = [];
  $scope.NRecordLabel = [];
  $scope.ORecordLabel = [];
  $scope.PRecordLabel = [];
  $scope.QRecordLabel = [];
  $scope.RRecordLabel = [];
  $scope.SRecordLabel = [];
  $scope.TRecordLabel = [];
  $scope.URecordLabel = [];
  $scope.VRecordLabel = [];
  $scope.WRecordLabel = [];
  $scope.XRecordLabel = [];
  $scope.YRecordLabel = [];
  $scope.ZRecordLabel = [];

  $scope.getAllSongs = function(){
    console.log('getting all songs');
    songService.getAllSongs()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        var splitTitle = data[i].title.toUpperCase().split("");
        if(splitTitle[0]==="A"){
          if(data[i].type==="Hawaiian"){
            $scope.AHawaiianSong.push(data[i]);
          }
          if(data[i].type==="Contemporary"){
            $scope.AContemporarySong.push(data[i]);
          }
        } else if(splitTitle[0]==="B"){
            if(data[i].type==="Hawaiian"){
              $scope.BHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.BContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="C"){
            if(data[i].type==="Hawaiian"){
              $scope.CHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.CContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="D"){
            if(data[i].type==="Hawaiian"){
              $scope.DHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.DContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="E"){
            if(data[i].type==="Hawaiian"){
              $scope.EHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.EContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="F"){
            if(data[i].type==="Hawaiian"){
              $scope.FHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.FContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="G"){
            if(data[i].type==="Hawaiian"){
              $scope.GHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.GContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="H"){
            if(data[i].type==="Hawaiian"){
              $scope.HHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.HContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="I"){
            if(data[i].type==="Hawaiian"){
              $scope.IHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.IContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="J"){
            if(data[i].type==="Hawaiian"){
              $scope.JHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.JContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="K"){
            if(data[i].type==="Hawaiian"){
              $scope.KHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.KContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="L"){
            if(data[i].type==="Hawaiian"){
              $scope.LHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.LContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="M"){
            if(data[i].type==="Hawaiian"){
              $scope.MHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.MContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="N"){
            if(data[i].type==="Hawaiian"){
              $scope.NHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.NContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="O"){
            if(data[i].type==="Hawaiian"){
              $scope.OHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.OContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="P"){
            if(data[i].type==="Hawaiian"){
              $scope.PHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.PContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="Q"){
            if(data[i].type==="Hawaiian"){
              $scope.QHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.QContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="R"){
            if(data[i].type==="Hawaiian"){
              $scope.RHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.RContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="S"){
            if(data[i].type==="Hawaiian"){
              $scope.SHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.SContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="T"){
            if(data[i].type==="Hawaiian"){
              $scope.THawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.TContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="U"){
            if(data[i].type==="Hawaiian"){
              $scope.UHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.UContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="V"){
            if(data[i].type==="Hawaiian"){
              $scope.VHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.VContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="W"){
            if(data[i].type==="Hawaiian"){
              $scope.WHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.WContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="X"){
            if(data[i].type==="Hawaiian"){
              $scope.XHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.XContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="Y"){
            if(data[i].type==="Hawaiian"){
              $scope.YHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.YContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="Z"){
            if(data[i].type==="Hawaiian"){
              $scope.ZHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.ZContemporarySong.push(data[i]);
            }
        } else {
            if(data[i].type==="Hawaiian"){
              $scope.NumberHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.NumberContemporarySong.push(data[i]);
            }
        }
      }
    });
  };

  $scope.addSong = function(song){
    if(song=== null || song === undefined){
      console.log('there needs to be a property');
      return $state.go('adminMenu.addNewSong');
    }

    if(song.title.length===0){
      console.log('there needs to be value in name');
      return $state.go('adminMenu.addNewSong');
    }

    if(!song.ArtistId){
      console.log('there needs to be ArtistId');
      return $state.go('adminMenu.addNewSong');
    }

    if(!song.AlbumId){
      console.log('there needs to be AlbumId');
      return $state.go('adminMenu.addNewSong');
    }

    if(!song.type){
      console.log('there needs to be a type');
      return $state.go('adminMenu.addNewSong');
    }


    songService.addSong(song)
    .success(function(data){
      console.log('finish adding', data);
      //*********ATTENTION*************
            //*********ATTENTION*************
                  //*********ATTENTION*************
                        //*********ATTENTION*************
                              //*********ATTENTION*************
      // can't figure out if i like how it doesn't refresh
      // if it doesn't refrest after adding a song
        //it might be good so the home page doesn't mess up if you lose connection
        // then again you should add a song without internet connection
      //if it does refresh after adding a song
        //it will be up to date realtime
      return $state.go('adminMenu.home.HawaiianSong');
    });
  };

    $scope.getAdminSong = function(){
      var locationPath = $location.$$path;
      var splitLocationPath = locationPath.split("");
      splitLocationPath.splice(0,29);
      var finalLocationPath = splitLocationPath.join("");
      songService.getSong(encodeURI(finalLocationPath))
      .success(function(data){
        $scope.Song = data;
        artistService.getArtist(data.ArtistId)
        .success(function(data){
          $scope.Artist = data;
        });
        albumService.getAlbum(data.AlbumId)
        .success(function(data){
          $scope.Album = data;
        });
      });
  };

  $scope.getSong = function(){
      var userLocationPath = $location.$$path;
      var userSplitLocationPath = userLocationPath.split("");
      userSplitLocationPath.splice(0,24);
      var userFinalLocationPath = userSplitLocationPath.join("");
      songService.getSong(encodeURI(userFinalLocationPath))
      .success(function(data){
        $scope.Song = data;
        artistService.getArtist(data.ArtistId)
        .success(function(data){
          $scope.Artist = data;
        });
        albumService.getAlbum(data.AlbumId)
        .success(function(data){
          $scope.Album = data;
        });
      });
  };

  $scope.getSongToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,26);
    console.log(splitLocationPath);
    var finalLocationPath = splitLocationPath.join("");
    songService.getSong(finalLocationPath)
    .success(function(data){
      $scope.Song = data;
      artistService.getArtist(data.ArtistId)
      .success(function(data){
        $scope.Artist = data;
      });
      albumService.getAlbum(data.AlbumId)
      .success(function(data){
        $scope.Album = data;
      });
    });
  };

  $scope.editSong = function(song){

    if(song===undefined || song === null){
      return $location.url('adminSide-menu/song/content/'+ $scope.Song.id);
    }

    if(song.hasOwnProperty("title") && song.title.length!==0){

      if(!song.hasOwnProperty("visibility")){
        song.visibility = $scope.Song.visibility;
      }
      if(!song.hasOwnProperty("id")){
        song.id = $scope.Song.id;
      }
      if(!song.hasOwnProperty("ArtistId") || song.ArtistId.length===0){
        song.ArtistId = $scope.Song.AtistId;
      }
      if(!song.hasOwnProperty("AlbumId") || song.AlbumId.length===0){
        song.AlbumId = $scope.Song.AlbumId;
      }
      if(!song.hasOwnProperty("type") || song.type.length===0){
        song.type = $scope.Song.type;
      }
      if(!song.hasOwnProperty("description") || song.description.length===0){
        song.description = $scope.Song.description;
      }
      if(!song.hasOwnProperty("line1") || song.line1.length===0){
        song.line1 = $scope.Song.line1;
      }
      if(!song.hasOwnProperty("line2") || song.line2.length===0){
        song.line2 = $scope.Song.line2;
      }
      if(!song.hasOwnProperty("line3") || song.line3.length===0){
        song.line3 = $scope.Song.line3;
      }
      if(!song.hasOwnProperty("line4") || song.line4.length===0){
        song.line4 = $scope.Song.line4;
      }
      if(!song.hasOwnProperty("line5") || song.line5.length===0){
        song.line5 = $scope.Song.line5;
      }
      if(!song.hasOwnProperty("line6") || song.line6.length===0){
        song.line6 = $scope.Song.line6;
      }
      if(!song.hasOwnProperty("line7") || song.line7.length===0){
        song.line7 = $scope.Song.line7;
      }
      if(!song.hasOwnProperty("line8") || song.line8.length===0){
        song.line8 = $scope.Song.line8;
      }
      if(!song.hasOwnProperty("line9") || song.line9.length===0){
        song.line9 = $scope.Song.line9;
      }
      if(!song.hasOwnProperty("line10") || song.line10.length===0){
        song.line10 = $scope.Song.line10;
      }
      if(!song.hasOwnProperty("line11") || song.line11.length===0){
        song.line11 = $scope.Song.line11;
      }
      if(!song.hasOwnProperty("line12") || song.line12.length===0){
        song.line12 = $scope.Song.line12;
      }
      if(!song.hasOwnProperty("line13") || song.line13.length===0){
        song.line13 = $scope.Song.line13;
      }
      if(!song.hasOwnProperty("line14") || song.line14.length===0){
        song.line14 = $scope.Song.line14;
      }
      if(!song.hasOwnProperty("line15") || song.line15.length===0){
        song.line15 = $scope.Song.line15;
      }
      if(!song.hasOwnProperty("line16") || song.line16.length===0){
        song.line16 = $scope.Song.line16;
      }
      if(!song.hasOwnProperty("line17") || song.line17.length===0){
        song.line17 = $scope.Song.line17;
      }
      if(!song.hasOwnProperty("line18") || song.line18.length===0){
        song.line18 = $scope.Song.line18;
      }
      if(!song.hasOwnProperty("line19") || song.line19.length===0){
        song.line19 = $scope.Song.line19;
      }
      if(!song.hasOwnProperty("line20") || song.line20.length===0){
        song.line20 = $scope.Song.line20;
      }
      if(!song.hasOwnProperty("line21") || song.line21.length===0){
        song.line21 = $scope.Song.line21;
      }
      if(!song.hasOwnProperty("line22") || song.line22.length===0){
        song.line22 = $scope.Song.line22;
      }
      if(!song.hasOwnProperty("line23") || song.line23.length===0){
        song.line23 = $scope.Song.line23;
      }
      if(!song.hasOwnProperty("line24") || song.line24.length===0){
        song.line24 = $scope.Song.line24;
      }
      if(!song.hasOwnProperty("line25") || song.line25.length===0){
        song.line25 = $scope.Song.line25;
      }
      if(!song.hasOwnProperty("line26") || song.line26.length===0){
        song.line26 = $scope.Song.line26;
      }
      if(!song.hasOwnProperty("line27") || song.line27.length===0){
        song.line27 = $scope.Song.line27;
      }
      if(!song.hasOwnProperty("line28") || song.line28.length===0){
        song.line28 = $scope.Song.line28;
      }
      if(!song.hasOwnProperty("line29") || song.line29.length===0){
        song.line29 = $scope.Song.line29;
      }
      if(!song.hasOwnProperty("line30") || song.line30.length===0){
        song.line30 = $scope.Song.line30;
      }

      songService.editSong($scope.Song.id, song)
      .success(function(data){
        return $location.url('adminSide-menu/song/content/'+ $scope.Song.id);
      });
    } else {

      if(!song.hasOwnProperty("visibility")){
        song.visibility = $scope.Song.visibility;
      }
      if(!song.hasOwnProperty("id")){
        song.id = $scope.Song.id;
      }
      if(!song.hasOwnProperty("title")){
        song.title = $scope.Song.title;
      }
      if(!song.hasOwnProperty("ArtistId") || song.ArtistId.length===0){
        song.ArtistId = $scope.Song.AtistId;
      }
      if(!song.hasOwnProperty("AlbumId") || song.AlbumId.length===0){
        song.AlbumId = $scope.Song.AlbumId;
      }
      if(!song.hasOwnProperty("type") || song.type.length===0){
        song.type = $scope.Song.type;
      }
      if(!song.hasOwnProperty("description") || song.description.length===0){
        song.description = $scope.Song.description;
      }
      if(!song.hasOwnProperty("line1") || song.line1.length===0){
        song.line1 = $scope.Song.line1;
      }
      if(!song.hasOwnProperty("line2") || song.line2.length===0){
        song.line2 = $scope.Song.line2;
      }
      if(!song.hasOwnProperty("line3") || song.line3.length===0){
        song.line3 = $scope.Song.line3;
      }
      if(!song.hasOwnProperty("line4") || song.line4.length===0){
        song.line4 = $scope.Song.line4;
      }
      if(!song.hasOwnProperty("line5") || song.line5.length===0){
        song.line5 = $scope.Song.line5;
      }
      if(!song.hasOwnProperty("line6") || song.line6.length===0){
        song.line6 = $scope.Song.line6;
      }
      if(!song.hasOwnProperty("line7") || song.line7.length===0){
        song.line7 = $scope.Song.line7;
      }
      if(!song.hasOwnProperty("line8") || song.line8.length===0){
        song.line8 = $scope.Song.line8;
      }
      if(!song.hasOwnProperty("line9") || song.line9.length===0){
        song.line9 = $scope.Song.line9;
      }
      if(!song.hasOwnProperty("line10") || song.line10.length===0){
        song.line10 = $scope.Song.line10;
      }
      if(!song.hasOwnProperty("line11") || song.line11.length===0){
        song.line11 = $scope.Song.line11;
      }
      if(!song.hasOwnProperty("line12") || song.line12.length===0){
        song.line12 = $scope.Song.line12;
      }
      if(!song.hasOwnProperty("line13") || song.line13.length===0){
        song.line13 = $scope.Song.line13;
      }
      if(!song.hasOwnProperty("line14") || song.line14.length===0){
        song.line14 = $scope.Song.line14;
      }
      if(!song.hasOwnProperty("line15") || song.line15.length===0){
        song.line15 = $scope.Song.line15;
      }
      if(!song.hasOwnProperty("line16") || song.line16.length===0){
        song.line16 = $scope.Song.line16;
      }
      if(!song.hasOwnProperty("line17") || song.line17.length===0){
        song.line17 = $scope.Song.line17;
      }
      if(!song.hasOwnProperty("line18") || song.line18.length===0){
        song.line18 = $scope.Song.line18;
      }
      if(!song.hasOwnProperty("line19") || song.line19.length===0){
        song.line19 = $scope.Song.line19;
      }
      if(!song.hasOwnProperty("line20") || song.line20.length===0){
        song.line20 = $scope.Song.line20;
      }
      if(!song.hasOwnProperty("line21") || song.line21.length===0){
        song.line21 = $scope.Song.line21;
      }
      if(!song.hasOwnProperty("line22") || song.line22.length===0){
        song.line22 = $scope.Song.line22;
      }
      if(!song.hasOwnProperty("line23") || song.line23.length===0){
        song.line23 = $scope.Song.line23;
      }
      if(!song.hasOwnProperty("line24") || song.line24.length===0){
        song.line24 = $scope.Song.line24;
      }
      if(!song.hasOwnProperty("line25") || song.line25.length===0){
        song.line25 = $scope.Song.line25;
      }
      if(!song.hasOwnProperty("line26") || song.line26.length===0){
        song.line26 = $scope.Song.line26;
      }
      if(!song.hasOwnProperty("line27") || song.line27.length===0){
        song.line27 = $scope.Song.line27;
      }
      if(!song.hasOwnProperty("line28") || song.line28.length===0){
        song.line28 = $scope.Song.line28;
      }
      if(!song.hasOwnProperty("line29") || song.line29.length===0){
        song.line29 = $scope.Song.line29;
      }
      if(!song.hasOwnProperty("line30") || song.line30.length===0){
        song.line30 = $scope.Song.line30;
      }

      songService.editSong($scope.Song.id, song)
      .success(function(data){

        return $location.url('adminSide-menu/song/content/'+ $scope.Song.id);
      });
    }
  };

  $scope.deleteSong = function(){
    songService.deleteSong($scope.Song)
    .success(function(data){
    return $state.go('adminMenu.home.HawaiianSong');

    });
  };

  $scope.getAllArtists = function(){
    artistService.getAllArtists()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        $scope.Artists.push(data[i]);
        var splitName = data[i].name.toUpperCase().split("");
        if(splitName[0]==="A"){
          if(data[i].type==="Hawaiian"){
            $scope.AHawaiianArtist.push(data[i]);
          }
          if(data[i].type==="Contemporary"){
            $scope.AContemporaryArtist.push(data[i]);
          }
        } else if(splitName[0]==="B"){
            if(data[i].type==="Hawaiian"){
              $scope.BHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.BContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="C"){
            if(data[i].type==="Hawaiian"){
              $scope.CHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.CContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="D"){
            if(data[i].type==="Hawaiian"){
              $scope.DHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.DContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="E"){
            if(data[i].type==="Hawaiian"){
              $scope.EHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.EContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="F"){
            if(data[i].type==="Hawaiian"){
              $scope.FHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.FContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="G"){
            if(data[i].type==="Hawaiian"){
              $scope.GHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.GContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="H"){
            if(data[i].type==="Hawaiian"){
              $scope.HHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.HContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="I"){
            if(data[i].type==="Hawaiian"){
              $scope.IHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.IContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="J"){
            if(data[i].type==="Hawaiian"){
              $scope.JHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.JContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="K"){
            if(data[i].type==="Hawaiian"){
              $scope.KHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.KContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="L"){
            if(data[i].type==="Hawaiian"){
              $scope.LHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.LContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="M"){
            if(data[i].type==="Hawaiian"){
              $scope.MHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.MContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="N"){
            if(data[i].type==="Hawaiian"){
              $scope.NHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.NContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="O"){
            if(data[i].type==="Hawaiian"){
              $scope.OHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.OContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="P"){
            if(data[i].type==="Hawaiian"){
              $scope.PHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.PContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="Q"){
            if(data[i].type==="Hawaiian"){
              $scope.QHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.QContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="R"){
            if(data[i].type==="Hawaiian"){
              $scope.RHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.RContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="S"){
            if(data[i].type==="Hawaiian"){
              $scope.SHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.SContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="T"){
            if(data[i].type==="Hawaiian"){
              $scope.THawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.TContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="U"){
            if(data[i].type==="Hawaiian"){
              $scope.UHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.UContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="V"){
            if(data[i].type==="Hawaiian"){
              $scope.VHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.VContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="W"){
            if(data[i].type==="Hawaiian"){
              $scope.WHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.WContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="X"){
            if(data[i].type==="Hawaiian"){
              $scope.XHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.XContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="Y"){
            if(data[i].type==="Hawaiian"){
              $scope.YHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.YContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="Z"){
            if(data[i].type==="Hawaiian"){
              $scope.ZHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.ZContemporaryArtist.push(data[i]);
            }
        } else {
            if(data[i].type==="Hawaiian"){
              $scope.NumberHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.NumberContemporaryArtist.push(data[i]);
            }
        }
      }
    });
  };


  $scope.addArtist = function(artist){

    if(!artist.name){
      console.log('there need to be a artist name property');
      return $state.go('adminMenu.addNewArtist');
    }

    if(artist.name.length===0 || artist=== null || artist === undefined){
      console.log('there needs to be value in name');
      return $state.go('adminMenu.addNewArtist');
    }

    artistService.addArtist(artist)
    .success(function(data){
      $scope.getAllArtists();

      //*********ATTENTION*************
            //*********ATTENTION*************
                  //*********ATTENTION*************
                        //*********ATTENTION*************
                              //*********ATTENTION*************
      // can't figure out if i like how it doesn't refresh
      // if it doesn't refrest after adding a song
        //it might be good so the home page doesn't mess up if you lose connection
        // then again you should add a song without internet connection
      //if it does refresh after adding a song
        //it will be up to date realtime
      return $state.go('adminMenu.home.HawaiianArtist');
    });
  };

  $scope.getAdminArtist = function(artist){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,31);
    console.log(splitLocationPath);
    var finalLocationPath = splitLocationPath.join("");
    artistService.getArtist(encodeURI(finalLocationPath))
    .success(function(data){
     $scope.Artist = data;
      albumService.getSpecificAlbums(data.id)
      .success(function(data){
        $scope.Albums = data;
      });
      songService.getSpecificSongsFromArtist(data.id)
      .success(function(data){
        $scope.Songs = data;
      });
    });
  };

  $scope.getArtist = function(artist){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,26);
    var finalLocationPath = splitLocationPath.join("");
    artistService.getArtist(encodeURI(finalLocationPath))
    .success(function(data){
     $scope.Artist = data;
      albumService.getSpecificAlbums(data.id)
      .success(function(data){
        $scope.Albums = data;
      });
      songService.getSpecificSongsFromArtist(data.id)
      .success(function(data){
        $scope.Songs = data;
      });
    });
  };


  $scope.getArtistToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,28);
    var finalLocationPath = splitLocationPath.join("");
    artistService.getArtist(finalLocationPath)
    .success(function(data){
      $scope.Artist = data;
    });
  };

  $scope.editArtist = function(artist){

    if(artist===undefined || artist === null){
      return $location.url('adminSide-menu/artist/content/'+ $scope.Artist.id);
    }

    if(artist.hasOwnProperty("name") && artist.name.length!==0){

      if(!artist.hasOwnProperty("id")){
        artist.id = $scope.Artist.id;
      }
      if(!artist.hasOwnProperty("type")){
        artist.type = $scope.Artist.type;
      }
      if(!artist.hasOwnProperty("facebook")){
        artist.facebook = $scope.Artist.facebook;
      }
      if(!artist.hasOwnProperty("instagram")){
        artist.instagram = $scope.Artist.instagram;
      }
      if(!artist.hasOwnProperty("twitter")){
        artist.twitter = $scope.Artist.twitter;
      }
      if(!artist.hasOwnProperty("bookingPhoneNumber")){
        artist.bookingPhoneNumber = $scope.Artist.bookingPhoneNumber;
      }
      if(!artist.hasOwnProperty("bookingEmail")){
        artist.bookingEmail = $scope.Artist.bookingEmail;
      }
      if(!artist.hasOwnProperty("description") || artist.description.length===0){
        artist.description = $scope.Artist.description;
      }
      if(!artist.hasOwnProperty("visibility")){
        artist.visibility = $scope.Artist.visibility;
      }

      artistService.editArtist($scope.Artist.id, artist)
      .success(function(data){
        $scope.getArtistToEdit();
        $location.url('adminSide-menu/artist/content/'+ $scope.Artist.id);
      });
    } else {

      if(!artist.hasOwnProperty("id")){
        artist.id = $scope.Artist.id;
      }
      if(!artist.hasOwnProperty("name")){
        artist.name = $scope.Artist.name;
      }
      if(!artist.hasOwnProperty("type")){
        artist.type = $scope.Artist.type;
      }
      if(!artist.hasOwnProperty("facebook")){
        artist.facebook = $scope.Artist.facebook;
      }
      if(!artist.hasOwnProperty("instagram")){
        artist.instagram = $scope.Artist.instagram;
      }
      if(!artist.hasOwnProperty("twitter")){
        artist.twitter = $scope.Artist.twitter;
      }
      if(!artist.hasOwnProperty("bookingPhoneNumber")){
        artist.bookingPhoneNumber = $scope.Artist.bookingPhoneNumber;
      }
      if(!artist.hasOwnProperty("bookingEmail")){
        artist.bookingEmail = $scope.Artist.bookingEmail;
      }
      if(!artist.hasOwnProperty("description") || artist.description.length===0){
        artist.description = $scope.Artist.description;
      }
      if(!artist.hasOwnProperty("visibility")){
        artist.visibility = $scope.Artist.visibility;
      }


      artistService.editArtist($scope.Artist.id, artist)
      .success(function(data){
        $scope.getArtistToEdit();
        $location.url('adminSide-menu/artist/content/'+ $scope.Artist.id);
      });
    }
  };

  $scope.deleteArtist = function(){
    console.log('delete this artist');
    artistService.deleteArtist($scope.Artist)
    .success(function(data){
      $scope.getAllArtists();
      return $state.go('adminMenu.home.HawaiianArtist');
    });
  };

  $scope.getAllAlbums = function(){
    albumService.getAllAlbums()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        $scope.Albums.push(data[i]);
        var splitTitle = data[i].title.toUpperCase().split("");
        if(splitTitle[0]==="A"){
          $scope.AAlbum.push(data[i]);
        } else if(splitTitle[0]==="B"){
          $scope.BAlbum.push(data[i]);
        } else if(splitTitle[0]==="C"){
          $scope.CAlbum.push(data[i]);
        } else if(splitTitle[0]==="D"){
          $scope.DAlbum.push(data[i]);
        } else if(splitTitle[0]==="E"){
          $scope.EAlbum.push(data[i]);
        } else if(splitTitle[0]==="F"){
          $scope.FAlbum.push(data[i]);
        } else if(splitTitle[0]==="G"){
          $scope.GAlbum.push(data[i]);
        } else if(splitTitle[0]==="H"){
          $scope.HAlbum.push(data[i]);
        } else if(splitTitle[0]==="I"){
          $scope.IAlbum.push(data[i]);
        } else if(splitTitle[0]==="J"){
          $scope.JAlbum.push(data[i]);
        } else if(splitTitle[0]==="K"){
          $scope.KAlbum.push(data[i]);
        } else if(splitTitle[0]==="L"){
          $scope.LAlbum.push(data[i]);
        } else if(splitTitle[0]==="M"){
          $scope.MAlbum.push(data[i]);
        } else if(splitTitle[0]==="N"){
          $scope.NAlbum.push(data[i]);
        } else if(splitTitle[0]==="O"){
          $scope.OAlbum.push(data[i]);
        } else if(splitTitle[0]==="P"){
          $scope.PAlbum.push(data[i]);
        } else if(splitTitle[0]==="Q"){
          $scope.QAlbum.push(data[i]);
        } else if(splitTitle[0]==="R"){
          $scope.RAlbum.push(data[i]);
        } else if(splitTitle[0]==="S"){
          $scope.SAlbum.push(data[i]);
        } else if(splitTitle[0]==="T"){
          $scope.TAlbum.push(data[i]);
        } else if(splitTitle[0]==="U"){
          $scope.UAlbum.push(data[i]);
        } else if(splitTitle[0]==="V"){
          $scope.VAlbum.push(data[i]);
        } else if(splitTitle[0]==="W"){
          $scope.WAlbum.push(data[i]);
        } else if(splitTitle[0]==="X"){
          $scope.XAlbum.push(data[i]);
        } else if(splitTitle[0]==="Y"){
          $scope.YAlbum.push(data[i]);
        } else if(splitTitle[0]==="Z"){
          $scope.ZAlbum.push(data[i]);
        } else {
          $scope.NumberAlbum.push(data[i]);
        }
      }
    });
  };

  $scope.addAlbum = function(album){

    if(album=== null || album === undefined || album.title.length===0 ){
      console.log('there needs to be value in name');
      return $state.go('adminMenu.addNewAlbum');
    }

    if(!album.title){
      console.log('there need to be a album name property');
      return $state.go('adminMenu.addNewAlbum');
    }

    if(!album.ArtistId){
      console.log('there need to be a album artist property');
      return $location.url('/adminSide-menu/addNewAlbum');
    }
    if(!album.RecordLabelId){
      console.log('there need to be a album RecordLabel property');
      return $location.url('/adminSide-menu/addNewAlbum');
    }

    albumService.addAlbum(album)
    .success(function(data){
      $scope.getAllAlbums();

      //*********ATTENTION*************
            //*********ATTENTION*************
                  //*********ATTENTION*************
                        //*********ATTENTION*************
                              //*********ATTENTION*************
      // can't figure out if i like how it doesn't refresh
      // if it doesn't refrest after adding a song
        //it might be good so the home page doesn't mess up if you lose connection
        // then again you should add a song without internet connection
      //if it does refresh after adding a song
        //it will be up to date realtime
      return $state.go('adminMenu.addNewSong');
    });
  };

  $scope.getAlbum = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,22);
    var finalLocationPath = splitLocationPath.join("");
    albumService.getAlbum(encodeURI(finalLocationPath))
    .success(function(data){
     $scope.Album = data;
      recordLabelService.getRecordLabel(data.RecordLabelId)
      .success(function(data){
        $scope.RecordLabel = data;
      });
      artistService.getArtist(data.ArtistId)
      .success(function(data){
        $scope.Artist = data;
      });
      songService.getSpecificSongsFromAlbum(data.id)
      .success(function(data){
        $scope.Songs = data;
      });
    });
  };

  $scope.getAdminAlbum = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,22);
    var finalLocationPath = splitLocationPath.join("");
    albumService.getAlbum(encodeURI(finalLocationPath))
    .success(function(data){
     $scope.Album = data;
      recordLabelService.getRecordLabel(data.RecordLabelId)
      .success(function(data){
        $scope.RecordLabel = data;
      });
      artistService.getArtist(data.ArtistId)
      .success(function(data){
        $scope.Artist = data;
      });
      songService.getSpecificSongsFromAlbum(data.id)
      .success(function(data){
        $scope.Songs = data;
      });
    });
  };

  $scope.getAdminAlbumToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,27);
    var finalLocationPath = splitLocationPath.join("");
    albumService.getAlbum(finalLocationPath)
    .success(function(data){
      $scope.Album = data;
    });
  };

  $scope.editAlbum = function(album){
    if(album===undefined || album === null){
      return $location.url('adminSide-menu/album/'+ $scope.Album.id);
    }

    if(album.hasOwnProperty("title") && album.title.length!==0){

      if(!album.hasOwnProperty("id")){
        album.id = $scope.Album.id;
      }
      if(!album.hasOwnProperty("RecordLabelId") || album.RecordLabelId.length===0){
        album.RecordLabelId = $scope.Album.RecordLabelId;
      }
      if(!album.hasOwnProperty("description") || album.description.length===0){
        album.description = $scope.Album.description;
      }
      if(!album.hasOwnProperty("visibility")){
        album.visibility = $scope.Album.visibility;
      }

      albumService.editAlbum($scope.Album.id, album)
      .success(function(data){
        $scope.getAdminAlbumToEdit();
        return $location.url('adminSide-menu/album/'+ $scope.Album.id);
      });
    } else {

      if(!album.hasOwnProperty("id")){
        album.id = $scope.Album.id;
      }
      if(!album.hasOwnProperty("title")){
        album.title = $scope.Album.title;
      }
      if(!album.hasOwnProperty("RecordLabelId") || album.RecordLabelId.length===0){
        album.RecordLabelId = $scope.Album.RecordLabelId;
      }
      if(!album.hasOwnProperty("description") || album.description.length===0){
        album.description = $scope.Album.description;
      }
      if(!album.hasOwnProperty("visibility")){
        album.visibility = $scope.Album.visibility;
      }

      albumService.editAlbum($scope.Album.id, album)
      .success(function(data){
        $scope.getAdminAlbumToEdit();
        return $location.url('adminSide-menu/album/'+ $scope.Album.id);
      });
    }
  };

  $scope.deleteAlbum = function(){
    albumService.deleteAlbum($scope.Album)
    .success(function(data){
      $scope.getAllAlbums();
      return $state.go('adminMenu.albums');
    });
  };

 $scope.getAllRecordLabels = function(){
    recordLabelService.getAllRecordLabels()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        $scope.RecordLabels.push(data[i]);
        var splitName = data[i].name.toUpperCase().split("");
        if(splitName[0]==="A"){
          $scope.ARecordLabel.push(data[i]);
        } else if(splitName[0]==="B"){
          $scope.BRecordLabel.push(data[i]);
        } else if(splitName[0]==="C"){
          $scope.CRecordLabel.push(data[i]);
        } else if(splitName[0]==="D"){
          $scope.DRecordLabel.push(data[i]);
        } else if(splitName[0]==="E"){
          $scope.ERecordLabel.push(data[i]);
        } else if(splitName[0]==="F"){
          $scope.FRecordLabel.push(data[i]);
        } else if(splitName[0]==="G"){
          $scope.GRecordLabel.push(data[i]);
        } else if(splitName[0]==="H"){
          $scope.HRecordLabel.push(data[i]);
        } else if(splitName[0]==="I"){
          $scope.IRecordLabel.push(data[i]);
        } else if(splitName[0]==="J"){
          $scope.JRecordLabel.push(data[i]);
        } else if(splitName[0]==="K"){
          $scope.KRecordLabel.push(data[i]);
        } else if(splitName[0]==="L"){
          $scope.LRecordLabel.push(data[i]);
        } else if(splitName[0]==="M"){
          $scope.MRecordLabel.push(data[i]);
        } else if(splitName[0]==="N"){
          $scope.NRecordLabel.push(data[i]);
        } else if(splitName[0]==="O"){
          $scope.ORecordLabel.push(data[i]);
        } else if(splitName[0]==="P"){
          $scope.PRecordLabel.push(data[i]);
        } else if(splitName[0]==="Q"){
          $scope.QRecordLabel.push(data[i]);
        } else if(splitName[0]==="R"){
          $scope.RRecordLabel.push(data[i]);
        } else if(splitName[0]==="S"){
          $scope.SRecordLabel.push(data[i]);
        } else if(splitName[0]==="T"){
          $scope.TRecordLabel.push(data[i]);
        } else if(splitName[0]==="U"){
          $scope.URecordLabel.push(data[i]);
        } else if(splitName[0]==="V"){
          $scope.VRecordLabel.push(data[i]);
        } else if(splitName[0]==="W"){
          $scope.WRecordLabel.push(data[i]);
        } else if(splitName[0]==="X"){
          $scope.XRecordLabel.push(data[i]);
        } else if(splitName[0]==="Y"){
          $scope.YRecordLabel.push(data[i]);
        } else if(splitName[0]==="Z"){
          $scope.ZRecordLabel.push(data[i]);
        } else {
          $scope.NumberRecordLabel.push(data[i]);
        }
      }
    });
  };

  $scope.addRecordLabel = function(recordLabel){

    if(!recordLabel.name){
      console.log('there need to be a recordLabel name property');
      return $state.go('menu.addNewRecordLabel');
    }

    // if(!recordLabel.ArtistId){
    //   console.log('there need to be a recordLabel artist property');
    //   return $location.url('/side-menu/addNewrecordLabel');
    // }

    if(recordLabel.name.length===0 || recordLabel=== null || recordLabel === undefined){
      console.log('there needs to be value in name');
      return $state.go('menu.addNewRecordLabel');
    }

    recordLabelService.addRecordLabel(recordLabel)
    .success(function(data){
      $scope.getAllRecordLabels();

      //*********ATTENTION*************
            //*********ATTENTION*************
                  //*********ATTENTION*************
                        //*********ATTENTION*************
                              //*********ATTENTION*************
      // can't figure out if i like how it doesn't refresh
      // if it doesn't refrest after adding a song
        //it might be good so the home page doesn't mess up if you lose connection
        // then again you should add a song without internet connection
      //if it does refresh after adding a song
        //it will be up to date realtime
      return $state.go('adminMenu.home.recordLabels');
    });
  };

  $scope.getRecordLabelToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,28);
    var finalLocationPath = splitLocationPath.join("");
    recordLabelService.getRecordLabel(finalLocationPath)
    .success(function(data){
      $scope.RecordLabel = data;
    });
  };

  $scope.editRecordLabel = function(recordLabel){
    if(recordLabel===undefined || recordLabel === null || recordLabel.name.length===0){
      return $state.go('menu.recordLabels');
    }
    if(recordLabel.hasOwnProperty("name")){
      if(!recordLabel.hasOwnProperty("id")){
        recordLabel.id = $scope.RecordLabel.id;
      }

      recordLabelService.editRecordLabel($scope.RecordLabel.id, recordLabel)
      .success(function(data){
        return $state.go("menu.recordLabels");
      });
    } else {

      if(!recordLabel.hasOwnProperty("id")){
        recordLabel.id = $scope.RecordLabel.id;
      }
      if(!recordLabel.hasOwnProperty("name")){
        recordLabel.name = $scope.RecordLabel.name;
      }

      recordLabelService.editRecordLabel($scope.RecordLabel.id, recordLabel)
      .success(function(data){
        return $state.go("menu.recordLabels");
      });
    }
  };

  $scope.deleteRecordLabel = function(){
    recordLabelService.deleteRecordLabel($scope.RecordLabel)
    .success(function(data){
      return $state.go("menu.recordLabels");
    });
  };

});
