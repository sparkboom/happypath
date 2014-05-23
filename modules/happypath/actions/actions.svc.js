(function(define, angular) {

    define(['actions/alert'], function (alertAction) {
        'use strict';

        angular.module('happypath.actions', [])
            .service(alertAction);
        /*
            .service('happypath.action-library',
            ['happypath.actions.alert', function (alert) {

                function actionLibrary() {
                    this.actions = [];

                    _.each([alert], function (action) {
                        this.actions[action.name] = action.run;
                    }, this);

                }

                return actionLibrary;
            }]);
            */
    });
})(define, angular);
