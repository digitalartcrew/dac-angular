var app = angular.module('dacApp', ['ngAnimate','ui.router','ngResource','ngStorage']);

app.config(function($stateProvider,$urlRouterProvider) {  
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl',
    authorization: false
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'SignUpCtrl',
    authorization: false
  })
  
  .state('form', {
    url: '/form',
    templateUrl: 'views/form.html',
    controller: 'FormCtrl',
    authorization: true
  })

  .state('form.main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    authorization: true
  })

  .state('form.account', {
    url: '/account',
    templateUrl: 'views/account.html',
    controller: 'AccountCtrl',
    authorization: true
  })

  .state('form.artists', {
    url: '/artists',
    templateUrl: 'views/artists.html',
    controller: 'ArtistsCtrl',
    authorization: true
  })

  .state('form.artist-profile', {
    url: '/artists/:id',
    templateUrl: 'views/artist-profile.html',
    controller: 'ArtistProfileCtrl',
    authorization: true
  })

  .state('form.teams', {
    url: '/teams',
    templateUrl: 'views/teams.html',
    controller: 'TeamsCtrl',
    authorization: true
  })

  .state('form.team-profile', {
    url: '/teams:id',
    templateUrl: 'views/team-profile.html',
    controller: 'TeamProfileCtrl',
    authorization: true
  })

  .state('form.events', {
    url: '/events',
    templateUrl: 'views/events.html',
    controller: 'EventCtrl',
    authorization: true
  })

  .state('form.projects', {
    url: '/projects',
    templateUrl: 'views/projects.html',
    controller: 'ProjectsCtrl',
    authorization: true
  })

  .state('form.contest', {
    url: '/contests',
    templateUrl: 'views/contest.html',
    controller: 'ContestCtrl',
    authorization: true
  })
  
  $urlRouterProvider.otherwise('login');
});

app.run(function ($rootScope, $state, Auth) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.authenticate && !Auth.isAuthenticated()){
      // User isn’t authenticated
      $state.transitionTo("login");
      event.preventDefault(); 
    }
  });
});
