
function computeLoan(){
    var amount = document.getElementById("amount").value;
    var interest_rate = document.getElementById("interest_rate").value;
    var months = document.getElementById("months").value;
    
    var interest = (amount * (interest_rate * 0.01) / months);
    var payment = ((amount/ months) + interest).toFixed(2);
    payment = payment.toString();
    document.getElementById("total").innerHTML = "Amount Payable: " + payment;
}
