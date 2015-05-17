/* this one hides */
function sayonara(item){
	item.style.display = "none";
}
function goodbye(){
	chrome.storage.sync.get(function(data){
		_.each(storyContainerClasses, function(storyContainerClass){
			posts = document.getElementsByClassName(storyContainerClass);

			//g'bye!
			_.each(posts, function(post){
				sayonara(post);
			});
		});
	});
}

