let incorrect = 0;

function checkValue() {
	var searches = ['stuffamon', 'government stuff', 'home', 'clubs', 'business'];
	var search = document.getElementById("search").value;
	console.log(search);

	if (search == searches[0]) {
		window.location="stuffamon_results.html";
	}
	else if (search == searches[1]) {
		window.location="government_results.html";
	}
	else if (search == searches[2]) {
		window.location="search.html";
	}
	else if (search == searches[3]) {
		window.location="club_results.html";
	}
	else if (search == searches[4]) {
		window.location="business_results.html";
	}
	
	
}

function checkSearchBar() {
	var other_searches = [
		'stuffamon cards', 'government', 'president', 'homepage',
		'mars the limit', 'rockets', 'stuffamon', 'government stuff',
		'home', 'clubs', 'business', 'monebay'
	];
	var search_bar = document.getElementById("search_bar").value;
	console.log(search_bar);
	
	if (search_bar == other_searches[6]) {
		window.location="stuffamon_results.html";
	}
	else if (search_bar == other_searches[7]) {
		window.location="government_results.html";
	}
	else if (search_bar == other_searches[8]) {
		window.location="search.html";
	}
	else if (search_bar == other_searches[9]) {
		window.location="club_results.html";
	}
	else if (search_bar == other_searches[0]) {
		window.location="stuffamon_results.html";
	}
	else if (search_bar == other_searches[1]) {
		window.location="government_results.html";
	}
	else if (search_bar == other_searches[2]) {
		window.location="government_results.html";
	}
	else if (search_bar == other_searches[3]) {
		window.location="search.html";
	}
	else if (search_bar == other_searches[4]) {
		window.location="club_results.html";
	}
	else if (search_bar == other_searches[5]) {
		window.location="club_results.html";
	}
	else if (search_bar == other_searches[10]) {
		window.location="business_results.html";
	}
	else if (search_bar == other_searches[11]) {
		window.location="business_results.html";
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
	var pswd = document.getElementById("pswd").value;
	const password = "tupperware";
	if (pswd == password) {
		logged_in = true;
		console.log(logged_in);
		window.location = "search.html";
	}
	else {
		incorrect += 1;
		console.log(incorrect);
		if (incorrect > 10) {
			window.close();
		}
	}
}