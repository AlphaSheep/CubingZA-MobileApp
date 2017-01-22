'use strict';

function competionController ($log, $resource, $state, $stateParams, Config) {

  var ctrl = this;

  this.CompetitionsAPI = $resource(Config.ENV.SERVER_URL + '/events/upcoming');

  this.refreshCompsList = function () {
    ctrl.comps = [];

    ctrl.hasComps = false;
    ctrl.loading = true;
    ctrl.hasError = false;
    ctrl.status = 'Loading...';

    ctrl.comps = ctrl.CompetitionsAPI.query(function () {
      ctrl.hasComps = true;
      ctrl.loading = false;
      ctrl.status = 'ready';
      if ($stateParams.compId) {
        ctrl.comp = ctrl.comps.filter(function (comp) {return comp.registrationName === $stateParams.compId;})[0];
      }
      else {
        ctrl.comps.sort(function (a, b) {if (a.startDate < b.startDate) {return -1;} {return 1;}});
      }
    }, function () {
      ctrl.loading = false;
      ctrl.hasError = true;
      ctrl.status = 'Unable to connect to server. Check your internet connection.';
    });
  };

  this.refreshCompsList();

  this.viewCompDetails = function (comp) {
    $state.go('main.competitionDetail', comp);
  };

  this.go = function (comp) {
    $state.go('main.competitionDetail', comp);
  };

  this.goToRegistration = function () {
    if (ctrl.comp) {
      window.open('https://www.worldcubeassociation.org/competitions/' + ctrl.comp.registrationName + '/register', '_system');
    }
  };
}

angular.module('main')
.controller('CompetitionsCtrl', competionController);
