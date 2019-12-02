// Javascript file for Mod Four website

/////////////////// Color Page ///////////////////

// Function for changing background color
// and add white border to square
// and next button to show up

// Change background color to orange #F89D5B
function colorO() {
	document.body.style.background = "#F89D5B";
	document.getElementById("color1").style.border = "2px solid white";
	sessionStorage.setItem("color","#F89D5B");

	document.getElementById("colorNext").innerHTML = "next";
}

// Change background color to off-white #EBDCC6
function colorW() {
	document.body.style.background = "#EBDCC6";
	document.getElementById("color2").style.border = "2px solid white";
	sessionStorage.setItem("color","#EBDCC6");

	document.getElementById("colorNext").innerHTML = "next";
}

// Change background color to light green #C9DDC6
function colorG() {
	document.body.style.background = "#C9DDC6";
	document.getElementById("color3").style.border = "2px solid white";
	sessionStorage.setItem("color","#C9DDC6");

	document.getElementById("colorNext").innerHTML = "next";
}

// Change background color to misty blue #8DA1A4
function colorB() {
	document.body.style.background = "#8DA1A4";
	document.getElementById("color4").style.border = "2px solid white";
	sessionStorage.setItem("color","#8DA1A4");

	document.getElementById("colorNext").innerHTML = "next";
}

// Set background color based on selection
function setColor() {
	var backColor = sessionStorage.getItem("color");
	document.body.style.background = backColor;
}

//////////////// End of Color Page ////////////////

/////////////////// Shape Page ////////////////////

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

	console.log("squ = " + squ);
	console.log("count = " + count);

	// Store count
	sessionStorage.setItem("numS",squ);

	// Display selected shape
	shape = "square";
	showSelection(shape, count);

	showNext();
}

function shapeC() {
	// Track count
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

	console.log("cir =" + cir);
	console.log("count = " + count);

	// Store count
	sessionStorage.setItem("numC",cir);

	// Display selected shape
	shape = "circle";
	showSelection(shape, count);

	showNext();
}

function shapeT() {
	// Track count
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

	console.log("tri = " + tri);
	console.log("count = " + count);

	// Store count
	sessionStorage.setItem("numT",tri);

	// Display selected shape
	shape = "triangle";
	showSelection(shape, count);

	showNext();
}

function shapeR() {
	// Track count
	if (rec) {
		rec = rec+1;
	}
	else {
		rec = 1;
	}

	if (count) {count = count+1;}
	else {count = 1;}

	console.log("rec = " + rec);
	console.log("count = " + count);

	// Store count
	sessionStorage.setItem("numR",rec);

	// Display selected shape
	shape = "rectangle";
	showSelection(shape, count);

	showNext();
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

///////////////// End of Shape Page ///////////////

/////////////////// Comp Page ////////////////////

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
		result = "scrt";
	}

	console.log("result = " + result);
	return result;
}

function showComp(selection) {
	//document.getElementById("comp1")
	//document.getElementById("comp2")
	//document.getElementById("comp3")
	//document.getElementById("comp4")
}

// Functions for tracking selected composition
function comp1() {
	var result = getSelection();
	
	// Store selection
	sessionStorage.setItem("composition",result+1);

	document.getElementById("compNext").innerHTML = "create";
}

function comp2() {
	var result = getSelection();
	
	// Store selection
	sessionStorage.setItem("composition",result+2);

	document.getElementById("compNext").innerHTML = "create";
}

function comp3() {
	var result = getSelection();
	
	// Store selection
	sessionStorage.setItem("composition",result+3);

	document.getElementById("compNext").innerHTML = "create";
}

function comp4() {
	var result = getSelection();
	
	// Store selection
	sessionStorage.setItem("composition",result+4);

	document.getElementById("compNext").innerHTML = "create";
}

///////////////// End of Comp Page ///////////////


/////////////////// Final Page ////////////////////
function displayFinal() {

	setColor();

	var final = sessionStorage.getItem("composition");

	console.log(final);

	document.getElementById("compFinal").innerHTML = final;
}






