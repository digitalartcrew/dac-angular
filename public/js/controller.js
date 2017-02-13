app.controller("NavCtrl", function($rootScope, $scope, $http, $location, $state,$localStorage, Auth, $window) {

  console.log($localStorage);
  $scope.currentUser = $localStorage.currentUser;
  $scope.logout = function() {
    $http.post("/logout")
    .success(function() {
      $window.localStorage.clear();
      $location.path('login');
    });
  };
});


app.controller("FormCtrl", function($rootScope, $scope, $http, $location, $state, $log) {
  

});



app.controller("MainCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("AccountCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("ArtistCtrl", function($rootScope, $scope, $http, $location, $state) {

    // $scope.artist = [{first: "Donte", last: "Burney", rating: 40, location: "Chicago, IL"},]
  
});

app.controller("ArtistProfileCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("TeamsCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("TeamProfileCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("EventsCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("ContactCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("ShowcaseCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("BlogCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("ProjectsCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("ContestCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("SignUpCtrl", function($scope, $http, $rootScope, $location, $state) {
 $scope.signup = function(user) {
  if (user.password == user.password2) {
    console.log('Almost there!');
    $http.post('/signup', user)
    .success(function(user) {
     $scope.$storage = $localStorage.$default({
      currentUser: response.username
    });
     $state.go('form.main');
   });
  }
};
});

app.controller("LoginCtrl", function($scope,$http,Auth, $rootScope, $state, $localStorage) {

  
  $scope.login = function(user) {
    $http.post('/login', user)
    .success(function(response) {
      $scope.$storage = $localStorage.$default({
        currentUser: response.username
      });
      $state.go('form.main');
    });
  };


});


