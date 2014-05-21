(function (chrome) {
    'use strict';

    console.log('menu-manager','module loaded');

    require(['jquery'], function ($) {

        console.log('menu-manager', 'instantiated');

        function loadDependencies() {
            chrome.tabs.executeScript(null, { file: "../bower_components/jquery/jquery.js" });
            chrome.tabs.executeScript(null, { file: "../bower_components/angular/angular.js" });
            chrome.tabs.executeScript(null, { file: "../bower_components/lodash/dist/lodash.js" });
            chrome.tabs.executeScript(null, { file: "scripts/queue.js" });
            chrome.tabs.executeScript(null, { file: "scripts/actions.js" });
        };

        document.addEventListener('DOMContentLoaded', function () {
            loadDependencies();

            $('a#action1').click(function () {
                chrome.tabs.executeScript(null, { file: "actions/detailsobjectives.js" });
            });
            $('a#action2').click(function () {
                chrome.tabs.executeScript(null, { file: "actions/enable.js" });
            });
        });

    });

})(chrome);






