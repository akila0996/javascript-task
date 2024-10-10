var errorElement = document.getElementById("error");
var inputElement =document.getElementById("input");
var resultElement =document.getElementById("result");

function calculateGrade(score){

    resultElement.innerHTML ="";
    var score = parseInt(inputElement.value);

    if(isNaN(score)){
        errorElement.innerHTML = "Invalid Input!" ;
        errorElement.style.color = "red";
        
    } else if( score >100){
        errorElement.innerHTML = "Out-of-range values!";
        errorElement.style.color = "red";
    }  

    else {

        errorElement.innerHTML ="";

    if(score >= 90){
        resultElement.innerHTML = "<h4>Result:</h4>" + "Mark:" + score + "<br>" + "Grade:'A'"; 
        resultElement.style.color ="blue";
    }
    if(score >= 80 && score <= 89){
        resultElement.innerHTML = "<h4>Result:</h4>" + "Mark:" + score + "<br>" + "Grade:'B'"; 
        resultElement.style.color ="blue";
    }
    if(score >= 70 && score <= 79){
        resultElement.innerHTML = "<h4>Result:</h4>" + "Mark:" + score + "<br>" + "Grade:'C'"; 
        resultElement.style.color ="blue";
    }
    if(score >= 60 && score <= 69){
        resultElement.innerHTML = "<h4>Result:</h4>" + "Mark:" + score + "<br>" + "Grade:'D'"; 
        resultElement.style.color ="blue";
    }
    if(score < 60){
        resultElement.innerHTML = "<h4>Result:</h4>" + "Mark:" + score + "<br>" + "Grade:'F'"; 
        resultElement.style.color ="red";
    }
} 
    inputElement.value=""; 

}
