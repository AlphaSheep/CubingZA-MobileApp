'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ngResource',
  'ngCookies'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/about');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
//      .state('main.list', {
//        url: '/list',
//        views: {
//          'pageContent': {
//            templateUrl: 'main/templates/list.html',
//            // controller: '<someCtrl> as ctrl'
//          }
//        }
//      })
//      .state('main.listDetail', {
//        url: '/list/detail',
//        views: {
//          'pageContent': {
//            templateUrl: 'main/templates/list-detail.html',
//            // controller: '<someCtrl> as ctrl'
//          }
//        }
//      })
      .state('main.about', {
        url: '/about',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/about.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.contact', {
        url: '/contact',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/contact.html',
            controller: 'ContactCtrl as ctrl'
          }
        }
      })
      .state('main.competitions', {
        url: '/events',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/competition.html',
            controller: 'CompetitionsCtrl as ctrl'
          }
        }
      })
      .state('main.records', {
        url: '/records',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/record.html',
            controller: 'RecordCtrl as ctrl'
          }
        }
      })
      .state('main.competitionDetail', {
        url: '/events/:compId',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/competition-detail.html',
            controller: 'CompetitionsCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
});
