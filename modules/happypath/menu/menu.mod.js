(function () {
    'use strict';

    require(['angular', 'menu/menu.ctrl'], function (angular) {

        var menuModule = angular.module('happypath.menu', []);

        return menuModule;

    });
})();