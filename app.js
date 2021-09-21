const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const btnCheck = document.querySelector("#btn-check");
const msg = document.querySelector("#errorMsg");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 50, 10, 5, 1];

btnCheck.addEventListener("click", function validateAmounts() {

    msg.style.display = "none";

    if (billAmount.value > 0) {
        if (cashAmount.value > 99 && billAmount > 99) {
            if (billAmount.value >= cashAmount.value )   {
                console.log(billAmount.value);
                const balanceAmount  = cashAmount.value - billAmount.value ;
                console.log(balanceAmount)
                calculateChange(balanceAmount);
            }
            else{
                console.log(billAmount.value, cashAmount.value)
                showMessage("Do You wanna wash plates! (Enter right amount)");
            }      
        }
        else{
                if (billAmount.value <= cashAmount.value )   {
                    console.log(billAmount.value);
                    const balanceAmount  = cashAmount.value - billAmount.value ;
                    console.log(balanceAmount)
                    calculateChange(balanceAmount);
                }
                else{
                    console.log(billAmount.value, cashAmount.value)
                    showMessage("Do You wanna wash plates! (Enter right amount)");
                }
            }
    }
    else{
        showMessage("Invalid Bill Amount"); 
    }
});

function calculateChange(balanceAmount) {
    for(let i=0; i< availableNotes.length; i++){
        const note = Math.trunc(balanceAmount / availableNotes[i]);
        
        balanceAmount %= availableNotes[i];

        numberOfNotes[i].innerText = note;
    }
}

function showMessage(message) {
    msg.style.display = "block";
    msg.innerText = message
}