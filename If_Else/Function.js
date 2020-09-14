var name = prompt("What is your name:");

if (name.length != 0)
{
	if(name == "Shivansh")
	{
		document.write("Hi, " + name);
		document.write("<br> You have an amazing name!!");
	}
	else
	{
		document.write("Hello " + name);
	}
}

else{
	document.write("Are you feeling shy?");
}
