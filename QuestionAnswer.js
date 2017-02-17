var questionText;



function addProblem(){
	questionText=document.getElementById('question').value;
	console.log(questionText);
	document.getElementById('questionText').innerHTML=questionText;
}