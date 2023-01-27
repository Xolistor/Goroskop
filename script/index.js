function Start() {
	var day = document.getElementById('day').value;
	var months = document.getElementById('Monts').value;
	day = Number(day);
	months = Number(months);
	if (months == 1)
	{
		if (day < 20) {
			alert("Ты Козерог");
		}
		else {
			alert("Ты Водолей");
		}
	}
	else if (months == 2) 
	{
		if (day < 20) {
			alert("Ты Водолей");
		}
		else {
			alert("Ты Рыба");
		}
	}
	else if (months == 3) 
	{
		if (day < 21) {
			alert("Ты Рыба");
		}
		else {
			alert("Ты Овен");
		}
	}
	else if (months == 4) 
	{
		if (day < 21) {
			alert("Ты Овен");
		}
		else {
			alert("Ты Телец");
		}
	}
	else if (months == 5) 
	{
		if (day < 21) {
			alert("Ты Телец");
		}
		else {
			alert("Ты Близнец");
		}
	}
	else if (months == 6) 
	{
		if (day < 21) {
			alert("Ты Близнец");
		}
		else {
			alert("Ты Рак");
		}
	}
	else if (months == 7) 
	{
		if (day < 21) {
			alert("Ты Рак");
		}
		else {
			alert("Ты Лев");
		}
	}
	else if (months == 8) 
	{
		if (day < 21) {
			alert("Ты Лев");
		}
		else {
			alert("Ты Дева");
		}
	}
	else if (months == 9) 
	{
		if (day < 21) {
			alert("Ты Дева");
		}
		else {
			alert("Ты Весы");
		}
	}
	else if (months == 10) 
	{
		if (day < 21) {
			alert("Ты Весы");
		}
		else {
			alert("Ты Скорпион");
		}
	}
	else if (months == 11) 
	{
		if (day < 24) {
			alert("Ты Скорпион");
		}
		else {
			alert("Ты Стрелец");
		}
	}
	else if (months == 12) 
	{
		if (day < 19) {
			alert("Ты Стрелец");
		}
		else {
			alert("Ты Водолей");
		}
	}
}