var questionText;
var answerText;
var questionArray=[];
var answerArray=[];
var i=0;
var j=10000;
var childNodesCount;




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

    var deleteButton=document.createElement("button");
    deleteButton.innerHTML="Delete";
    deleteButton.id=i;
    console.log(deleteButton.id);
    var editButton=document.createElement("button");
    editButton.innerHTML="Edit";
    editButton.id=j;


    var answerLogo = document.createElement("p");
    var ansTextNode = document.createTextNode("Answer: ");
    var answerDetail=document.createTextNode(answerArray[0]);
    var mybr=document.createElement("br");
     if(i==0){
      myContainer.appendChild(myDiv);
      myDiv.appendChild(questionLogo);
	    questionLogo.appendChild(textNode);
	    questionLogo.appendChild(questionDetail);
      myDiv.appendChild(answerLogo);
      answerLogo.appendChild(ansTextNode);
      answerLogo.appendChild(answerDetail);
      answerLogo.appendChild(mybr);
      myDiv.appendChild(deleteButton);
      myDiv.innerHTML += ' ';
      myDiv.appendChild(editButton);
      
    }
    else if(i>0){
      myContainer.insertBefore(myDiv,myContainer.firstChild);
      myDiv.appendChild(questionLogo);
      questionLogo.appendChild(textNode);
      questionLogo.appendChild(questionDetail);
      myDiv.appendChild(answerLogo);
      answerLogo.appendChild(ansTextNode);
      answerLogo.appendChild(answerDetail);
      answerLogo.appendChild(mybr);
      myDiv.appendChild(deleteButton);
      myDiv.innerHTML += ' ';
      myDiv.appendChild(editButton);
          
    }

    i++;
    j++;

    myDiv.childNodes[2].addEventListener("click", function(){
           var deleteElement=document.getElementById(this.id);
           console.log(deleteElement);
           deleteElement.parentNode.parentNode.removeChild(deleteElement.parentNode);
    });

  childNodesCount=myContainer.childNodes.length;
  console.log(childNodesCount);
}