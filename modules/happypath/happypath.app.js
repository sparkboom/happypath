(function () {
    'use strict';

    require(['angular','menu/menu.mod'], function (angular) {

        var happypathApp = angular.module('happypath',['happypath.menu']);
        return happypathApp;

    });
})();