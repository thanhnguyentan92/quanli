function convert(){
    var amount = document.getElementById("amount").value;
    var selectCurrentcy = document.getElementById("currentcy").value;
    var toCurrentcy = document.getElementById("toCurrentcy").value;
    if(selectCurrentcy ==="Vietnam"){
       if(toCurrentcy === "Vietnam"){
           var result= document.getElementById("result");
           result.textContent +=" "+amount;
       }else if(toCurrentcy === "US"){
           fetch('https://open.er-api.com/v6/latest/USD')
               .then(response => response.json())
               .then(data => {
                   // Retrieve the exchange rate from the API response
                   var exchangeRate = data.rates.VND;

                   // Convert VND to USD using the obtained exchange rate
                   var usdAmount = amount / exchangeRate;

                   // Display the result
                   document.getElementById("result").textContent = "USD: " + usdAmount.toFixed(2);
               })
               .catch(error => console.error('Error fetching data:', error));
         //  document.getElementById("result").textContent+= amount/25403.9;

       }else{
           document.getElementById("result").textContent+= amount/164.663;
           fetch('https://open.er-api.com/v6/latest/JPY')
               .then(response => response.json())
               .then(data =>{
                   var exchangRate = data.rates.VND;
                   var jpyAmount = amount/exchangRate;
                   document.getElementById("result").textContent = 'JPY: ' + jpyAmount;
               })
               .catch(error => console.error("Eroor fetching data:", error));
       }
    }
}
// function showSelectCurrentcy(){
//     var selectCurrentcy = document.getElementById("currentcy").value;
//
// }