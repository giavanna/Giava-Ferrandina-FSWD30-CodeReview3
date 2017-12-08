

function calculateInsurance()
{
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var horse_power = document.getElementById("horsepower").value;
	var insurance = horse_power * 100 / age + 150;
	document.getElementById("price").innerHTML = name + ", " + country + ", " + insurance;
}
