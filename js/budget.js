
// ----pin player calculation
   document.getElementById('calculation').addEventListener('click', function(){
    const pinPlayer = document.getElementById('player-rate');
    const perPinPlayerstring = pinPlayer.value; 
    const perPinPlayer = parseFloat(perPinPlayerstring);

    const playerList = document.querySelectorAll('#name-container li');
    const players = playerList.length;

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesTotal = perPinPlayer * players;
    playerExpenses.innerText = playerExpensesTotal;
    
 })
 
//  ---total expenses--------
 
 document.getElementById('calculate-total').addEventListener('click', function(){

    // manager pin 
     const managerPin = document.getElementById('manager-rate');
     const managerPinRateString = managerPin.value;
     managerPinRate = parseFloat(managerPinRateString);


    //  coach pin
     const coachPin = document.getElementById('coach-rate');
     const coachPinRateString = coachPin.value;
     coachPinRate = parseFloat(coachPinRateString);

    //  player expenses total
    const pinPlayer = document.getElementById('player-rate');
    const perPinPlayerstring = pinPlayer.value; 
    const perPinPlayer = parseFloat(perPinPlayerstring);

    const playerList = document.querySelectorAll('#name-container li');
    const players = playerList.length;

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesTotal = perPinPlayer * players;
   
  
   

    //  total expenses
     const totalExpenses = playerExpensesTotal + coachPinRate + managerPinRate;
     const totalRate = document.getElementById('total-rate');
     totalRate.innerText = totalExpenses;
 
 })
 