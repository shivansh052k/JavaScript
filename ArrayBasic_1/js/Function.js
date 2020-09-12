var fruits = ["Banana", " orange", " Apple", " Grapes"];

function LoadFruits(){
	document.getElementById("fruits").innerHTML = fruits;
}

function AddFruits(){
	var fruit = prompt("What is your Favourite Fruit: ");
	fruits.push(fruit);
	document.getElementById("fruits").innerHTML = fruits;
}
