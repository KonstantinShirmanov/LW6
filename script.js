function access (){
			while (prompt ('Введите пароль для доступа к странице:') !='11111'){
				if(confirm ('Пароль неверный. Повторить ввод?')==false){
						window.location.href ='error.html';
						break;
				}
			}
		}

function newForm(){

			var x, y;
			var win; 

			x = (window.outerWidth - 350) / 2 + window.screenX;
			y = (window.outerHeight - 270) / 2 + window.screenY;

			win = window.open("", "w1", "height = 270, width = 350 , left ="+ x +" ,top =" +y);
			win.document.write("<h2>Заголовок текста</h2>");
			win.document.write("<p>javascript — это круто!</p>");

			win.document.write('<p align = "center"><a href = "https://www.dstu.education/"'+' target = "_blank">ДонГТУ</a>');

			win.document.write('<p align = "center"><input type="button"' + ' onclick="opener.exit(opener.win);" name="closeButton" value="Закрыть"></input></p>');

		}

function exit (param){
			param.alert('Внимание окно будет закрыто!');
			param.close();
		}
function exit (){
	if (confirm("Закрыть окно?")) window.close();
}

function summator (){

	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;

	var sumOutput = 0;

	sumOutput = +firstValue + +secondValue;

	document.getElementById("sum").value = +sumOutput; 

}



function plus (){
	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;

	var output = 0; 
	output = firstValue + secondValue;

	document.getElementById("result").value = +output; 
}


function minus (){
	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;

	var output = 0; 
	output = firstValue - secondValue;

	document.getElementById("result").value = +output; 

}

	function multiply (){
	
	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;

	var output = 0; 
	output = firstValue * secondValue;

	document.getElementById("result").value = +output; 
}


function divide (){

	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;

	if (secondValue !== 0){

	var output = 0; 
	output = firstValue / secondValue;

	document.getElementById("result").value = +output; 
	}
	else {
		alert ("Делить на 0 нельзя!");
	}
}
 



function pow (){
	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;

	var output = 0; 
	output = Math.pow (firstValue, secondValue);

	document.getElementById("result").value = +output; 

}
function abs (){
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +Math.abs (firstValue);

	document.getElementById("result").value = +output; 


}

function sqrt (){

	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;
	if (firstValue == 0 && Math.sign(secondValue)== 1){
		var output =0;
		output = Math.sqrt(secondValue);
		document.getElementById("result").value = +output;
	}
	else if (secondValue == 0 && Math.sign(firstValue)== 1){
		var output =0;
		output = Math.sqrt(secondValue);
		document.getElementById("result").value = +output;
	}

	else {
		alert("Нельзя извлечь квадратный корень из отрицательного числа или нуля!");
	}
}

function exp (){ 
document.getElementById("firstNumber").value = Math.E;
var firstValue = document.getElementById("firstNumber").value;
var secondValue = document.getElementById("secondNumber").value;
	
var output = Math.pow(+firstValue, +secondValue);
document.getElementById("result").value = +output;
}


function oneOperand (clickedButton){

	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;

	var output =0;

	var operation = function(){};

	if (clickedButton.value == "tg")         operation = Math.tan;
	else if (clickedButton.value == "cos")   operation = Math.cos;
	else if (clickedButton.value == "sin")   operation = Math.sin;
	else if (clickedButton.value == "round") operation = Math.cos;
	else if (clickedButton.value == "floor") operation = Math.floor;
	else if (clickedButton.value =="abs")    operation = Math.abs;
	else if (clickedButton.value =="ln")     operation = Math.log;
	else if (clickedButton.value == "cel")   operation = Math.ceil;


if (firstValue == 0 && secondValue != 0) output = operation(secondValue);
    else if (secondValue == 0 && firstValue != 0) output = operation(firstValue);
    else if (firstValue == 0 && secondValue == 0) output = operation(0);
    else alert("Заполните только одно поле!");

    document.getElementById("result").value = output; 
}

function ctg (){

	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;
	var output =0;

	if (firstValue == 0 && secondValue != 0) output = (1/Math.tan(secondValue));
    else if (secondValue == 0 && firstValue != 0) output = (1/Math.tan(firstValue));
    else if (firstValue == 0 && secondValue == 0) alert("Котангенса нуля не существует!");
    else alert("Заполните только одно поле!");

    document.getElementById("result").value = output;
}

function ce (){
	document.getElementById("firstNumber").value =null;
	document.getElementById("secondNumber").value = null;
	document.getElementById("result").value = null;
}

function precision (){
	var firstValue = +document.getElementById("firstNumber").value;
	var secondValue = +document.getElementById("secondNumber").value;

	console.log(typeof(firstValue));
	console.log(typeof(secondValue));
	var output =0;

	if (!Number.isInteger (firstValue) && Number.isInteger(secondValue)) output = firstValue.toFixed(secondValue);
	else if (Number.isInteger (firstValue) && !Number.isInteger(secondValue)) output = secondValue.toFixed(firstValue);
	else if (firstValue == 0 || secondValue == 0) alert("заполните поля для округления");
	else if (Number.isInteger(firstValue) && Number.isInteger(secondValue)) alert ("Нельзя округлить целое до целого!");
	else if (!Number.isInteger(firstValue) && !Number.isInteger(secondValue)) 
		 alert("Нельзя округлить число с точностью до дробного!"); 	

	document.getElementById("result").value = output;		
}





