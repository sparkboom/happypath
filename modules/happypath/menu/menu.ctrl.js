(function () {
    require(['angular'], function (angular) {
        'use strict';

        var menuCtrl = angular.module('happypath.menu').controller('menuCtrl',
            [function () {
                this.header = "Happy Paths";
            }]);

        return menuCtrl;
    });

})();