(function () {
    var form = document.getElementById("planet_name");
    var elements = form.elements;
    var elplanetName = elements.planetName;

    addEvent(form, "submit", function (e) {
        e.preventDefault(); // stop the form from being sent
        document.getElementById("planet_name").textContent = "Hello, the planet name you entered is " + elplanetName.value; // replace form with message through DOM
    });

}());
