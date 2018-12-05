function msg() {
	alert("Welcome To My Page");
}

function WeatherAdvice() {

	var eventType = prompt("please enter your event", "like formal, semi-formal,casual ").toLowerCase();

	var tempFahr = parseInt(prompt("Enter your current tempreture plese ?", " like 33 Fh"));

	var result = "";

	if ( eventType != null && tempFahr != null ) {

		if ( tempFahr < 54 && eventType == "formal" )
			var result = document.getElementById("result").innerHTML =
				"Since it is " + tempFahr + " degrees and you are going to a " + eventType + ", you should wear a suit and coat.";

		else if (( tempFahr >= 54 && tempFahr < 70 ) && eventType == "semi-formal") {
			var result = document.getElementById("result").innerHTML =
				"Since it is " + tempFahr + " degrees and you are going to a " + eventType + ", you should wear a polo and jacket.";
		}

		else if ( tempFahr >= 70 && eventType == "casual" ) {
			var result = document.getElementById("result").innerHTML =
				"Since it is " + tempFahr + " degrees and you are going to a " + eventType + ", you should wear something comfy and no jacket.";
		}

		else{
		var result = document.getElementById("result").innerHTML = "Sorry No suggestion available !!!";
		}

		console.log(result);
	}
}
