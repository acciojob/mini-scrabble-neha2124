//your code here
let text = document.getElementById("evaluatedText")
let countNum = document.getElementById("letterCount")
text.addEventListener("input" , (e) => {
	let val = e.target.value
	let count = val.length;
	countNum.innerText = count
})