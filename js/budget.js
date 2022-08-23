// --pin player calculation
function pinPlayer(){
    const pinPlayer = document.getElementById('player-rate');
    const perPinPlayerstring = pinPlayer.value; 
    const perPinPlayer = parseFloat(perPinPlayerstring);

    const playerExpenses = document.getElementById('player-expenses');
    const playerSelect = document.getElementById('player-number');
    const playerSelect1 = playerSelect.innerText;

    const playerExpensesTotal = perPinPlayer * playerSelect1;
    playerExpenses.innerText = playerExpensesTotal;
}


// ----pin player calculation
   document.getElementById('calculation').addEventListener('click', function(){
   
   pinPlayer();
    
 })
 
 
//  ---total expenses--------
 
 document.getElementById('calculate-total').addEventListener('click', function(){
     const managerPin = document.getElementById('manager-rate');
     const managerPinRateString = managerPin.value;
     managerPinRate = parseFloat(managerPinRateString);
 
     const coachPin = document.getElementById('coach-rate');
     const coachPinRateString = coachPin.value;
     coachPinRate = parseFloat(coachPinRateString);

     const pinPlayer = document.getElementById('player-rate');
     const perPinPlayerstring = pinPlayer.value; 
     const perPinPlayer = parseFloat(perPinPlayerstring);
     const playerExpenses = document.getElementById('player-expenses');
     const playerSelect = document.getElementById('player-number');
     const playerSelect1 = playerSelect.innerText;
     const playerExpensesTotal = perPinPlayer * playerSelect1;
     playerExpenses.innerText = playerExpensesTotal;


    
     const totalExpenses = playerExpensesTotal + coachPinRate + managerPinRate;
     const totalRate = document.getElementById('total-rate');
     totalRate.innerText = totalExpenses;
 
 })
 