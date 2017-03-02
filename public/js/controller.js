app.controller("NavCtrl", ['$rootScope', '$scope', '$http', '$location', '$state','$localStorage', 'Auth', '$window', function($rootScope, $scope, $http, $location, $state,$localStorage, Auth, $window) {

  console.log($localStorage);
  // $scope.currentUser = $localStorage.currentUser;
  $scope.logout = function() {
    $http.post("/logout")
    .success(function() {
      $window.localStorage.clear();
      $location.path('login');
    });
  };
}]);


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

app.controller("CrewProfileCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("EventsCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("ContactCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("ShowcaseCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("BlogCtrl", ['$rootScope', '$scope', '$http', '$location', '$state', 'BlogService', function($rootScope, $scope, $http, $location, $state, BlogService) {
  //Query all blog post
  $scope.blogs = BlogService.query();

  $scope.deleteBlog = function(blog){
    blog.$delete(function(blog){
      $scope.blogs.splice($scope.blogs.indexOf(blog),1);
    });
  };

  //Create A New Blog
  $scope.createBlog = function(blog){
    BlogService.save(blog, function(){
      $location.path('/');
    });
  };

  //Access Single Blog Post
  BlogService.get({id: $routeParams.id}, function(blog){
    $scope.blog = blog;
  }, function(err){
    $location.path('/');
  });

  //Edit A Blog Post
  $scope.editBlog = function(blog){
    console.log("This is working!");
    $scope.blog.$update(function(){
      $location.path('/');
    });
  };


  
  
}]);

app.controller("ProjectsCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("ContestCtrl", function($rootScope, $scope, $http, $location, $state) {
  
});

app.controller("SignUpCtrl", ['$scope', '$http', '$rootScope', '$location', '$state', function($scope, $http, $rootScope, $location, $state) {
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
}]);

app.controller("LoginCtrl", ['$scope','$http','Auth', '$rootScope', '$state', '$localStorage', function($scope,$http,Auth, $rootScope, $state, $localStorage) {

  
  $scope.login = function(user) {
    $http.post('/login', user)
    .success(function(response) {
      $scope.$storage = $localStorage.$default({
        currentUser: response.username
      });
      $state.go('form.main');
    });
  };


}]);


