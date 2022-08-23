function increaseNumber(){
    const playerNumber = document.getElementById('player-number');
    const playerNumberIncreaseString = playerNumber .innerText;
    const playerNumberIncrease = parseFloat(playerNumberIncreaseString);

    playerNumberTotal = playerNumberIncrease + 1;

    playerNumber.innerText = playerNumberTotal;
   
 
}