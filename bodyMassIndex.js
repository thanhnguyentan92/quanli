function checkBMI(){
    var getWeight = +document.getElementById("weight").value;
    var getHeight = +document.getElementById("height").value;

    var BMI = getWeight / Math.pow(getHeight,2) ;

    if(BMI<18.5){
         document.getElementById("result").textContent = "BMI " + BMI + " "+" Underweight";
        //result.textContent = "BMI" + BMI + "Underweight";
    }else if(BMI < 25){
        result.textContent= "Your BMI " + BMI + " Normal";
    }else if(BMI < 30){
        result.textContent= "BMI" + BMI + "Overweight";
    }else {
        result.textContent= "BMI" + BMI + "Obese";
    }
}

