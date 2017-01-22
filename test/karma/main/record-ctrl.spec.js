'use strict';

describe('module: main, controller: RecordCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var RecordCtrl;
  beforeEach(inject(function ($controller) {
    RecordCtrl = $controller('RecordCtrl');
  }));

  it('should do something', function () {
    expect(!!RecordCtrl).toBe(true);
  });

});
