

function open_modal(){
	// Get the modal
	let modal = document.getElementById('myModal');

	// Get the button that opens the modal
	let btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	let span = document.getElementsByClassName("close")[0];
	
	modal.style.display = "block";
	
	let n = document.getElementsByClassName("tab");
	n[0].style.display = "block";
	n[1].style.display = "none";
	n[2].style.display = "none";
	
	document.getElementById("email").focus("blue");
}


function close_modal(){
	// Get the modal
	let modal = document.getElementById('myModal');
	modal.style.display = "none";
	document.getElementById("signup_success_msg").style.display = "none";
}


function signup_email_next_btn(current_tab){
	// Here check if email is correct
	
	let n = document.getElementsByClassName("tab");
	
	if(current_tab == 0){
		n[0].style.display = "none";
		n[1].style.display = "block";
		n[2].style.display = "none";
	} else if(current_tab == 1){
		n[0].style.display = "none";
		n[1].style.display = "none";
		n[2].style.display = "block";
	}else{
		n[0].style.display = "none";
		n[1].style.display = "none";
		n[2].style.display = "none";
		document.getElementById("signup_success_msg").style.display = "block";
	}
	return false;
}


function signup_email_back_btn(current_tab){
	// Here save state or data if needed
	
	let n = document.getElementsByClassName("tab");
	
	if(current_tab == 1){
		n[0].style.display = "block";
		n[1].style.display = "none";
		n[2].style.display = "none";
	} else if(current_tab == 2){
		n[0].style.display = "none";
		n[1].style.display = "block";
		n[2].style.display = "none";
	}else{
		n[0].style.display = "none";
		n[1].style.display = "none";
		n[2].style.display = "none";
	}
	return false;
}

function checkUsername(usernameInput){
	if(usernameValid(usernameInput.value)){
		document.getElementById("usernameValidTick").style.display = "inline";
		document.getElementById("usernameInvalidTick").style.display = "none";
	} else {
		document.getElementById("usernameValidTick").style.display = "none";
		document.getElementById("usernameInvalidTick").style.display = "inline";
	}
}

function usernameValid(username){
	// clean username 
	// check if username already exists 
	// check if username passes any restriction or guidlines 
	
	if(username == "farid"){
		return true;
	} else {
		return false;
	} 
}







function test(){
	alert("It works");
}




