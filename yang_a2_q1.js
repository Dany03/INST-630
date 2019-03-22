var planets = [{planet_name: 'Mercury', numSun: "1", orbitTime: "0.24", numSate: "0"}, 
			{planet_name: 'Venus', numSun: "2", orbitTime: "0.62", numSate: "0"}, 
			{planet name: 'Earth', numSun: "3", orbitTime: "1", numSate: "1"}, 
			{planet name: 'Mars', numSun: "4", orbitTime: "1.88", numSate: "2"}, 
			{planet name: 'Jupiter', numSun: "5", orbitTime: "11.86", numSate: "67"}, 
			{planet name: 'Saturn', numSun: "6", orbitTime: "29.46", numSate: "62"}, 
			{planet name: 'Uranus', numSun: "7", orbitTime: "84.32", numSate: "27"}, 
			{planet name: 'Neptune', numSun: "8", orbitTime: "164.79", numSate: "14"}];
var slLength = planets.length;
var roundNumber = 0;
var msg = " ";
var i;

for (i = 0; i < slLength; i++){
	var newEl = document.createElement("p");
	// var i = (roundNumber + 1);
	var newText = document.createTextNode(planets[i].planet_name + " is planet #" + numSun + " from the Sun." + " Time to complete its Orbit is " + orbitTime + "." + " It has " + numSate + "natural satellite(s)."  )
	document.writeln(newText)
}
