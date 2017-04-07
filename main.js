// Add in external javascript file
var myCoffee = 0,
	coffeeSugarLevel = 0,
	myEspresso = 0,
	espressoSugarLevel = 0,
	myFrap = 0,
	frapSugarLevel = 0,
	myTea = 0,
	teaSugarLevel = 0,
	myMilk = 0,
	milkSugarLevel = 0,
	mySugar = 0,
	sugarSugarLevel = 0,
	compute = 0;



$(document).ready(function () { //checks if html is fully loaded
	$("#drink_coffee").on("change", function (e) {
		e.preventDefault();

		myCoffee = $('#drink_coffee').find(':selected');

		coffeeSugarLevel = parseFloat(myCoffee.data('sugar'));

		console.log(coffeeSugarLevel);
	});
	$("#drink_espresso").on("change", function (e) {
		e.preventDefault();

		myEspresso = $('#drink_espresso').find(':selected');

		espressoSugarLevel = parseFloat(myEspresso.data('sugar'));

		console.log(espressoSugarLevel);
	});
	$("#drink_frap").on("change", function (e) {
		e.preventDefault();

		myFrap = $('#drink_frap').find(':selected');

		frapSugarLevel = parseFloat(myFrap.data('sugar'));

		console.log(frapSugarLevel);
	});
	$("#drink_tea").on("change", function (e) {
		e.preventDefault();

		myTea = $('#drink_tea').find(':selected');

		teaSugarLevel = parseFloat(myTea.data('sugar'));

		console.log(teaSugarLevel);
	});
	$("#drink_milk").on("change", function (e) {
		e.preventDefault();

		myMilk = $('#drink_milk').find(':selected');

		milkSugarLevel = parseFloat(myMilk.data('sugar'));

		console.log(milkSugarLevel);
	});
	$("#drink_sugar").on("change", function (e) {
		e.preventDefault();

		mySugar = $('#drink_sugar').find(':selected');

		sugarSugarLevel = parseFloat(mySugar.data('sugar'));

		console.log(sugarSugarLevel);
	});

	$("#compute").on("click", function (e) {
		e.preventDefault();

		var grams = parseFloat($("[name='gender']:checked").val());

		console.log("sugarSugarLevel:", sugarSugarLevel, "milkSugarLevel:", milkSugarLevel, "teaSugarLevel:", teaSugarLevel, "frapSugarLevel:", frapSugarLevel, "coffeeSugarLevel:", coffeeSugarLevel, "espressoSugarLevel:", espressoSugarLevel);

		var compute = ((parseFloat(sugarSugarLevel) + parseFloat(milkSugarLevel) + parseFloat(teaSugarLevel) + parseFloat(frapSugarLevel) + parseFloat(coffeeSugarLevel) + parseFloat(espressoSugarLevel)) / grams) * 100;

		$("#response").find("span").text(compute.toFixed(1));

	});

});
