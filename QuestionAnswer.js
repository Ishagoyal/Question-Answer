var questionText;
var answerText;
var questionArray=[];
var answerArray=[];
var i=0;
var j=10000;





function addProblem(){
	
	var body=document.getElementsByTagName('body')[0];
  	questionText=document.getElementById('questionId').value;
    answerText=document.getElementById('answerId').value;
	  questionArray.unshift(questionText);
    answerArray.unshift(answerText);

    var myContainer=document.getElementById('container');
    
  var myDiv=document.createElement("div");
	var questionLogo = document.createElement("p");
  questionLogo.id="questionLogo";
	var textNode = document.createTextNode("Question:");
  var question = document.createElement("p");
  question.id="question";
    var questionDetail=document.createTextNode(questionArray[0]);

    var deleteButton=document.createElement("button");
    deleteButton.innerHTML="Delete";
    deleteButton.id=i;
    var editButton=document.createElement("button");
    editButton.innerHTML="Edit";
    editButton.id=j;


    var answerLogo = document.createElement("p");
    answerLogo.id="answerLogo"
    var ansTextNode = document.createTextNode("Answer: ");
    var answer=document.createElement("p");
    answer.id="answer";
    var answerDetail=document.createTextNode(answerArray[0]);
    var mybr=document.createElement("br");

     if(i==0){
      myContainer.appendChild(myDiv);
      myDiv.appendChild(questionLogo);
	    questionLogo.appendChild(textNode);
      questionLogo.appendChild(question);
	    question.appendChild(questionDetail);
      myDiv.appendChild(answerLogo);
      answerLogo.appendChild(ansTextNode);
      answerLogo.appendChild(answer);
      answer.appendChild(answerDetail);
      answerLogo.appendChild(mybr);
      myDiv.appendChild(deleteButton);
      myDiv.innerHTML += ' ';
      myDiv.appendChild(editButton);
      
    }
    else if(i>0){
      myContainer.insertBefore(myDiv,myContainer.firstChild);
      myDiv.appendChild(questionLogo);
      questionLogo.appendChild(textNode);
      questionLogo.appendChild(question);
      question.appendChild(questionDetail);
      myDiv.appendChild(answerLogo);
      answerLogo.appendChild(ansTextNode);
      answerLogo.appendChild(answer);
      answer.appendChild(answerDetail);
      answer.appendChild(mybr);
      myDiv.appendChild(deleteButton);
      myDiv.innerHTML += ' ';
      myDiv.appendChild(editButton);
      
          
    }

    i++;
    j++;

    
    myDiv.childNodes[7].addEventListener("click", function(){
           var deleteElement=document.getElementById(this.id);
           deleteElement.parentNode.parentNode.removeChild(deleteElement.parentNode);
    });

  myDiv.childNodes[9].addEventListener("click",function(){
         var editElement=document.getElementById(this.id);

         var quesEdit= editElement.parentNode.childNodes[1];
         var quesEditText=quesEdit.innerHTML;
         
         
         var ansEdit= editElement.parentNode.childNodes[4];
         var ansEditText=ansEdit.innerHTML;

         var quesTextArea=document.createElement("textarea");
         quesTextArea.value += quesEditText;
         quesEdit.parentNode.replaceChild(quesTextArea,quesEdit);
         quesTextArea.focus();
        
         var ansTextArea=document.createElement("textarea");
         ansTextArea.value += ansEditText;
         ansEdit.parentNode.replaceChild(ansTextArea,ansEdit);
         
        

  });
}