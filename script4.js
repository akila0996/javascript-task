var inputElement = document.getElementById("input");
var errorElement = document.getElementById("error");
var resultElement = document.getElementById("result");

function tableGenerator(){
    resultElement.innerHTML = "";
    errorElement.innerHTML = "";
    var number = parseInt(inputElement.value);

    if(isNaN(number)){
        errorElement.innerHTML ="Invalid Input!"
        errorElement.style.color = "red";
    }
    else if(number < 1 || number > 10){
        errorElement.innerHTML ="Please enter a valid number between (1 and 10) "
        errorElement.style.color = "red";
       }
    else{
    var i=1;
    while(i <= 10){
        var x = number * i;
        resultElement.innerHTML += number + "x" + i + "=" + x + "<br>";
        i++;
        resultElement.style.color = "blue";
    }
    inputElement.value = "";
        }
}