//Joe Perry
// SDI 1; Asignment 2
// August 9, 2012

alert("JavaScript works!");

var ab = " Lee Lewis",
	Captain = " Captain Jean Luc Picard",
	first = " First Officer William Richer",
	security = " Lt. Commander Worf",
	theMan = "Data"
	date =  198019.01
	crew = [ "Engineer", "Lt. Commander", "First Officer", "Captain"]
	bridgeCrew = [Captain, first, security, theMan]; 
	sayings = [" make it so'", "  Engage'", " report to the bridge", "warp speed", " Set a course ", "'Very well."]
;

var say = function(message) { console.log(message);} ;

say ("Captains log, star date " + date);
say (" Today the crew an myself will be escorting a new ambassador of the Federation to the Alpha Quadrant. Ambassador" + ab + 
	" who will meet " + first+"," + security +",and"+theMan + " in 0:200 hours." ); 

say (Captain + " looked at Counselor Deana Troy")
var questionTroy1 = ("Will you be able to tell if Ambassador "
 + ab + " will want to tour the ship before he comes aboard?");
var troyResponse1 = [true, "'Of course sir, I am half betazoid.  You know I can read the minds of most sentient creatures.'"]
	troyResponse2 = [false, "'No sir, I have no idea what I am doing... it's not like I am half betazoid or anything.'"];

say (questionTroy1)
if (troyResponse1[0] === true){
	console.log (troyResponse1[1]);
} else {
	console.log (troyResponse2[1]);
}
say (Captain + " replied 'alright then" + sayings[0]);

say ("The crew of the starship Enterprise were anxiously awaiting the arrival of the ambassador")
say (" After" + Captain + " and " + first + " greeted Ambassador " + ab + " it was Counselor Troy's turn to shine." )
var question1= [true, "'Would you like to take a tour with the a member of the bridge crew?'"],
	question2= [false, "Would you like to rest first?"]
	answer1= "  'Of course I would!'";

if (question1[0] === true){
	console.log ( question1[1] + answer1 + "  Ambassador" + ab + "  replied.");
} else {
	console.log ( question2 + answer1);
}

say (" The counselor showed the handsome young Ambassador around the bridge of the Enterprise.");
say ("'Who is your essential bridge crew when you call code red Counselor Troy?'");

say ("She replied 'That is as follows sir:'")
for (var i=0, bc=bridgeCrew.length; i < bc; i++){
	console.log ( bridgeCrew[i]);
}

say ("'Interesting, an android, and a klingon on the bridge'  Ambassador" + ab + " replied.");
say ( theMan + "'Could you calculate how long it takes to get to the Alpha Quadrant from here?'" )
say ("'Of Course' replied " + theMan)
say ("It is " + date + " right now");

var calcTime = function (stardate){
	var distance = 5419,
		warpspeed = 9;
	say (date + distance / warpspeed + stardate );
};
//fake math to calculate stardates... even star trek fans dont know, to my knowledge, how to assign a star date to an event since they move faster than the speed of light.

say ("We should arrive by") + calcTime(".");

say (Captain + " says " + sayings[5] + sayings [4] + theMan+"."  + sayings [1])




