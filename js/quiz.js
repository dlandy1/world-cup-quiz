$(document).ready(function(){
$("form").submit(function(e) {
    		e.preventDefault();
  			})
var links = ['<a class="nose" target="_blank" href="https://www.youtube.com/watch?v=8W8VC-WY-V8">Here</a>'];
var questions = [{ 
	name: "place",
	numb: 1,
	text: "Which Country has come in third place in a World Cup?",
	options: ["USA","Belgium","England","Netherlands"],
	answer: "USA",
	description:"In the 1930 World Cup the US had its best result 3rd place."
}, {
	name: "nose",
	numb: 2,
	text: "Which country's coach is known for picking his nose in World Cups?",
	options: ["France","Italy","Ghana","Germany"],
	answer: "Germany",
	description: "Joachim Loew, head coach of Germany, picked his nose and ate the gold in the 2010 World Cup. This World cup he picked his nose right before shaking hands with Christiano Ronaldo."
}, {
	name: "bite",
	numb: 3,
	text: "Which country has a player known for biting others on the field?",
	options: ["Algeria","Brazil","Uruguay","England"],
	answer: "Uruguay",
	description: "Luis Suarez of Uruguay is called the cannibal. He bites a player on Italy."
}, {
	name: "bro",
	numb: 4,
	text: "The Boateng Brothers currently play for seperate countries, which two countries do they play for?",
	options: ["Netherlands and Germany","USA and Mexico","Germany and Ghana","Algeria and Iran"],
	answer: "Germany",
	description: "They have played against each other both in this World Cup and 2010"
}, {
	name: "goals",
	numb: 5,
	text: "Which country has the most goals ever scored in a world cup game?",
	options: ["Argentina", "Hungary", "England", "Belgium"],
	answer: "Hungary",
	description: "Hungary with 10 goals in the 1982 World Cup against El Salvador. El Salvador managed to score one goal that game."
}]
var needed = [];
var right = []; 
var clearItem = function() {
	$("#one").find("p").empty();
	$("#one").find(".choice").remove();
};
// create a function 
var itemOne = function(){
	if(needed.length < 4){
	$("#one").find("a").on("click",function(event){
	$("#one").hide();
	$("#a").show();
	if($("input[type='radio']:checked").val() == questions[needed.length].answer){
		$("#a").find("h2").text("Correct!");
		right.push(1);
	}
	else{
		$("#a").find("h2").text("Wrong!");
	}
	$("#a").find("p").text(questions[needed.length].description);
})
}
};

$("#start").find("a").on("click",function(event)
	{
	$("#start").hide();
	$("#one").show();
	$("#one").find("p").text(questions[0].text);
	for(var j = 0; j < 4; j++){
	var input = '<div class="choice"><input type="radio" id = '+j+' name="country" value='+questions[0].options[j]+'>' + questions[0].options[j] + '</div>';
	$("#one").append(input);
}
itemOne();
})
// create a function
var newQ = function () {
	if(needed.length == 4){
		$("#one").remove();
		$("#a").remove();
		$("#finish").show();
	}
	else{
	clearItem();
	$("#a").hide();
	$("#one").show();
	$("#one").find("p").text(questions[needed.length].text);
	for(var j = 0; j < 4; j++){
	var input = '<div class="choice"><input type="radio" id = '+j+' name="country" value='+questions[needed.length].options[j]+'>' + questions[needed.length].options[j] + '</div>';
	$("#one").append(input);
	}
}
}
$("#a").find("a").on("click",function(event){
	needed.push(1);
	console.log(needed.length)
	newQ();
itemOne();
})
})




