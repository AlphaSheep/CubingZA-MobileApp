'use strict';
angular.module('main')
.controller('RecordCtrl', function ($log, $resource, Config) {
  var ctrl = this;

  this.RecordsAPI = $resource(Config.ENV.SERVER_URL + '/records');

  this.refreshRecords = function () {
    ctrl.loading = true;
    ctrl.hasError = false;
    ctrl.hasRecords = false;
    ctrl.status = 'Loading...';

    ctrl.records = ctrl.RecordsAPI.query(function () {
      $log.log('Success');
      ctrl.loading = false;
      ctrl.hasRecords = true;
      ctrl.status = 'Ready';

      ctrl.records.sort(function (a, b) {return a.eventRank - b.eventRank;});

    }, function () {
      $log.log('Error');
      ctrl.loading = false;
      ctrl.hasError = true;
      ctrl.status = 'Unable to connect to server. Check your internet connection.';
    });
  };

  this.refreshRecords();

  this.toggleGroup = function (group) {
    if (ctrl.isGroupShown(group)) {
      ctrl.shownGroup = null;
    } else {
      ctrl.shownGroup = group;
    }
  };

  this.isGroupShown = function (group) {
    return ctrl.shownGroup === group;
  };
});
