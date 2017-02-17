var questionText;
var questionArray=[];




function addProblem(){
	
	var body=document.getElementsByTagName('body')[0];
	questionText=document.getElementById('question').value;
	questionArray.unshift(questionText);

    	
	
	var questionLogo = document.createElement("p");
	var textNode = document.createTextNode("Question:");
    var question=document.createElement("p");
    var questionDetail=document.createTextNode(questionArray[0]);
    var br=document.createElement("br");
    
      body.appendChild(questionLogo);
	  questionLogo.appendChild(textNode);
	  body.appendChild(question);
	  question.appendChild(questionDetail);
    
    body.appendChild(br);

		
  
}