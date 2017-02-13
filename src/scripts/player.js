export default class Player {
    constructor(videoId, playerElId){
        // TODO: accept el to attach player to
        // TODO: accept parameters (size, ...)
        // TODO: currently not checking if YT API is loaded
        this.videoId = videoId;
        this.playerElId = playerElId;
        
        this.YTPlayer = undefined;

        // this.loadYouTubeIframeAPI();

        this.initYTPlayer();

        // Attach to DOM so that YT API can call this.onYouTubeIframeAPIReady().
        // window.onYouTubeIframeAPIReady = () => this.onYouTubeIframeAPIReady();
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
            }
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
        console.log(this);
        if (typeof(this.YTPlayer) === 'function') {
            this.YTPlayer.destroy();
        }
    }
}