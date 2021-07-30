let name = "chris"
document.querySelector(".plus").onclick = function(){
	let num1 = document.querySelector(".number1").value;
	let num2 = document.querySelector(".number2").value;
	alert(parseInt(num1)+parseInt(num2))
}
document.querySelector(".minus").onclick = function(){
	let num1 = document.querySelector(".number1").value;
	let num2 = document.querySelector(".number2").value;
	alert(parseInt(num1)-parseInt(num2))
}
document.querySelector(".umn").onclick = function(){
	let num1 = document.querySelector(".number1").value;
	let num2 = document.querySelector(".number2").value;
	alert(parseInt(num1)*parseInt(num2))
}
document.querySelector(".ras").onclick = function(){
	let num1 = document.querySelector(".number1").value;
	let num2 = document.querySelector(".number2").value;
	alert(parseInt(num1)/parseInt(num2))
}