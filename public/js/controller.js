app.controller("NavCtrl", function($rootScope, $scope, $http, $location, $state) {
  // console.log($rootScope.currentUser);
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/login");
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
  
});

app.controller("ArtistProfileCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("TeamCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("TeamProfileCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("EventsCtrl", function($rootScope, $scope, $http, $location, $state) {
  
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
      $rootScope.currentUser = user;
      $state.go('form.main');
    });
  }
};
});

app.controller("LoginCtrl", function($scope,$http,Auth, $rootScope, $state, $cookies) {

  
$scope.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        // console.log($rootScope.currentUser);
        $rootScope.currentUser = response.username;
        // console.log(response.username);
        $state.go('form.main');
      });
  };


});


