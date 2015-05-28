/* this one redirects */
chrome.tabs.onUpdated.addListener(function(id, info, tab){

	var x = "";

    if(tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.pageAction.show(tab.id);

        //redirect that shit
        chrome.storage.sync.get(x, function(data){
            if(tab.url.toLowerCase().indexOf(x) > -1){
                chrome.tabs.update(tab.id, {url: "https://www.messenger.com"});
            }
        });
    }

});