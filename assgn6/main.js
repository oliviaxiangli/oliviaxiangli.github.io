//Javascript file for Bun Bun Bake Shop website

var quantity = ["q1","q2","q3","q4"]

var glazing = ["none","sm","vm","dc"]

//Update quatity
function selectQ(elem) {
	//Change selected text to black and add a box around it
 	elem.style.color = "black";
 	elem.style.outline = "1px solid black";

 	//Change unselected text to grey and remove the box
 	for (i=0; i<quantity.length; i++) {
 		if (quantity[i] !== elem.id) {
 			document.getElementById(quantity[i]).style.color = "grey";
 			document.getElementById(quantity[i]).style.outline = "none";
 		}
 	}

 	//Update price
 	if (elem.id === "q1") {
 		document.getElementById("price").innerHTML = "$1.5";
 	}
 	else if (elem.id === "q2") {
 		document.getElementById("price").innerHTML = "$4.5";
 	}
 	else if (elem.id === "q3") {
 		document.getElementById("price").innerHTML = "$9.0";
 	}
 	else {
 		document.getElementById("price").innerHTML = "$12.0";
 	}
}

//Update glazing
function selectG(elem) {
	//Change selected text to black and add a box around it
 	elem.style.color = "black";
 	elem.style.outline = "1px solid black";

 	//Change unselected text to grey and remove the box
 	for (i=0; i<glazing.length; i++) {
 		if (glazing[i] !== elem.id) {
 			document.getElementById(glazing[i]).style.color = "grey";
 			document.getElementById(glazing[i]).style.outline = "none";
 		}
 	}
}

//Update gluten-free option
function selectF(elem) {
	//Change selected text to black and add a box around it
 	elem.style.color = "black";
 	elem.style.outline = "1px solid black";

 	if (elem.id === "yes"){
 		document.getElementById("no").style.color = "grey";
 		document.getElementById("no").style.outline = "none";
 	}
 	else{
 		document.getElementById("yes").style.color = "grey";
 		document.getElementById("yes").style.outline = "none";
 	}
}

//Declare variable to track number of items in cart
var cart;

//Display number of items in cart
function addCart() {

	//Track number of items in cart
	if (cart){
		cart++;
	}
	else {
		cart = 1;
	}

	//Display number of items in cart
	document.getElementById("num_cart").innerHTML = cart;
	document.getElementById("num_cart").style.display = "inline-block";
}

function update() {
	document.getElementById("demo").style.color = "black";

	//Session storage
	if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("num_cart").innerHTML = sessionStorage.clickcount;
    document.getElementById("num_cart").style.display = "inline-block";
  }
}


