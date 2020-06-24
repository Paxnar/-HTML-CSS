var bool = prompt("введите bool",'');
bool=(Boolean(bool));
alert("bool = " + bool);
alert("Тип bool - " + typeof bool);

var string = prompt("введите любое значение",'');
string=(Boolean(string));
alert("в формате Boolean ваше значение это - " + string);

var num = prompt("Введите ЦИФРУ, НЕ БУКВЫ", '');
alert("Если вы ввели цифру, то в формате Number она будет - " + Number(num));

var s1 = prompt("Введите цифру, я вам скажу чётная ли она или нет!",'');
if(Number(s1)%2==0){
	alert("Цифра "+ s1 + " - Чётная! Я угадал?");
	var otvet1 = prompt("Угадал ли я? Если да, напиши Да, если нет, то напиши Нет", '');
	if(otvet1=="Да"){
		alert("Блин, капец я крутой!");
	}else if(otvet1=="Нет"){
		alert("Блин, капец(((");
	}else{
		alert("Мне кажется это неправильный ответ, ответь Да или Нет");
	}
}else{
	alert("Цифра "+ s1 + " - Нечётная! Я угадал?");
	var otvet1 = prompt("Угадал ли я? Если да, напиши Да, если нет, то напиши Нет", '');
	if(otvet1=="Да"){
		alert("Блин, капец я крутой!");
	}else if(otvet1=="Нет"){
		alert("Блин, капец(((");
	}else{
		alert("Мне кажется это неправильный ответ, ответь Да или Нет");
	}
}