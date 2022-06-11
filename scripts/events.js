/*var num1   = document.getElementById("num-one");
num1.addEventListener("click", function(){
	console.log("Hi!");
	alert("Hi!");
});*/

var num1   = document.getElementById("num-one");
var num2   = document.getElementById("num-two");
var sum    = document.getElementById("add-sum");

// evetnts: click, mouseenter, mouseleave, mousedown,mouseup,mousemove, keydown, keyup,blur, focus

num1.addEventListener("input", add);
num2.addEventListener("input", add);

function add(){
	//console.log("hi!");
	//alert("Hey!");
	var one = parseFloat(num1.value) || 0;
	var two = parseFloat(num2.value) || 0;	
	sum.innerHTML = one + two;
}