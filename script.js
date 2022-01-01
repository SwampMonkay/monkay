function checkValue() {
	var searches = ['StuffAmon', 'Government Stuff', 'Search Here', 'Clubs']
	var search = document.getElementById("search").value;
	if (search == searches[0]) {
		window.location="stuffamon_results.html"
	}
	else if (search == searches[1]) {
		window.location="government_results.html";
	}
	else if (search == searches[2]) {
		window.location="search.html"
	}
	else if (search == searches[3]) {
		window.location="club_results.html"
	}
}

function contact() {

	var name = document.getElementById("name").value;
	var description = document.getElementById("description").value;
	var caption = document.getElementById("caption").value;
	var web_link = document.getElementById("web_link").value;
	var money = document.getElementById("money").value;
	var message = "Hello! My name is " + name + ". I would like to request an ad for " + description + ". My caption is "+caption+" Thank you!!   "+"I am willing to pay $"+money+". Link it to"+web_link+"."

	window.open('mailto:bbensema890@gmail.com?subject=Can you put my ad in?&body='+message);
}

function request() {

	var name = document.getElementById("name").value;
	var description = document.getElementById("describe").value;
	var caption = document.getElementById("caption").value;
	var money = document.getElementById("money").value;
	var message = "Hello! My name is " + name + ". I would like to request a website for " + description + ". My search result is "+caption+" Thank you!!   "+"I am willing to pay $"+money+"."

	window.open('mailto:bbensema890@gmail.com?subject=Can you make my website?&body='+message);
}

function checkPswd() {
	var incorrect = 0;
	var pswd = document.getElementById("pswd").value;
	const password = "tupperware";
	if (pswd == password) {
		window.location = "search.html";
	}
	else {
		incorrect += 1;
		if (incorrect > 10) {
			alert("You have guessed the password "+incorrect+" time. Give up.")
		}
		else {
			alert("The password is incorrect.");
		}
	}
}