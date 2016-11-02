describe('kanakaMusicCtrl', function() {

    var controller,
        deferredLogin,
        stateMock,
        ionicPopupMock,
        scopeMock,
        locationMock,
        rootScopeMock,
        songServiceMock,
        artistServiceMock,
        albumServiceMock,
        recordLabelServiceMock,
        dateServiceMock,
        loginServiceMock;



    // TODO: Load the App Module

    // TODO: Instantiate the Controller and Mocks

    describe('#addSong', function() {
    // instantiate the controller and mocks for every test
    beforeEach(inject(function($controller, $q) {
      deferredLogin = $q.defer();

      // mock songService
      songServiceMock = {
          addSong: jasmine.createSpy('addSong spy')
                        .and.returnValue(deferredLogin.promise)
      };

      // mock $state
      stateMock = jasmine.createSpyObj('$state spy', ['go']);

      // mock $ionicPopup
      ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);

      // instantiate LoginController
      controller = $controller('kanakaMusicCtrl', {
                      '$ionicPopup': ionicPopupMock,
                      '$state': stateMock,
                      'songService': songServiceMock }
                   );
    }));

        // TODO: Call getAllSongs on the Controller

        it('should call addSong on songService', function() {
            expect(songServiceMock.addSong).toHaveBeenCalledWith(song);
        });

        describe('when the addSong is executed,', function() {
            it('if successful, should change state to adminMenu.home.HawaiianSong', function() {

                // TODO: Mock the login response from DinnerService

                expect(stateMock.go).toHaveBeenCalledWith('adminMenu.home.HawaiianSong');
            });

            it('if unsuccessful, should go back to adminMenu.addNewSong', function() {

                // TODO: Mock the login response from DinnerService

                expect(stateMock.go).toHaveBeenCalledWith('adminMenu.addNewSong');
            });
        });
    })




});
