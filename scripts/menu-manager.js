function loadDependencies() {
    chrome.tabs.executeScript(null, { file: "scripts/lodash.js" });
    chrome.tabs.executeScript(null, { file: "scripts/jquery-1.11.0.min.js" });
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
