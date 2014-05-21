(function () {
    'use strict';

    require.config({
        baseUrl: 'scripts',
        paths: {
            'angular': '../bower_components/angular/angular',
            'jquery': '../bower_components/jquery/dist/jquery',
            'lodash': '../bower_components/lodash/dist/lodash'
        },
        shim: {
            angular: {
                exports: 'angular'
            },
            jquery: {
                exports: '$'
            },
            lodash: {
                exports: '_'
            }
        }
    });

    console.log('require-init');

    require(['jquery','menu-manager'], function($, menuMgr) {

        //start
        console = chrome.extension.getBackgroundPage().console;

        console.log('test!!');

    });

})();

