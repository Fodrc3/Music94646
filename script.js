// Function to play video
function playVideo() {
    const player = document.getElementById('youtubePlayer').contentWindow;
    player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

// Function to pause video
function pauseVideo() {
    const player = document.getElementById('youtubePlayer').contentWindow;
    player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
