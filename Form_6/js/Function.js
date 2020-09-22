function NickNameFunction(){

	if(N_Name.checked){
		nick.style.display="inline";
		nickname.setAttribute('required',true);
	}

	else{
		nickname.removeAttribute('required');
		nick.style.display="none";
	}
}
