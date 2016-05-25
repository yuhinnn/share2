var Q1;
var Q2;
var Q3;
var sum;



function choice(btn){
	if(btn == 1){
		 Q1 = 1;
		console.log(Q1);
	}
	else if(btn == 2){
		 Q1 = 2;
		console.log(Q1);
	}
	else if(btn == 3){
		Q1 = 3;
		console.log(Q1);
	}
}

function choice2(btn){
	if(btn == 4){
		Q2 = 1;
		console.log(Q2);
	}
	else if(btn == 5){
		Q2 = 2;
		console.log(Q2);
	}
	else if(btn == 6){
		Q2 = 3;
		console.log(Q2);
	}
}

function choice3(btn){
	if(btn == 7){
		Q3 = 1;
		console.log(Q3);
	}
	else if(btn == 8){
		Q3 = 2;
		console.log(Q3);
	}
	else if(btn == 9){
		Q3 = 3;
		console.log(Q3);
	}
}

function mid(){
	console.log(Q1);
}



function result(){
      var sum=Q1+Q2+Q3;
	console.log(sum);
}
