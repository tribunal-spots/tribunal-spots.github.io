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
            height: '100%',
            width: '100%',
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
        console.log(event);
        switch(event.data) {
            case YT.PlayerState.ENDED:
                event.target.destroy();
                document.querySelector('.layer__video').classList.remove('layer__video--playing');
                break;
        }
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