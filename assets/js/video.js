
		// Inject YouTube API script
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		// global variable for the player
		var player;

		// this function gets called when API is ready to use
		function onYouTubePlayerAPIReady() {
		  // create the global player from the specific iframe (#video)
		  player = new YT.Player('hero-video',{
		  	events: {
	            'onReady': onPlayerReady,
	          }
		  });
		}

		

		function onPlayerReady(event) {

			var playBtn = $('.hero__play');
			var closeBtn = $('.hero__close');
			var overlay = $('.hero__overlay');
			var modal = $('.hero__modal');

			$(playBtn).click(function (e) {
			    $(overlay).css('left', 0);
			    $(overlay).addClass('hero__overlay--active');
			   // player.api("play");
			    player.playVideo();

			    e.preventDefault();
			});

			$.merge(closeBtn, overlay).click(function (e) {
			    $(overlay).removeClass('hero__overlay--active');
			    setTimeout(function () {
			        $(overlay).css('left', '-100%');
			    }, 300);
			  player.stopVideo();

			    e.preventDefault();

			});

			// Used for the full width videos
			$(modal).fitVids();

		}

