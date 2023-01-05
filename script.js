//your code here
let text = document.getElementById("evaluatedText")
let countNum = document.getElementById("count")
text.addEventListener("input" , (e) => {
	let val = e.target.value
	let count = val.length;
	countNum.innerText = count
})