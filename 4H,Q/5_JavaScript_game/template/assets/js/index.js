$(document).ready(function() {

	// HTML attribute variables
	var GRID_WIDTH = 600;
	var CELL_SIZE = 60;

	// Game state variables
	var INIT_SCORE = 0;
	var INIT_LIVES = 100;
	var score = INIT_SCORE;
	var lives = INIT_LIVES;
	var DURATION = 1000; // in milliseconds
	var COOKIE_VALUE = 100;

	// Play variables
	var isPlaying = false;
    var interval;

    /* Creates HTML string for a cell given position (x, y) */
    var htmlBuilder = function(x, y) {
        return '<div class="cell"'+
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

	/* Called when one successfully gets a cookie. */
	var getCookie = function() {
		// TODO: remove cookie / event handler
		// TODO: Increase score by COOKIE_VALUE. Update HTML to reflect new score.
	};

	/* Called when one fails to get a cookie. */
	var loseCookie = function() {
		// TODO: remove cookie / event handler
		// TODO: Decrease score by 1. Update HTML to reflect new lives.
	};	

	/* Attach "cookie" id and click event handler to a random cell */
	var placeNewCookie = function() {
		var cookieCell = null; // TODO get random .cell
		cookieCell
			.attr("id", "cookie")
			.click(function() {
				// click event handler, called when user clicks on #cookie
				if (isPlaying) getCookie();
			});
	};

	/* After each duration, check to see if the user got the cookie or not.
		If cookie still on screen, call loseCookie.
		If no more lives, call endGame.
		If no cookies on screen, call placeNewCookie.
	 */
	var check = function() {
		// TODO
	};

	/* Start/resume game */
	var play = function() {
        clearInterval(interval); // no matter what, first clear interval
        interval = setInterval(function() {
        	check(); // this is executed every DURATION milliseconds
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
		// TODO
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