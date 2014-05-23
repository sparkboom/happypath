(function () {
    require(['angular'], function (angular) {
        'use strict';

        angular.module('happypath')
            .service('menu',
            function () {
                return [
                    {
                        id: 'test1',
                        name: 'Test 1'
                    }
                ];
            });
    });

})();