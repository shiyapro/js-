// JavaScript Document
function getdice1() {
	var dice1 = Math.floor(Math.random() * 100);
	var diceLog = dice1 + 1;
	var activeElem = "(1d100)";
	var diceResult = diceLog + activeElem
	document.getElementById('condice1').innerHTML = (diceLog);
	document.getElementById('log').innerHTML += (diceResult + '\n');	//既存の要素を破壊せずに実行結果を出力できるよ！
	if(diceLog >= 96){
		document.getElementById('result').innerHTML = ("ファンブル！");
	}
	else if(diceLog <= 5){
		document.getElementById('result').innerHTML = ("クリティカル！");
	}
	else{
		document.getElementById('result').innerHTML = ("");
	}
}


// var historyArea = document.getElementById('history')
function getdice2() {
	var dice2 = Math.floor(Math.random() * 6);
	var diceLog = dice2 + 1;
	var activeElem = "(1d6)";
	document.getElementById('condice2').innerHTML = (diceLog);
	document.getElementById('log').innerHTML += (diceLog + activeElem + '\n');
}

function getdice3() {
	var dice3 = Math.floor(Math.random() * 10);
	var diceLog = dice3 + 1;
	var activeElem = "(1d10)";
	document.getElementById('condice3').innerHTML = (dice3 + 1);
	document.getElementById('log').innerHTML += (diceLog + activeElem + '\n');
}

function getdice4() {
	var dice4 = Math.floor(Math.random() * 3);
	var diceLog = dice4 + 1;
	var activeElem = "(1d3)";
	document.getElementById('condice4').innerHTML = (dice4 + 1);
	document.getElementById('log').innerHTML += (diceLog + activeElem + '\n');
}

function getdice5() {
	var dice5 = Math.floor(Math.random() * 4);
	var diceLog = dice5 + 1;
	var activeElem = "(1d4)";
	document.getElementById('condice5').innerHTML = (dice5 + 1);
	document.getElementById('log').innerHTML += (diceLog + activeElem + '\n');
}

