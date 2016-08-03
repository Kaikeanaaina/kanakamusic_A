// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','app.routes', 'app.Controllers', 'app.songServices', 'app.artistServices','app.albumServices', 'app.directives', 'app.gigController', 'app.recordLabelServices','app.settingController','app.bandMemberController','app.loginServices','app.Filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'kanakaMusicCtrl'
      }
    },
    abstract: true
  })

  .state('menu.home.hawaiianSong', {
    url: '/hawaiianSongs',
    views: {
      'tabs-view': {
        templateUrl: 'templates/hawaiianSonglist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.home.contemporarySong', {
    url: '/contemporarySongs',
    views: {
      'tabs-view': {
        templateUrl: 'templates/contemporarySonglist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.home.hawaiianArtist', {
    url: '/hawaiianArtists',
    views: {
      'tabs-view': {
        templateUrl: 'templates/hawaiianArtistlist.html',
        controller: 'kanakaMusicCtrl'
      }
    }
  })

  .state('menu.home.contemporaryArtist', {
    url: '/contemporaryArtists',
    views: {
      'tabs-view': {
        templateUrl: 'templates/contemporaryArtistlist.html',
        controller: 'kanakaMusicCtrl'
      }
    }
  })

  .state('adminMenu', {
    url: '/adminSide-menu',
    templateUrl: 'templates/adminMenu.html',
    abstract:true
  })

  .state('adminMenu.home', {
    url: '/adminHome',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminHome.html',
        controller: 'kanakaMusicCtrl'
      }
    },
    abstract: true
  })

  .state('adminMenu.home.HawaiianSong', {
    url: '/adminHawaiianSongs',
    views: {
      'adminTabs-view': {
        templateUrl: 'templates/adminHawaiianSonglist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.home.ContemporarySong', {
    url: '/contemporarySongs',
    views: {
      'adminTabs-view': {
        templateUrl: 'templates/adminContemporarySonglist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.home.HawaiianArtist', {
    url: '/hawaiianArtists',
    views: {
      'adminTabs-view': {
        templateUrl: 'templates/adminHawaiianArtistlist.html',
        controller: 'kanakaMusicCtrl'
      }
    }
  })

  .state('adminMenu.home.ContemporaryArtist', {
    url: '/contemporaryArtists',
    views: {
      'adminTabs-view': {
        templateUrl: 'templates/adminContemporaryArtistlist.html',
        controller: 'kanakaMusicCtrl'
      }
    }
  })

  .state('adminMenu.gigs', {
    url: '/gigs',
    views: {
      'side-menu20': {
        templateUrl: 'templates/gigs.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('adminMenu.settings', {
    url: '/settings',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminSettings.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('adminMenu.addNewSong', {
    url: '/addNewSong',
    views: {
      'side-menu20': {
        templateUrl: 'templates/addNewSong.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.editSong', {
    url: '/song/edit/:id',
    views: {
      'side-menu20': {
        templateUrl: 'templates/editSong.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.songContent', {
    url: '/song/content/:id',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminSongContent.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.songContent', {
    url: '/song/content/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/songContent.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.addNewArtist', {
    url: '/addNewArtist',
    views: {
      'side-menu20': {
        templateUrl: 'templates/addNewArtist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.artistContent', {
    url: '/artist/content/:id',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminArtistContent.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.artistContent', {
    url: '/artist/content/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artistContent.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.editArtist', {
    url: '/artist/edit/:id',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminEditArtist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.bandMembers', {
    url: '/artist/:id/members',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bandMembers.html',
        controller: 'bandMemberCtrl'
      }
    }
  })

  .state('menu.gigs', {
    url: '/gigs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gigs.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('gigsCalendar', {
    url: '/gigs/calendar',
    templateUrl: 'templates/gigsCalendar.html',
    controller: 'gigsCtrl'
  })


  .state('adminMenu.home.albums', {
    url: '/albums',
    views: {
      'adminTabs-view': {
        templateUrl: 'templates/adminAlbumList.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })


  .state('adminMenu.addNewAlbum', {
    url: '/addNewAlbum',
    views: {
      'side-menu20': {
        templateUrl: 'templates/addNewAlbum.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.editAlbum', {
    url: '/album/edit/:id',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminEditAlbum.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.albumPage', {
    url: '/album/:id',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminAlbumPage.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })
  .state('menu.albumPage', {
    url: '/album/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/albumPage.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('adminMenu.home.recordLabels', {
    url: '/recordLabels',
    views: {
      'adminTabs-view': {
        templateUrl: 'templates/adminRecordLabelList.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })


  .state('menu.recordLabels', {
    url: '/recordLabels',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recordLabelList.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.addNewRecordLabel', {
    url: '/addNewRecordLabel',
    views: {
      'side-menu21' : {
        templateUrl: 'templates/addNewRecordLabel.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.editRecordLabel', {
    url: '/recordLabel/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editRecordLabel.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.gigDetails', {
    url: '/gig/details/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gigDetails.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('menu.addNewGig', {
    url: '/addNewGig',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewGig.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('dateOfTheGigs', {
    url: '/gigs/day/:id',
    templateUrl: 'templates/dateOfTheGigs.html',
    controller: 'gigCtrl'
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingCtrl'
      }
    }
  })


  .state('adminMenu.privacyPolicy', {
    url: '/privacyPolicy',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminPrivacyPolicy.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('adminMenu.serviceTerms', {
    url: '/serviceTerms',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminServiceTerms.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('adminMenu.frequentlyAskedQuestions', {
    url: '/frequentlyAskedQuestions',
    views: {
      'side-menu20': {
        templateUrl: 'templates/adminFrequentlyAskedQuestions.html',
        controller: 'settingCtrl'
      }
    }
  })


  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'kanakaMusicCtrl'
      }
    }
  });

$urlRouterProvider.otherwise('/side-menu/login');



});