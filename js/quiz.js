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
	description: "Joachim Loew, head coach of Germany, picked his nose and ate the gold in the 2010 World Cup. View it" + links[0]+ ". This World cup he picked his nose right before shaking hands with Christiano Ronaldo."
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
	options: ["Germany and Netherlands","USA and Mexico","Germany and Ghana","Algeria and Iran"],
	answer: "Germany and Ghana",
	description: "They have played against each other both in this World Cup and 2010"
}, {
	name: "goals",
	numb: 5,
	text: "Which country has the most goals ever scored in a world cup game?",
	options: ["Argentina", "Hungary", "England", "Belgium"],
	answer: "Hungary",
	description: "Hungary with 10 goals in the 1982 World Cup against El Salvador. El Salvador managed to score one goal that game."
}]
var clearItem = function() {
	$("#one").find("p").empty();
	$("#one").find(".choice").remove();
};
$("#start").find("a").on("click",function(event)
	{
	$("#start").hide();
	$("#one").show();
	$("#one").find("p").text(questions[0].text);
	for(var i = 0; i < 4; i++){
	var input = '<div class="choice"><input type="radio" id = '+i+' name="country" value='+questions[0].options[i]+'>' + questions[0].options[i] + '</div>';
	$("#one").append(input);
}
})
$("#one").find("a").on("click",function(event)
{
	$("#one").hide();
	$("#a").show();
	if($("input[type='radio']:checked").val() == questions[0].answer){
		$("h2").text("Correct!");
	}
	else{
		$("h2").text("Wrong!");
	}
	$(".welcome").find("p").text(questions[0].description);
	clearItem();
})
$("#a").find("a").on("click",function(event){
	$("#a").hide();
	$("#one").show();
	$("#one").find("p").text(questions[1].text);
	for(var i = 0; i < 4; i++){
	var input = '<div class="choice"><input type="radio" id = '+i+' name="country" value='+questions[1].options[i]+'>' + questions[1].options[i] + '</div>';
	$("#one").append(input);
}
})
})




