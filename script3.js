var inputElement = document.getElementById("input");
var errorElement = document.getElementById("error");
var resultElement = document.getElementById("result");

function checkDayType(day){

    resultElement.innerHTML="";
    errorElement.innerHTML ="";
    var day = inputElement.value;
    day = day.toLowerCase();
      
    if(day === ''){
        errorElement.innerHTML="Invalid Inputs!";
        errorElement.style.color = "red";
    }
    else if (day === "saturday" || day === "sunday") {

        resultElement.innerHTML="It's the weekend :)";
        resultElement.style.color = "green";
    }
    else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
        resultElement.innerHTML="It's a weekday :(";
        resultElement.style.color = "blue";
    }
    else{
        resultElement.innerHTML="Invalid day entered!!";
        resultElement.style.color = "red";
    }
   
    inputElement.value="";
}


