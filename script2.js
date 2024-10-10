var input1Element =document.getElementById("input1");
var input2Element =document.getElementById("input2");
var nameError  =document.getElementById("nameError");
var ageError  =document.getElementById("ageError");
var resultElement =document.getElementById("result");


function ageCategory(){

    resultElement.innerHTML ="";
    nameError.innerHTML = "";
    ageError.innerHTML = "";
    
    var username =input1Element.value;
    var age = input2Element.value;

    if (username === '' || age === ''){

        if(username === ''){
            nameError.innerHTML = "Please Enter Your Name!"
            nameError.style.color ="red";
        }
        if(age === '' ){
            ageError.innerHTML = "Please Enter Your Age!"
            ageError.style.color ="red";
        }

    }
        
    else {
       
        if(age <=12){
            resultElement.innerHTML ="<h3> Details: </h3>" +  "Name:" + username + "<br>" + "Age:" + age + "<br>" +
            "Category : 'CHILD'"
            resultElement.style.color = "green";
        }
        if(age >= 13 && age <= 19){
            resultElement.innerHTML ="<h3> Details: </h3>" +  "Name:" + username + "<br>" + "Age:" + age + "<br>" +
            "Category : 'TEENAGER'"
            resultElement.style.color = "blue";
        }
        if(age >= 20 && age <= 64){
            resultElement.innerHTML ="<h3> Details: </h3>" +  "Name:" + username + "<br>" + "Age:" + age + "<br>" +
            "Category : 'ADULT'"
            resultElement.style.color = "brown";
        }
        if(age >=64){
            resultElement.innerHTML ="<h3> Details: </h3>" +  "Name:" + username + "<br>" + "Age:" + age + "<br>" +
            "Category : 'SENIOR CITIZEN'"
            resultElement.style.color = "grey";
        }

        input1Element.value = "";
        input2Element.value = "";
      
    }
    
}