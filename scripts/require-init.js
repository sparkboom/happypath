(function (document) {
    'use strict';

    require.config({
        baseUrl: 'modules/happypath',
        paths: {
            'angular': '../bower_components/angular/angular',
            'jquery': '../bower_components/jquery/dist/jquery',
            'lodash': '../bower_components/lodash/dist/lodash',
            'app': '../modules/happypath/happypath.app'
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

    require(['angular','app'], function(angular) {

        //start
        //console = chrome.extension.getBackgroundPage().console;

        console.log('test!!');
        angular.bootstrap(document,['happypath']);

    });

})(document);

