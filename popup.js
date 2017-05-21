document.addEventListener('DOMContentLoaded', function() {
    var queryInfo = {};
    var currentLinks = [];

    chrome.tabs.query(queryInfo, function(tabs){
        for (var index in tabs) {
            var tab = tabs[index];
            if (!tab.url.match(/^http/)) {
                continue;
            }
            currentLinks.push(tab.url);
        }
        $("#tablist").text(currentLinks.join("\n"));
        $("#summary").text([currentLinks.length, "total tabs"].join(" "));
    });
});
