chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/.+/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, {file: "./src/css/style.css"});
            chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("[INFO] Foreground script injected successfully!"));
        }
    });
});

