var darkTheme = localStorage.getItem('dark-theme');

document.addEventListener('keydown', function (e) {
    
    if (e.shiftKey && e.altKey) {
        switch (e.code) {

            case 'KeyD':
                updateLocalStorage();
                toggleTheme();
                break;

        }
    }
})

function toggleTheme() {

    document.documentElement.classList.toggle('dark-mode');
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].classList.toggle('inverted');
    }

    var videos = document.getElementsByTagName('video');
    console.log(videos)
    for (var i = 0; i < videos.length; i++) {
        console.log(videos[i].classList)
        videos[i].classList.toggle('inverted');
    }

}

if (darkTheme == "true") {
    toggleTheme();
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.data == "toggle") {
            updateLocalStorage();
            toggleTheme();
            sendResponse({ data: "done" });
        }
    }
);


function updateLocalStorage() {

    darkTheme = localStorage.getItem('dark-theme') && localStorage.getItem('dark-theme') == "true" ? false : true;
    localStorage.setItem('dark-theme', darkTheme);

}