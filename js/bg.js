chrome.tabs.onUpdated.addListener(function(id, info, tab){
	var x = "reeves.schraner";
    if(tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.pageAction.show(tab.id);

        chrome.storage.sync.get(x, function(data){
            if(tab.url.toLowerCase().indexOf("facebook.com/" + x) > -1){
                chrome.tabs.update(tab.id, {url: "http://thenicestplaceontheinter.net"});
            }
        });
    }

});