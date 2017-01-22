'use strict';
angular.module('main')
.controller('ContactCtrl', function ($log, $resource, $cookies, Config) {
  this.emailSender = $resource(Config.ENV.SERVER_URL + '/contact/send', {},
                               {send: {method: 'POST'}});

  this.name = '';
  this.email = '';
  this.subject = '';
  this.message = '';

  var ctrl = this;

  this.error = false;
  this.errorMessage = '';

  this.contactSend = function (form) {
    ctrl.submitted = true;

    if (form.email.$valid) {
      var message = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message || ''
      };

      this.emailSender.send(message).$promise
      .then(function (response) {
        if (response.success) {
          form.$setPristine();
          ctrl.submitted = true;
          ctrl.error = false;
          ctrl.errorMessage = 'Message sent succesfully';
        }
        else {
          ctrl.submitted = false;
          ctrl.error = true;
          ctrl.errorMessage = 'Server encountered an error while attempting to send message';
          ctrl.submitted = false;
        }
      })
      .catch(function () {
        ctrl.submitted = false;
        ctrl.error = true;
        ctrl.errorMessage = 'Error while attempting to send message';
      });
    }
  };
});
