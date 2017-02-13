export default class Player {
    constructor(videoId, playerElId){
        // TODO: accept parameters (size, ...)
        // TODO: currently not checking if YT API is loaded
        this.videoId = videoId;
        this.playerElId = playerElId;
        this.YTPlayer = undefined;
        this.initYTPlayer();
    }

    initYTPlayer() {
        // Creates an <iframe> (and YouTube player) after the API code downloads.        
        this.YTPlayer = new YT.Player(this.playerElId, {
            height: '390',
            width: '640',
            videoId: this.videoId,
            events: {
                'onReady': this.onPlayerReady,
                'onStateChange': this.onPlayerStateChange
            },
            playerVars: {
                showinfo: 0,
                rel: 0,
                modestbranding: 1,
                hl: document.documentElement.lang,
                playsinline: 0,
            },
        });
    }

    // The API will call this function when the video player is ready.
    onPlayerReady(event) {
        event.target.playVideo();
    }

    // The API calls this function when the player's state changes.
    onPlayerStateChange(event) {

    }

    stopVideo() {
        this.YTPlayer.stopVideo();
    }

    destroy() {
        if (typeof(this.YTPlayer.destroy) === 'function') {
            this.YTPlayer.destroy();
        }
    }
}