// Javascript file for Mod Four website

///////////////////////////////////// Color Page /////////////////////////////////////

// Function for changing background color
// and add white border to square
// and next button to show up

// Change background color to orange #F89D5B
function colorO() {
	document.body.style.background = "#F89D5B";
	document.getElementById("color1").style.border = "2px solid white";
	document.getElementById("color2").style.border = "0px";
	document.getElementById("color3").style.border = "0px";
	document.getElementById("color4").style.border = "0px";
	sessionStorage.setItem("color","#F89D5B");

	document.getElementById("colorNext").innerHTML = "next";
}

// Change background color to off-white #EBDCC6
function colorW() {
	document.body.style.background = "#EBDCC6";
	document.getElementById("color2").style.border = "2px solid white";
	document.getElementById("color1").style.border = "0px";
	document.getElementById("color3").style.border = "0px";
	document.getElementById("color4").style.border = "0px";
	sessionStorage.setItem("color","#EBDCC6");

	document.getElementById("colorNext").innerHTML = "next";
}

// Change background color to light green #C9DDC6
function colorG() {
	document.body.style.background = "#C9DDC6";
	document.getElementById("color3").style.border = "2px solid white";
	document.getElementById("color1").style.border = "0px";
	document.getElementById("color2").style.border = "0px";
	document.getElementById("color4").style.border = "0px";
	sessionStorage.setItem("color","#C9DDC6");

	document.getElementById("colorNext").innerHTML = "next";
}

// Change background color to misty blue #8DA1A4
function colorB() {
	document.body.style.background = "#8DA1A4";
	document.getElementById("color4").style.border = "2px solid white";
	document.getElementById("color1").style.border = "0px";
	document.getElementById("color2").style.border = "0px";
	document.getElementById("color3").style.border = "0px";
	sessionStorage.setItem("color","#8DA1A4");

	document.getElementById("colorNext").innerHTML = "next";
}

// Set background color based on selection
function setColor() {
	var backColor = sessionStorage.getItem("color");
	document.body.style.background = backColor;
}

///////////////////////////////////// End of Color Page /////////////////////////////////////

//////////////////////////////////////// Shape Page /////////////////////////////////////////

// Variables to track the count for each shape
var squ;
var cir;
var tri;
var rec;

// Variable to track the count for total number of shapes
var count;

// Functions to track the count for each shape and total number of shapes
// and display selected shape
function shapeS() {
	// Track count
	if (squ >= 2) {
		document.getElementById("shapeNext").innerHTML = "you can only select the same shape twice.";
	}
	else {
		document.getElementById("shapeNext").innerHTML = "";
		if (squ) {
		squ = squ +1;
		}
		else {
			squ = 1;
		}

		if (count) {
			count = count+1;
		}
		else {
			count = 1;
		}
		// Store count
		sessionStorage.setItem("numS",squ);

		// Display selected shape
		shape = "square";
		showSelection(shape, count);

		showNext();
	}

	// This is initially used to test the algorithm
	//console.log("squ = " + squ); 
	//console.log("count = " + count);
}

function shapeC() {
	// Track count
	if (cir >= 2) {
		document.getElementById("shapeNext").innerHTML = "you can only select the same shape twice.";
	}
	else {
		document.getElementById("shapeNext").innerHTML = "";
		if (cir) {
		cir = cir+1;
		}
		else {
			cir = 1;
		}

		if (count) {
			count = count+1;
		}
		else {
			count = 1;
		}

		// Store count
		sessionStorage.setItem("numC",cir);

		// Display selected shape
		shape = "circle";
		showSelection(shape, count);

		showNext();
	}

	// This is initially used to test the algorithm
	//console.log("cir =" + cir);
	//console.log("count = " + count);
}

function shapeT() {
	// Track count
	if (tri >= 2) {
		document.getElementById("shapeNext").innerHTML = "you can only select the same shape twice.";
	}
	else {
		document.getElementById("shapeNext").innerHTML = "";
		if (tri) {
		tri = tri+1;
		}
		else {
			tri = 1;
		}

		if (count) {
			count = count+1;
		}
		else {
			count = 1;
		}

		// Store count
		sessionStorage.setItem("numT",tri);

		// Display selected shape
		shape = "triangle";
		showSelection(shape, count);

		showNext();
	}

	// This is initially used to test the algorithm
	//console.log("tri = " + tri);
	//console.log("count = " + count);
}

function shapeR() {
	// Track count
	// Track count
	if (rec >= 2) {
		document.getElementById("shapeNext").innerHTML = "you can only select the same shape twice.";
	}
	else {
		document.getElementById("shapeNext").innerHTML = "";
		if (rec) {
		rec = rec+1;
		}
		else {
			rec = 1;
		}

		if (count) {
			count = count+1;
		}
		else {
			count = 1;
		}

		// Store count
		sessionStorage.setItem("numR",rec);

		// Display selected shape
		shape = "rectangle";
		showSelection(shape, count);

		showNext();
	}

	// This is initially used to test the algorithm
	//console.log("rec = " + rec);
	//console.log("count = " + count);
}

// Display selected shape in the order of selection
function showSelection(shape, pos) {
	if (pos === 1) {
		//Add shape to first column
		if (shape === "square") {
			//document.getElementById("shape1").innerHTML = "square";
			document.getElementById("shape1").style.height = "100px";
			document.getElementById("shape1").style.width = "100px";
			document.getElementById("shape1").style.backgroundColor = "white";
		}
		if (shape === "circle") {
			//document.getElementById("shape1").innerHTML = "circle";
			document.getElementById("shape1").style.height = "100px";
			document.getElementById("shape1").style.width = "100px";
			document.getElementById("shape1").style.borderRadius = "50%";
			document.getElementById("shape1").style.backgroundColor = "white";
		}
		if (shape === "triangle") {
			//document.getElementById("shape1").innerHTML = "triangle";
			document.getElementById("shape1").style.height = "0";
			document.getElementById("shape1").style.width = "0";
			document.getElementById("shape1").style.borderLeft = "50px solid transparent";
			document.getElementById("shape1").style.borderRight = "50px solid transparent";
			document.getElementById("shape1").style.borderBottom = "100px solid white";
		}
		if (shape === "rectangle") {
			//document.getElementById("shape1").innerHTML = "rectangle";
			document.getElementById("shape1").style.height = "100px";
			document.getElementById("shape1").style.width = "70px";
			document.getElementById("shape1").style.backgroundColor = "white";
		}
	}
	if (pos === 2) {
		//Add shape to second column
		if (shape === "square") {
			//document.getElementById("shape2").innerHTML = "square";
			document.getElementById("shape2").style.height = "100px";
			document.getElementById("shape2").style.width = "100px";
			document.getElementById("shape2").style.backgroundColor = "white";
		}
		if (shape === "circle") {
			//document.getElementById("shape2").innerHTML = "circle";
			document.getElementById("shape2").style.height = "100px";
			document.getElementById("shape2").style.width = "100px";
			document.getElementById("shape2").style.borderRadius = "50%";
			document.getElementById("shape2").style.backgroundColor = "white";
		}
		if (shape === "triangle") {
			//document.getElementById("shape2").innerHTML = "triangle";
			document.getElementById("shape2").style.height = "0";
			document.getElementById("shape2").style.width = "0";
			document.getElementById("shape2").style.borderLeft = "50px solid transparent";
			document.getElementById("shape2").style.borderRight = "50px solid transparent";
			document.getElementById("shape2").style.borderBottom = "100px solid white";
		}
		if (shape === "rectangle") {
			//document.getElementById("shape2").innerHTML = "rectangle";
			document.getElementById("shape2").style.height = "100px";
			document.getElementById("shape2").style.width = "70px";
			document.getElementById("shape2").style.backgroundColor = "white";
		}
	}
	if (pos === 3) {
		//Add shape to third column
		if (shape === "square") {
			//document.getElementById("shape3").innerHTML = "square";
			document.getElementById("shape3").style.height = "100px";
			document.getElementById("shape3").style.width = "100px";
			document.getElementById("shape3").style.backgroundColor = "white";
		}
		if (shape === "circle") {
			//document.getElementById("shape3").innerHTML = "circle";
			document.getElementById("shape3").style.height = "100px";
			document.getElementById("shape3").style.width = "100px";
			document.getElementById("shape3").style.borderRadius = "50%";
			document.getElementById("shape3").style.backgroundColor = "white";
		}
		if (shape === "triangle") {
			//document.getElementById("shape3").innerHTML = "triangle";
			document.getElementById("shape3").style.height = "0";
			document.getElementById("shape3").style.width = "0";
			document.getElementById("shape3").style.borderLeft = "50px solid transparent";
			document.getElementById("shape3").style.borderRight = "50px solid transparent";
			document.getElementById("shape3").style.borderBottom = "100px solid white";
		}
		if (shape === "rectangle") {
			//document.getElementById("shape3").innerHTML = "rectangle";
			document.getElementById("shape3").style.height = "100px";
			document.getElementById("shape3").style.width = "70px";
			document.getElementById("shape3").style.backgroundColor = "white";
		}
	}
	if (pos ===4) {
		//Add shape to forth column
		if (shape === "square") {
			//document.getElementById("shape4").innerHTML = "square";
			document.getElementById("shape4").style.height = "100px";
			document.getElementById("shape4").style.width = "100px";
			document.getElementById("shape4").style.backgroundColor = "white";
		}
		if (shape === "circle") {
			//document.getElementById("shape4").innerHTML = "circle";
			document.getElementById("shape4").style.height = "100px";
			document.getElementById("shape4").style.width = "100px";
			document.getElementById("shape4").style.borderRadius = "50%";
			document.getElementById("shape4").style.backgroundColor = "white";
		}
		if (shape === "triangle") {
			//document.getElementById("shape4").innerHTML = "triangle";
			document.getElementById("shape4").style.height = "0";
			document.getElementById("shape4").style.width = "0";
			document.getElementById("shape4").style.borderLeft = "50px solid transparent";
			document.getElementById("shape4").style.borderRight = "50px solid transparent";
			document.getElementById("shape4").style.borderBottom = "100px solid white";
		}
		if (shape === "rectangle") {
			//document.getElementById("shape4").innerHTML = "rectangle";
			document.getElementById("shape4").style.height = "100px";
			document.getElementById("shape4").style.width = "70px";
			document.getElementById("shape4").style.backgroundColor = "white";
		}
	}
}

// Show next button when four shapes are selected
function showNext() {
	if (count === 4) {
		document.getElementById("shapeNext").innerHTML = "next";
	}
}	

////////////////////////////////////// End of Shape Page ////////////////////////////////////

//////////////////////////////////////// Comp Page /////////////////////////////////////////

// Display the options for composition based on previous selection
function displayComp() {
	setColor();

	var result = getSelection();
	showComp(result);
}

function getSelection() {
	// Read from storage to determine selection
	var numS = parseInt(sessionStorage.getItem("numS"));
	var numC = parseInt(sessionStorage.getItem("numC"));
	var numT = parseInt(sessionStorage.getItem("numT"));
	var numR = parseInt(sessionStorage.getItem("numR"));

	var result; // Store selection

	if (numS === 2) {
		if (numC === 1 && numT ===1) {
			result = "2sct";
		}
		if (numC === 1 && numR === 1) {
			result = "2scr";
		}
		if (numT === 1 && numR === 1) {
			result = "2str";
		}
	}

	if (numC === 2) {
		if (numS === 1 && numT ===1) {
			result = "2cst";
		}
		if (numS === 1 && numR === 1) {
			result = "2csr";
		}
		if (numT === 1 && numR === 1) {
			result = "2ctr";
		}
	}

	if (numT === 2) {
		if (numS === 1 && numC ===1) {
			result = "2tsc";
		}
		if (numS === 1 && numR === 1) {
			result = "2tsr";
		}
		if (numC === 1 && numR === 1) {
			result = "2tcr";
		}
	}

	if (numR === 2) {
		if (numS === 1 && numC ===1) {
			result = "2rsc";
		}
		if (numS === 1 && numT === 1) {
			result = "2rst";
		}
		if (numC === 1 && numT === 1) {
			result = "2rct";
		}
	}

	if (numS === 1 && numC === 1 && 
		numT === 1 && numR === 1) {
		result = "sctr";
	}

	//console.log("result = " + result);
	return result;
}

// Display four compositions based on selected shapes
function showComp(selection) {

	// Create image element
	// Name the image element
	// Set attributes to the image element
	// Append image element 
	
	var cp1 = document.createElement("img");
	var name1 = "assets/images/comp/" + selection + "1.png";
	cp1.setAttribute("src", name1);
	cp1.setAttribute("height", "126");
	cp1.setAttribute("width", "180");
	cp1.setAttribute("alt", "Composition 1");
	cp1.setAttribute("class", "img-fluid");
	document.getElementById("paint1").appendChild(cp1);

	var cp2 = document.createElement("img");
	var name2 = "assets/images/comp/" + selection + "2.png";
	cp2.setAttribute("src", name2);
	cp2.setAttribute("height", "126");
	cp2.setAttribute("width", "180");
	cp2.setAttribute("alt", "Composition 2");
	cp2.setAttribute("class", "img-fluid");
	document.getElementById("paint2").appendChild(cp2);

	var cp3 = document.createElement("img");
	var name3 = "assets/images/comp/" + selection + "3.png";
	cp3.setAttribute("src", name3);
	cp3.setAttribute("height", "126");
	cp3.setAttribute("width", "180");
	cp3.setAttribute("alt", "Composition 3");
	cp3.setAttribute("class", "img-fluid");
	document.getElementById("paint3").appendChild(cp3);

	var cp4 = document.createElement("img");
	var name4 = "assets/images/comp/" + selection + "4.png";
	cp4.setAttribute("src", name4);
	cp4.setAttribute("height", "126");
	cp4.setAttribute("width", "180");
	cp4.setAttribute("alt", "Composition 4");
	cp4.setAttribute("class", "img-fluid");
	document.getElementById("paint4").appendChild(cp4);
}

// Functions for tracking selected composition
function comp1() {
	var result = getSelection();
	
	// Store selection
	sessionStorage.setItem("composition",result+1);

	document.getElementById("compNext").innerHTML = "create";
	document.getElementById("paint1").style.border = "2px solid white";
	document.getElementById("paint2").style.border = "0px";
	document.getElementById("paint3").style.border = "0px";
	document.getElementById("paint4").style.border = "0px";
}

function comp2() {
	var result = getSelection();
	
	// Store selection
	sessionStorage.setItem("composition",result+2);

	document.getElementById("compNext").innerHTML = "create";
	document.getElementById("paint2").style.border = "2px solid white";
	document.getElementById("paint1").style.border = "0px";
	document.getElementById("paint3").style.border = "0px";
	document.getElementById("paint4").style.border = "0px";
}

function comp3() {
	var result = getSelection();
	
	// Store selection
	sessionStorage.setItem("composition",result+3);

	document.getElementById("compNext").innerHTML = "create";
	document.getElementById("paint3").style.border = "2px solid white";
	document.getElementById("paint1").style.border = "0px";
	document.getElementById("paint2").style.border = "0px";
	document.getElementById("paint4").style.border = "0px";
}

function comp4() {
	var result = getSelection();
	
	// Store selection
	sessionStorage.setItem("composition",result+4);

	document.getElementById("compNext").innerHTML = "create";
	document.getElementById("paint4").style.border = "2px solid white";
	document.getElementById("paint1").style.border = "0px";
	document.getElementById("paint2").style.border = "0px";
	document.getElementById("paint3").style.border = "0px";
}

////////////////////////////////////// End of Comp Page ////////////////////////////////////


//////////////////////////////////////// Final Page /////////////////////////////////////////
function displayFinal() {

	setColor();

	var final = sessionStorage.getItem("composition");

	//console.log(final);

	//document.getElementById("compFinal").innerHTML = final;

	// Create image element
	// Name the image element
	// Set attributes to the image element
	// Append image element 
	
	var cpfinal = document.createElement("img");
	var namefinal = "assets/images/compfinal/final" + final + ".png";
	cpfinal.setAttribute("src", namefinal);
	cpfinal.setAttribute("height", "632");
	cpfinal.setAttribute("width", "900");
	cpfinal.setAttribute("alt", "Composition Final");
	cpfinal.setAttribute("class", "img-fluid");
	document.getElementById("finalcomp").appendChild(cpfinal);
}






