var Q1;
var Q2;
var Q3;
var sum;

function choice(btn){
	if(btn == 1){
		 Q1 = 1;
		console.log(Q1);
	 document.getElementById("first").style.background = "red";
	 document.getElementById("secound").style.background = "yellow";
	 document.getElementById("third").style.background = "yellow";
	}  
	else if(btn == 2){
		 Q1 = 2;
		 console.log(Q1);
	 document.getElementById("first").style.background = "yellow";
	 document.getElementById("secound").style.background = "red";       
	 document.getElementById("third").style.background = "yellow";

	}
	else if(btn == 3){
		Q1 = 3;
		console.log(Q1);
	 document.getElementById("first").style.background = "yellow";
	 document.getElementById("secound").style.background = "yellow";       
	 document.getElementById("third").style.background= "red"; 
	
	}
}

function choice2(btn){
	if(btn == 4){
		Q2 = 1;
		console.log(Q2);
	 document.getElementById("fourth").style.background = "red";
	 document.getElementById("fifth").style.background = "yellow";       
	 document.getElementById("sixth").style.background= "yellow"; 
	}
	else if(btn == 5){
		Q2 = 2;
		console.log(Q2);
	 document.getElementById("fourth").style.background = "yellow";
	 document.getElementById("fifth").style.background = "red";       
	 document.getElementById("sixth").style.background= "yellow"; 
	}
	else if(btn == 6){
		Q2 = 3;
		console.log(Q2);
	 document.getElementById("fourth").style.background = "yellow";
	 document.getElementById("fifth").style.background = "yellow";       
	 document.getElementById("sixth").style.background= "red"; 
	}

}

function choice3(btn){
	if(btn == 7){
		Q3 = 1;
		console.log(Q3);
	 document.getElementById("seventh").style.background = "red";
	 document.getElementById("eighth").style.background = "yellow";       
	 document.getElementById("ninth").style.background = "yellow";
	}
	else if(btn == 8){
		Q3 = 2;
		console.log(Q3);
	 document.getElementById("seventh").style.background = "yellow";
	 document.getElementById("eighth").style.background = "red";       
	 document.getElementById("ninth").style.background = "yellow";
	}
	else if(btn == 9){
		Q3 = 3;
		console.log(Q3);
	 document.getElementById("seventh").style.background = "yellow";
	 document.getElementById("eighth").style.background = "yellow";       
	 document.getElementById("ninth").style.background = "red";
	}

}

function mid(){
	console.log(Q1);
}


function sendresult(){
    var  sum=Q1+Q2+Q3;
	console.log(sum);
}
