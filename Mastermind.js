var master = [];
var player = [ null, null, null, null];
var hex = ["red", "blue", "green", "orange", "pink", "darkblue", "grey", "black"];
var row = 1;

var wished = document.getElementById('wished').value;
wished.value = 6;


var infoscrn = document.getElementById('infoscreen')
infoscrn.style.display = 'none';
infoscrn.value = 0;

var winner = document.getElementById('win')
winner.style.display = 'none';

var settings = document.getElementById('setting')
settings.style.display = 'none'; 
settings.value = 0;


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

function createwin(){
	winner.style.display = 'block';
}

function sttn(){
	
	
	if (settings.value == 0) {
		settings.style.display = 'block';
		settings.value = 1;
	}else{
		console.log('saved');
		settings.value = 0;
		settings.style.display = 'none';
	}
	return wished;
}
var wished;

function info(){
	
	if (infoscrn.value == 0) {
		infoscrn.style.display = 'block';
		infoscrn.value = 1;
	}else{
		infoscrn.style.display = 'none';
		infoscrn.value = 0;
	}
}

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
	location.reload();
}


function generateCode() {

	for (var i=1; i<=4; i++) {
		var digit = Math.floor((Math.random() *6 ) + 1); 
		master.push(hex[digit]);

	console.log(master);  
	}
	colour();
}
function colour() {
	console.log("colour check")
	ms1.style.backgroundImage = "url('img/qeustion.jpg')";
	ms2.style.backgroundImage = "url('img/qeustion.jpg')";
	ms3.style.backgroundImage = "url('img/qeustion.jpg')";
	ms4.style.backgroundImage = "url('img/qeustion.jpg')";
	
	console.log("colouring done")
}


function userinput(number) {
	var ps1 = document.getElementById('ps1_'+ row);
	var ps2 = document.getElementById('ps2_'+ row);
	var ps3 = document.getElementById('ps3_'+ row);
	var ps4 = document.getElementById('ps4_'+ row);


	if (player[0] == null){
		player[0] = (hex[number]);
		

	} else if (player[1] == null) { 
			  	player[1] = (hex[number]);
	
	} else if (player[2] == null) {
				player[2] = (hex[number]);
				
	} else if (player[3] == null) {
				player[3] = (hex[number]);
				
	}
	

	console.log(player);	


	ps1.style.backgroundColor = player[0];
	ps2.style.backgroundColor = player[1];
	ps3.style.backgroundColor = player[2];
	ps4.style.backgroundColor = player[3];

}


function checkrow(index) {

var ch1 = document.getElementById('ch1_'+ row);
var ch2 = document.getElementById('ch2_'+ row);
var ch3 = document.getElementById('ch3_'+ row);
var ch4 = document.getElementById('ch4_'+ row);

if(player[0] == null){
	alert('Error 404 colour not found');
	console.log('Mastermind : the player is being stupid');

}else if (player[0] == master[0]) {
		ch1.style.backgroundColor = 'red';
	}else if (player[0] != master[0]) {

		if (player[0] == master[1]) {
			ch2.style.backgroundColor = 'white';
		if (player[0] == master[2]) {
			ch3.style.backgroundColor = 'white';
		if (player[0] == master[3]) {
			ch4.style.backgroundColor = 'white';
		}
		}
	}
}

	if (player[1] == master[1]){
		ch2.style.backgroundColor = 'red';
	}else if (player[1] != master[1]) {

		if (player[1] == master[0]) {
			ch1.style.backgroundColor = 'white';
		if (player[1] == master[2]) {
			ch3.style.backgroundColor = 'white';
		if (player[1] == master[3]) {
			ch4.style.backgroundColor = 'white';
		}
		}
	}	
}

	if (player[2] == master[2]){
		ch3.style.backgroundColor = 'red';
	}else if (player[2] != master[2]) {

		if (player[2] == master[0]) {
			ch1.style.backgroundColor = 'white';
		if (player[2] == master[1]) {
			ch2.style.backgroundColor = 'white';
		if (player[2] == master[3]) {
			ch4.style.backgroundColor = 'white';
		}
		}
	}	
}

	if (player[3] == master[3]){
		ch4.style.backgroundColor = 'red';
	}else if (player[3] != master[3]) {

		if (player[3] == master[0]) {
			ch1.style.backgroundColor = 'white';
		if (player[3] == master[1]) {
			ch2.style.backgroundColor = 'white';
		if (player[3] == master[2]) {
			ch3.style.backgroundColor = 'white';
		}
		}
	}	
}

	if(player[0] == master[0] && player[1] == master[1] && player[2] == master[2] && player[3] == master[3]){

	ms1.style.backgroundImage = 'none';
	ms1.style.backgroundColor = master[0];
	ms2.style.backgroundImage = 'none';
	ms2.style.backgroundColor = master[1];
	ms3.style.backgroundImage = 'none';
	ms3.style.backgroundColor = master[2];
	ms4.style.backgroundImage = 'none';
	ms4.style.backgroundColor = master[3];
	createwin();
}



player[0] = null;
player[1] = null;
player[2] = null;
player[3] = null;
row = row+1;

	if (row > 12) {
		alert('Game Over');
		ms1.style.backgroundImage = 'none';
		ms1.style.backgroundColor = master[0];
		ms2.style.backgroundImage = 'none';
		ms2.style.backgroundColor = master[1];
		ms3.style.backgroundImage = 'none';
		ms3.style.backgroundColor = master[2];
		ms4.style.backgroundImage = 'none';
		ms4.style.backgroundColor = master[3];
	}
}
