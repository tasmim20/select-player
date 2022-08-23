/* -------------common function--------------- */
function selectPlayer(elementId){
    const playerSelection = document.getElementById(elementId);
   const playerName = playerSelection.innerText;
    const playerNameContainer = document.querySelectorAll('#name-container li');
    if(playerNameContainer.length <= 4){
      const playerNameContainer2 = document.getElementById('name-container');
      const li = document.createElement('li');
      li.innerText = playerName;
      playerNameContainer2.appendChild(li);
    }
    else{
      alert('Select Only Five!!!!!');
    
    }

   
 
 increaseNumber();



    
}

function disabled(nameId){
  let btnDisable = document.getElementById(nameId);
if (btnDisable) {
  btnDisable.setAttribute('style', 'background-color: gray');
  btnDisable.setAttribute('disabled', '');

}
}


/*---------------- add event handler in button----------------*/
document.getElementById('btn-select1').addEventListener('click', function(){
selectPlayer('player1');

disabled('btn-select1');



})
document.getElementById('btn-select2').addEventListener('click', function(){
 selectPlayer('player2');

 disabled('btn-select2');

  
})
document.getElementById('btn-select3').addEventListener('click', function(){
  selectPlayer('player3');

  disabled('btn-select3');

  
})
document.getElementById('btn-select4').addEventListener('click', function(){
  selectPlayer('player4');

  disabled('btn-select4');
  
})
document.getElementById('btn-select5').addEventListener('click', function(){
 selectPlayer('player5');

 disabled('btn-select5');
  
})
document.getElementById('btn-select6').addEventListener('click', function(){
selectPlayer('player6');

disabled('btn-select6');
  
})

