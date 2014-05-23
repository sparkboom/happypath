define([], function () {
    'use strict';

    var alertAction = {
        name: 'alert',
        command: function alert(message) {
            this.message = message;
            this.run = function (result) {
                alert(this.message);
                return result;
            }
        }
    };

    return [alertAction];
});
