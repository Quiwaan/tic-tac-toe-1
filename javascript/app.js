var grid = [
			["tl", "tm", "tr"],
    		["ml", "mm", "mr"],
    		["bl", "bc", "br"],
]

var game = {
	player: "X",
	row:'',
	col:'',
	playerMove: function() {
		grid[game.row][game.col] = game.player;
		game.checkWin()
		if (game.player === "X") {
			game.player = "O";
		} else {
			game.player = "X";
		}
	},

	resetBoard: function() {
		grid = [
				["tl", "tm", "tr"],
    			["ml", "mm", "mr"],
    			["bl", "bc", "br"],
    			]
	},

	checkWin: function() {
		if (grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) {			//Row 1
			console.log("player " + game.player + " wins! row 1");
		} else if (grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) {	//Row 2
			console.log("player " + game.player + " wins! row 2");
		} else if (grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) {	//Row 3
			console.log("player " + game.player + " wins! row 3");
		} else if (grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) {	//Col 1
			console.log("player " + game.player + " wins! col 1");
		} else if (grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) {	//Col 2
			console.log("player " + game.player + " wins! col 2");
		} else if (grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) {	//Col 3
			console.log("player " + game.player + " wins! col 3");
		} else if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {	//Diag TL to BR
			console.log("player " + game.player + " wins! diag1");
		} else if (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) {	//Diag TR to BL
			console.log("player " + game.player + " wins! diag 2");
		}
	}
}

window.onload = function() {

	$(".gameCell").click(function() {
		var $location = $(this).attr("id");
		var arrLoc = $location.split("-");
		// var $location = $(this).attr("id").split("-"); //gets id of clicked item and splits 
		// game.row = parseInt($location[0]); 
		// game.col = parseInt($location[1]);
		game.row = parseInt(arrLoc[0]); 
		game.col = parseInt(arrLoc[1]);
		console.log(game.row, game.col);
		document.getElementById($location).innerHTML = game.player;
		game.playerMove();
	})

}






// var player = 1;


// function clickBtn(btn) {
// 	var btnElem = document.getElementById(btn);
// 	if (player === 1) {
// 		btnElem.value = "X";
// 		btnElem.disabled = "disabled";
// 		player -= 1;
// 	} else {
// 		btnElem.value = "O";
// 		btnElem.disabled = "disabled";
// 		player += 1;
// 	}
// }

// function winner(){
// 	if (document.getElementById(btn).value = "X") {}
// }
