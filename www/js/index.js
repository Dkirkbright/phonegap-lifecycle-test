var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("Dan's Device is Ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}

    // device APIs are available
    //
    function onDeviceReady() {
		//alert("Dan's Device is Ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		//alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		//alert("Welcome Back, I Missed You!");
		resumed_count++;
		updateDisplay();
    }


var key = “Food”; 
var value = “Cake”;
window.localStorage.setItem( Food, Cake )

var key = “Food”;
var value = window.localStorage.getItem(Food);

window.localStorage.length;

var key = “Chocbar”; 
var value = “Galaxy”;
window.localStorage.setItem( Chocbar, Galaxy )