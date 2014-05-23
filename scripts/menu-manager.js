(function (chrome) {
    'use strict';

    require(['jquery', 'lodash'], function ($,_) {
        var dependencies = [
            "../bower_components/jquery/jquery.js",
            "../bower_components/lodash/dist/lodash.js",
            "scripts/queue.js",
            "scripts/actions.js"];

        var menu = [
            {
                name: 'action1',
                dependency: 'actions/detailsobjectives.js'
            },
            {
                name: 'action2',
                dependency: 'actions/enable.js'
            }
        ];

        function loadDependency(dependency) {
            chrome.tabs.executeScript(null, { file: dependency });
        }

        $(function() {
            _.each(dependencies, loadDependency);

            _.each(menu, function (menuItem) {
                $('a#' + menuItem.name).click(function () {
                    debugger;
                    loadDependency(menuItem.dependency);
                });
            });
        });

    });

})(chrome);