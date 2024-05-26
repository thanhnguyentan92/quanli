function display(number){
    document.getElementById("display").value += number;
    if(number === 'C'){
        document.getElementById("display").value = " ";
    }
   
}
function calculate(){
     var expression = document.getElementById("display").value;
    try{
        var result = eval(expression);
        document.getElementById("display").value = result;

    }catch (error){
        document.getElementById("display").value = "Error";
    }

}