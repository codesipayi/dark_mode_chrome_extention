
document.getElementById('togBtn').addEventListener('click',function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { data: "toggle" }, function (
            response
        ) {
            console.log(response.data);
        });
    });
})