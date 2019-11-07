/*
 * kt.luke
 * ehowlrhdid2@gmail.com
 * 2019.05
 */
var audio = {
    init: function() {
    var $that = this;
        $(function() {
            $that.components.media();
        });
    },
    components: {
        media: function(target) {
            var media = $('audio.fc-media', (target !== undefined) ? target : 'body');
            if (media.length) {
                media.mediaelementplayer({
                    audioHeight: 40,
                    features : ['playpause', 'current', 'duration', 'progress', 'tracks', 'fullscreen'],
                    alwaysShowControls      : true,
                    timeAndDurationSeparator: '<span></span>',
                    pauseOtherPlayers: true,
                    iPadUseNativeControls: false,
                    iPhoneUseNativeControls: false,
                    AndroidUseNativeControls: false
                });
            }
        },

    },
};
audio.init();
