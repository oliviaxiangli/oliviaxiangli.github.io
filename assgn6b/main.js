//Javascript file for Bun Bun Bake Shop website

var quantity = ["q1","q2","q3","q4"]

var glazing = ["none","sm","vm","dc"]

var attribute = ["q1","none","yes"];

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
 		document.getElementById("price").innerHTML = "$18.0";
 	}

 	attribute[0] = elem.id;
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

 	attribute[1] = elem.id;
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

 	attribute[2] = elem.id;
}

//Declare variable to track number of items in cart
var cart;

//Create a class for buns
function Bun(name_in, quantity_in, glazing_in, gf_in, price_in) {
	this.bun_name = name_in; 
	this.bun_q = quantity_in;
	this.bun_g = glazing_in;
	this.bun_gf = gf_in;
	this.bun_p = price_in;
}


function addCart() {

	//Create an array for holding buns
	var bun_selected = [];

	//Track number of items in cart
	if (sessionStorage.getItem("cart")){
		var temp = parseInt(sessionStorage.getItem("cart"));
		cart= temp+1;
	}
	else {
		cart = 1;
	}

	//Display number of items in cart
	document.getElementById("num_cart").innerHTML = cart;
	document.getElementById("num_cart").style.display = "inline-block";

	//Create bun object by reading the info on screen
	var selected_q = attribute[0];
	var selected_g = attribute[1];
	var selected_gf = attribute[2];
	var selected_name = document.getElementById("roll_name").innerHTML;
	var selected_p = document.getElementById("price").innerHTML;

	mybun = new Bun(selected_name, selected_q, selected_g, selected_gf, selected_p);

	if (sessionStorage.getItem("bun")) {
		var retrievedData = sessionStorage.getItem("bun");
		bun_selected = JSON.parse(retrievedData);
	}
	bun_selected.push(mybun);

	sessionStorage.setItem("cart",cart);
	sessionStorage.setItem("bun",JSON.stringify(bun_selected));
}

//Create an array to hold stored items
var items = [];

var final_price;

//Display items in shopping cart
function displayNum() {	

	//If items are selected
	if (sessionStorage.getItem("cart") &&
		sessionStorage.getItem("cart") > 0) {
		//Display number of items in cart on nav bar
		document.getElementById("num_cart").innerHTML = sessionStorage.getItem("cart");
		document.getElementById("num_cart").style.display = "inline-block";

		//Display items in cart
		var items_in = sessionStorage.getItem("bun");
		items = JSON.parse(items_in);

		var pos = document.getElementById("cart_content");
		for (i=0; i<items.length; i++) {
			if (items[i]) {
				displayCart(items[i], pos, i);
			}
		}

		//Update price 
		final_price = updatePrice(items);
		document.getElementById("cart_price").innerHTML = "SUBTOTAL: $" + final_price;
		document.getElementById("cart_price").style.font = "italic bold 20px arial,serif";
	}

	//If the cart is empty
	if (sessionStorage.getItem("cart") === null ||
		sessionStorage.getItem("cart") <= 0) {
		//Display message
		document.getElementById("bas").innerHTML = "Basket is empty";
		//Remove shopping cart items
		document.getElementById("cart_content").style.display = "none";
		document.getElementById("cart_sum").style.display = "none";
	}
}

//Display single item in cart
function displayCart(product, position, count) {
	//Display image
	var img = document.createElement("img");
	img.src = "original.jpg";
	img.style = "width:200px;height:140px;";
	img.setAttribute("id", "img"+count);
	position.appendChild(img);

	//Display product name
	var p_name = document.createElement("P");
	if (product.bun_gf === "yes") {
		p_name.innerHTML = product.bun_name + "<br>Gluten-Free";
	}
	else {
		p_name.innerHTML = product.bun_name;
	}
	p_name.setAttribute("id", "pn"+count);
	position.appendChild(p_name);

	//Display product quantity
	var p_q = document.createElement("P");
	if (product.bun_q === "q1") {
 		p_q.innerHTML = "1";
 	}
 	else if (product.bun_q === "q2") {
 		p_q.innerHTML = "3";
 	}
 	else if (product.bun_q === "q3") {
		p_q.innerHTML = "6";
 	}
 	else {
 		p_q.innerHTML = "12";
 	}
 	p_q.setAttribute("id", "pq"+count);
 	position.appendChild(p_q);

 	//Display product glazing
 	var p_g = document.createElement("P");
 	if (product.bun_g === "none") {
 		p_g.innerHTML = "None";
 	}
 	else if (product.bun_g === "sm") {
 		p_g.innerHTML = "Sugar-Milk";
 	}
 	else if (product.bun_g === "vm") {
		p_g.innerHTML = "Vanilla-Milk";
 	}
 	else {
 		p_g.innerHTML = "Double Chocolate";
 	}
 	p_g.setAttribute("id", "pg"+count);
 	position.appendChild(p_g);

 	//Display product price
 	var p_p = document.createElement("P");
	p_p.innerHTML = product.bun_p;
	p_p.setAttribute("id", "pp"+count);
	position.appendChild(p_p);

	//Display delete option
	var del = document.createElement("img");
	del.src = "cross.png";
	del.style = "width:20px;height:20px;";
	del.setAttribute("id", "del"+count);
	del.addEventListener('click', deleteItem);
	position.appendChild(del);
}

//Delete item from page and from session storage
function deleteItem() {

	//Remove the cross from screen
	this.remove();

	//Get an index to access other attributes
	var this_id = this.id;
	if (this_id.length === 4) {
		var index = this_id.charAt(3);
	}
	else {
		var index = this_id.charAt(3)+this_id.charAt(4);
	}

	//Remove other associated attributes from screen
	var temp1 = document.getElementById("pp"+index);
	temp1.remove();
	var temp2 = document.getElementById("pg"+index);
	temp2.remove();
	var temp3 = document.getElementById("pq"+index);
	temp3.remove();
	var temp4 = document.getElementById("pn"+index);
	temp4.remove();
	var temp5 = document.getElementById("img"+index);
	temp5.remove();

	//Update session storage for number of items
	var cart_new = sessionStorage.getItem("cart");
	cart_new = cart_new-1;
	sessionStorage.setItem("cart",cart_new);
	document.getElementById("num_cart").innerHTML = sessionStorage.getItem("cart");
	document.getElementById("num_cart").style.display = "inline-block";

	//Update session storage for array of buns
	var bun_temp = sessionStorage.getItem("bun");
	var bun_new = JSON.parse(bun_temp);
	bun_new[index] = null;
	sessionStorage.setItem("bun",JSON.stringify(bun_new));

	//Update price
	var price_new = updatePrice(bun_new);
	document.getElementById("cart_price").innerHTML = "SUBTOTAL: $" + price_new;
	document.getElementById("cart_price").style.font = "italic bold 20px arial,serif";

	//If the cart is empty
	if (sessionStorage.getItem("cart") <= 0) {
		//Display message
		document.getElementById("bas").innerHTML = "Basket is empty";
		//Remove red circle 
		document.getElementById("num_cart").style.display = "none";
		//Remove shopping cart items
		document.getElementById("cart_content").style.display = "none";
		document.getElementById("cart_sum").style.display = "none";
	}

}

function updatePrice(arr) {
	var sum=0;

	//Calculate price 
	for (i=0; i<arr.length; i++) {
		if (arr[i]) {
			if (arr[i].bun_q === "q1") {
	 			sum = sum+1;
	 		}
	 		else if (arr[i].bun_q === "q2") {
	 			sum = sum+3;
	 		}
	 		else if (arr[i].bun_q === "q3") {
				sum = sum+6;
	 		}
	 		else {
	 			sum = sum+12;
 			}
		}
	}

	return sum*1.5;
}



