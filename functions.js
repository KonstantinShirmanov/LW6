function ln (){

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;
	var output =0;
	if (firstValue == 0 && Math.sign(secondValue)==1 ||(firstValue == 0 && Math.sign(secondValue)==1)){
		output = Math.log(secondValue);
		document.getElementById("result").value = +output;
	}
	else if (secondValue == 0 && Math.sign(firstValue)== 1){
		output = Math.log(secondValue);
		document.getElementById("result").value = +output;
	}

	else {
		alert("Нельзя вычислить натуральный алгоритм двух чисел,отрицательного числа или нуля!");
}
}

function sin (){

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output =0;

    if (firstValue == 0 && secondValue !=0) output = Math.sin(secondValue);
	else if (secondValue == 0 && firstValue !=0) output = Math.sin(firstValue);

	else if (firstValue ==0 && secondValue ==0) output =Math.sin(0);

	else alert("Заполните только одно поле!");

	document.getElementById("result").value = output; 
}

function cos (){
	
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output =0;


    if (firstValue == 0 && secondValue !=0) output = Math.cos(secondValue);
	else if (secondValue == 0 && firstValue !=0) output = Math.cos(firstValue);

	else if (firstValue ==0 && secondValue ==0) output =Math.cos(0);

	else alert("Заполните только одно поле!");

	document.getElementById("result").value = output; 
}

function tg(){


	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output =0;


    if (firstValue == 0 && secondValue !=0) output = Math.tan(secondValue);
	else if (secondValue == 0 && firstValue !=0) output = Math.tan(firstValue);

	else if (firstValue ==0 && secondValue ==0) output =Math.tan(0);

	else alert("Заполните только одно поле!");

	document.getElementById("result").value = output; 
}

function ctg (){

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;
	var output =0;

	if (firstValue == 0 && secondValue != 0) output = (1/Math.tan(secondValue));
    else if (secondValue == 0 && firstValue != 0) output = (1/Math.tan(firstValue));
    else if (firstValue == 0 && secondValue == 0) alert("Котангенса нуля не существует!");
    else alert("Заполните только одно поле!");

    document.getElementById("result").value = output;
}
