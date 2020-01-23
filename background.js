console.log("Background running");

chrome.browserAction.onClicked.addListener(() => {
    openDefaultPages();
    //chrome.storage.sync.set("")
});

chrome.commands.onCommand.addListener((command) => {
    if (command == "duplicate_page") {
        /* 
         * If the command is to duplicate the page find all 
         * the active tabs last focused and duplicate the first.
         */
        chrome.tabs.query(
            {'active': true, 'lastFocusedWindow': true}, 
            (tabs) => { chrome.tabs.duplicate(tabs[0].id); }
        );
    }
    if (command == "default_pages") {
        openDefaultPages();
    }
});

/**
 * This function opens the default pages
 */
function openDefaultPages() {
    //Open the default pages
    // chrome.storage.sync.get(["homePages"], (pages) => {
    //     console.log(pages);
    //     pages.homePages.forEach((page) => {chrome.tabs.create({'url': page});});
    // });
    chrome.tabs.create({'url': "https://facebook.com"});
    chrome.tabs.create({'url': "https://youtube.com"});
    chrome.tabs.create({'url': "https://web.whatsapp.com/"});
}
