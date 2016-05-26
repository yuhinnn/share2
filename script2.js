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

function choice4(btn){
	if(btn == 10){
		Q4 = 1;
		console.log(Q4);
	 document.getElementById("tenth").style.background = "red";
	 document.getElementById("eleventh").style.background = "yellow";       
	 document.getElementById("twelfth").style.background = "yellow";
	}
	else if(btn == 11){
		Q4 = 2;
		console.log(Q4);
	 document.getElementById("tenth").style.background = "yellow";
	 document.getElementById("eleventh").style.background = "red";       
	 document.getElementById("twelfth").style.background = "yellow";
	}
	else if(btn == 12){
		Q4 = 3;
		console.log(Q4);
	 document.getElementById("tenth").style.background = "yellow";
	 document.getElementById("eleventh").style.background = "yellow";       
	 document.getElementById("twelfth").style.background = "red";
	}

}



function mid(){
	console.log(Q1);
}


function sendresult(){
    var  sum=Q1+Q2+Q3+Q4;
  if(sum == 4||sum == 5){
  location.href="index3.php";
  }else if(sum == 6||sum == 7){
  location.href="index4.php";
  }else if(sum == 8){
  location.href="index5.php";
  }else if(sum == 9||sum == 10){
  location.href="index6.php";
  }else if(sum == 11||sum == 12){
  location.href="index7.php";
  }
}









