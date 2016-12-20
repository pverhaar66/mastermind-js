var master = [];
var player = [ null, null, null, null];
var hex = ["red", "blue", "green", "orange", "pink", "darkblue", "grey", "black"];
var ifnput = [[], [], [], [], [], [], [], [], [], []];
var row = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10];

var row1 = document.getElementById('try1');
var row2 = document.getElementById('try2');
var row3 = document.getElementById('try3');
var row4 = document.getElementById('try4');
var row5 = document.getElementById('try5');
var row6 = document.getElementById('try6');
var row7 = document.getElementById('try7');
var row8 = document.getElementById('try8');
var row9 = document.getElementById('try9');
var row10 = document.getElementById('try10');


var ms1 = document.getElementById('ms1'); 
var ms2 = document.getElementById('ms2');
var ms3 = document.getElementById('ms3');
var ms4 = document.getElementById('ms4');

var red = document.getElementById('player1');
var blue = document.getElementById('player2');
var green = document.getElementById('player3');
var orange = document.getElementById('player4');
var pink = document.getElementById('player5');
var darkblue = document.getElementById('player6');
var grey = document.getElementById('player7');
var black = document.getElementById('player8');


(function(){
	red.style.backgroundColor = hex[0];
	blue.style.backgroundColor = hex[1];
	green.style.backgroundColor = hex[2];
	orange.style.backgroundColor = hex[3];
	pink.style.backgroundColor = hex[4];
	darkblue.style.backgroundColor = hex[5];
	grey.style.backgroundColor = hex[6];
	black.style.backgroundColor = hex[7];	 
})()

function reset(){
	console.log("reset");
	master = [];
	player = [null, null, null, null];
	var input = [[],[],[],[],[],[],[],[],[],[]];
	generateCode()
}

function generateCode(length, colors) {
	var length = length || 4;
	var colors = colors || 6;

	if (length > 8) {
		length = 4;
	}
	for (var i=1; i<=length; i++) {
		var digit = Math.floor((Math.random() * colors) + 1); 
		master.push(hex[digit]);
	}
	console.log(master);

	colour();
}

function colour() {
	console.log("colour check")
	ms1.style.backgroundColor = master[0];
	ms2.style.backgroundColor = master[1];
	ms3.style.backgroundColor = master[2];
	ms4.style.backgroundColor = master[3];
	console.log("colouring done")
}



function userinput(number) {
		

	var ps1 = document.getElementById('ps1')
	var ps2 = document.getElementById('ps2')
	var ps3 = document.getElementById('ps3')
	var ps4 = document.getElementById('ps4')


	if (player[0] == null){
		player[0] = number;
		player.push(hex[number]);

	} else if (player[1] == null) { 
			  	player[1] = number;
			  	player.push(hex[number]);
	} else if (player[2] == null) {
				player[2] = number;
				player.push(hex[number]);
	} else if (player[3] == null) {
				player[3] = number;
				player.push(hex[number]);
	}
	

	console.log(player);

	ps1.style.backgroundColor = player[4];
	ps2.style.backgroundColor = player[5];
	ps3.style.backgroundColor = player[6];
	ps4.style.backgroundColor = player[7];




}


function checkrow(index) {


	var ch1 = document.getElementById('ch1');
	var ch2 = document.getElementById('ch2');
	var ch3 = document.getElementById('ch3');
	var ch4 = document.getElementById('ch4');


if(player[0] == null){
	alert('Error 404 colour not found');
	console.log('SmartAI : the player is being stupid');
}else if (player[4] == master[0]) {
		ch1.style.backgroundColor = 'red';
				
	if (player[5] == master[1]){
		ch2.style.backgroundColor = 'red';
	}
	if (player[6] == master[2]){
		ch3.style.backgroundColor = 'red';
		}

	if (player[7] == master[3]){
		ch4.style.backgroundColor = 'red';
	}


	}
}

function changerow(){

	


}

