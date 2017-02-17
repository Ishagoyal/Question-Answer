var questionText;
var answerText;
var questionArray=[];
var answerArray=[];
var i=0;




function addProblem(){
	
	var body=document.getElementsByTagName('body')[0];
	questionText=document.getElementById('question').value;
    answerText=document.getElementById('answer').value;
	questionArray.unshift(questionText);
    answerArray.unshift(answerText);

    var myContainer=document.getElementById('container');
    
    var myDiv=document.createElement("div");
	var questionLogo = document.createElement("p");
	var textNode = document.createTextNode("Question:");
    var questionDetail=document.createTextNode(questionArray[0]);


    var answerLogo = document.createElement("p");
    var ansTextNode = document.createTextNode("Answer: ");
    var answerDetail=document.createTextNode(answerArray[0]);
    var mybr=document.createElement("br");
     if(i==0){
      myContainer.appendChild(myDiv);
      myDiv.appendChild(questionLogo);
	  questionLogo.appendChild(textNode);
	  questionLogo.appendChild(questionDetail);
      questionLogo.appendChild(mybr);
      myDiv.appendChild(answerLogo);
      questionLogo.appendChild(ansTextNode);
      questionLogo.appendChild(answerDetail);
      
    }
    else if(i>0){
      myContainer.insertBefore(myDiv,myContainer.firstChild);
      myDiv.appendChild(questionLogo);
      questionLogo.appendChild(textNode);
      questionLogo.appendChild(questionDetail);
      questionLogo.appendChild(mybr);
      myDiv.appendChild(answerLogo);
      questionLogo.appendChild(ansTextNode);
      questionLogo.appendChild(answerDetail);
          
    }

    i++;
   

		
  
}