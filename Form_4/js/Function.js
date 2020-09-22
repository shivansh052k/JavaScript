function check(){
	var email1 = document.getElementById('email_add');
	var email2 = document.getElementById('email_repeat');

	if (email1.value != email2.value) {

		alert("The two emails are not equal");
		return false;
	}
}
