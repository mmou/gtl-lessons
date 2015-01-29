$(document).ready(function() {

	// HTML attribute variables
	var GRID_WIDTH = 600;
	var CELL_SIZE = 60;

	// Game state variables
	var INIT_SCORE = 0;
	var INIT_LIVES = 10;
	var score = INIT_SCORE;
	var lives = INIT_LIVES;
	var DURATION = 1000; // in milliseconds
	var COOKIE_VALUE = 100;

	// Play variables
	var isPlaying = false;
    var interval;

    /* Creates HTML string for a cell */
    var htmlBuilder = function(x, y) {
        return '<div class="cell"' + 
            'data-x="' + x + '" ' +
            'data-y="' + y + '" ' +
            'style="width: ' + CELL_SIZE + 'px; ' +
            'height: ' + CELL_SIZE + 'px; ' + 
            'top: ' + CELL_SIZE*y + 'px; ' +
            'left: ' + CELL_SIZE*x + 'px">' + 
            '<span class="win" hidden>+' + COOKIE_VALUE + '</span>' +
            '<span class="lose" hidden>:(</span>' +
            '</div>'
    };

    /* Creates grid by appending cell HTML strings */
	var drawGrid = function(el) {
		el.html("");
		for (var x=0; x<GRID_WIDTH/CELL_SIZE; x++) {
			for (var y=0;y<GRID_WIDTH/CELL_SIZE;y++) {
				el.append(htmlBuilder(x, y));
			}
		}
	};

	/* Increases score by COOKIE_VALUE. Updates HTML to reflect new score. */
	var incrementScore = function() {
		score += COOKIE_VALUE;
		$("#score").html(score);
	}

	/* Decreases score by 1. Updates HTML to reflect new lives. */
	var decrementLives = function() {
		lives--;
		$("#lives").html(lives);		
	}

	/* Called when one successfully gets a cookie. */
	var getCookie = function() {
		$("#cookie")
			.removeAttr("id", "cookie")
			.unbind('click')
			.children(".win").fadeIn().fadeOut();
		incrementScore();
	};

	/* Called when one fails to get a cookie. */
	var loseCookie = function() {
		$("#cookie")
			.removeAttr("id", "cookie")
			.unbind('click')
			.children(".lose").fadeIn().fadeOut();			
		decrementLives();
	};	

	/* Attach "cookie" id and click event handler to a random cell */
	var placeNewCookie = function() {
		var randomIndex = Math.floor(Math.random()*Math.pow(GRID_WIDTH/CELL_SIZE, 2));
		var cookieCell = $($(".cell")[randomIndex])
		cookieCell
			.attr("id", "cookie")
			.click(function() {
				if (isPlaying) getCookie();
			});
	};

	/* After each duration, check to see if the user got the cookie or not.
		If cookie still on screen, call loseCookie.
		If no more lives, call endGame.
		If no cookies on screen, call placeNewCookie.
	 */
	var check = function() {
		var cookie = $("#cookie");
		if (cookie.length > 0 ) {
			loseCookie();
		};
		if (lives <= 0) {
			endGame();
		} else {
			placeNewCookie();
		}
	};

	/* Start/resume game */
	var play = function() {
        clearInterval(interval); // no matter what, first clear interval
        interval = setInterval(function() {
        	check();
        }, DURATION);
        isPlaying = true;

		$("#play").hide();
		$("#pause").show();

	};

	/* Pause game */
	var pause = function() {
		clearInterval(interval);
		isPlaying = false;

		$("#pause").hide();
		$("#play").show();

	};

	/* Clear any cookies on screen. Reset score and lives. Pause. */
	var newGame = function() {
		$("#cookie")
			.removeAttr("id", "cookie")
			.unbind('click');

		score = INIT_SCORE;
		lives = INIT_LIVES;
		$("#score").html(score);
		$("#lives").html(lives);		
		pause();
	};

	/* When game ends, send alert to user. Call newGame. */
	var endGame = function() {
		alert("Your score is " + score + ". New Game?");
		newGame();
	};


	// Button event handlers

	$("#new").click(function() {
		newGame();
	})

    $("#play").click(function() {
    	if (!isPlaying) play();
    });

    $("#pause").click(function() {
    	if (isPlaying) pause();
    });


    // Execute once page loads
	drawGrid($("#grid"));
	newGame();

})