function increaseNumber(){
    const playerNumber = document.getElementById('player-number');
    const playerNumberIncreaseString = playerNumber .innerText;
    const playerNumberIncrease = parseFloat(playerNumberIncreaseString);
    
    playerNumberTotal = playerNumberIncrease + 1;
    
    playerNumber.innerText = playerNumberTotal;

    if(playerNumberTotal > 5){
        alert('If you selecet more than five players, You have to pay more!!!!');
    }
}