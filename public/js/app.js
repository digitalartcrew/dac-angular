var app = angular.module('dacApp', ['ngAnimate','ui.router','ngResource','ngCookies']);

app.config(function($stateProvider,$urlRouterProvider) {  
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'SignUpCtrl'
  })
  
  .state('form', {
    url: '/form',
    templateUrl: 'views/form.html',
    controller: 'FormCtrl'
  })

  .state('form.main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })

  .state('form.account', {
    url: '/account',
    templateUrl: 'views/account.html',
    controller: 'AccountCtrl'
  })

  .state('form.artists', {
    url: '/artists',
    templateUrl: 'views/artists.html',
    controller: 'ArtistsCtrl'
  })

  .state('form.artist-profile', {
    url: '/artists/:id',
    templateUrl: 'views/artist-profile.html',
    controller: 'ArtistProfileCtrl'
  })

  .state('form.teams', {
    url: '/teams',
    templateUrl: 'views/teams.html',
    controller: 'TeamsCtrl'
  })

  .state('form.team-profile', {
    url: '/teams:id',
    templateUrl: 'views/team-profile.html',
    controller: 'TeamProfileCtrl'
  })

  .state('form.events', {
    url: '/events',
    templateUrl: 'views/events.html',
    controller: 'EventCtrl'
  })

  .state('form.projects', {
    url: '/projects',
    templateUrl: 'views/projects.html',
    controller: 'ProjectsCtrl'
  })

  .state('form.contest', {
    url: '/contests',
    templateUrl: 'views/contest.html',
    controller: 'ContestCtrl'
  })
  
  $urlRouterProvider.otherwise('login');
});

app.run(['$rootScope', 'Auth', function ($rootScope, Auth) {
  $rootScope.$on('$routeChangeStart', function (event) {

    if (!Auth.isLoggedIn()) {
      console.log('DENY');
      event.preventDefault();
      $state.go('login');
    }
    else {
      console.log('ALLOW');
      $state.go('for');
    }
  });
}]);

