var app = angular.module('dacApp', ['ngAnimate','ui.router','ngResource','ngStorage']);

app.config(function($stateProvider,$urlRouterProvider) {  
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl',
    resolve: {
      //..
    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'SignUpCtrl',
    resolve: {
      //..
    }
  })
  
  .state('form', {
    url: '/form',
    templateUrl: 'views/form.html',
    controller: 'FormCtrl',
    resolve: {
      //..
    }
  })

  .state('form.main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    resolve: {
      //..
    }
  })

  .state('form.account', {
    url: '/account',
    templateUrl: 'views/account.html',
    controller: 'AccountCtrl',
    resolve: {
      //..
    }
  })

  .state('form.artists', {
    url: '/artists',
    templateUrl: 'views/artists.html',
    controller: 'ArtistCtrl',
    resolve: {
      //..
    }
  })

  .state('form.artist-profile', {
    url: '/artists/:id',
    templateUrl: 'views/artist-profile.html',
    controller: 'ArtistProfileCtrl',
    resolve: {
      //..
    }
  })

  .state('form.teams', {
    url: '/teams',
    templateUrl: 'views/teams.html',
    controller: 'TeamsCtrl',
    resolve: {
      //..
    }
  })

  .state('form.team-profile', {
    url: '/teams:id',
    templateUrl: 'views/team-profile.html',
    controller: 'TeamProfileCtrl',
    resolve: {
      //..
    }
  })

  .state('form.events', {
    url: '/events',
    templateUrl: 'views/events.html',
    controller: 'EventsCtrl',
    resolve: {
      //..
    }
  })

  .state('form.projects', {
    url: '/projects',
    templateUrl: 'views/projects.html',
    controller: 'ProjectsCtrl',
    resolve: {
      //..
    }
  })

  .state('form.contest', {
    url: '/contests',
    templateUrl: 'views/contests.html',
    controller: 'ContestCtrl',
    resolve: {
      //..
    }
  })

    .state('form.blog', {
    url: '/blog',
    templateUrl: 'views/blog.html',
    controller: 'BlogCtrl',
    resolve: {
      //..
    }
  })

   .state('form.contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl',
    resolve: {
      //..
    }
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
