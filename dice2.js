window.addEventListener('load', function() {

    
  const player1 = sessionStorage.getItem('PLAYER1');
  const player2 = sessionStorage.getItem('PLAYER2');
  const number = sessionStorage.getItem('NUMBER');
  
  document.getElementById('name1').innerHTML = player1;
  document.getElementById('name2').innerHTML = player2;

  document.querySelector('input').addEventListener('click', function() {
    var i = 0;
    var count1 =0 , count2 =0;
    for( i = 0 ; i < number ; i++){
    var randomNumber1 = Math.floor(Math.random()*5 + 1);
    var randomDiceImage1 = "./dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImage1);
    count1 = count1 + randomNumber1;

    var randomNumber2 = Math.floor(Math.random()*5 + 1);
    var randomDiceImage2 = "./dice" + randomNumber2 + ".png";
    var image1 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", randomDiceImage2);
    count2 = count2 + randomNumber2;
    
    }

    if (count1 > count2) {
      document.querySelector('#winner').innerHTML = player1 + " Wins!";
    }
    else if (count2 > count1) {
      document.querySelector('#winner').innerHTML = player2 + " Wins! ";
    }
    else {
      document.querySelector('#winner').innerHTML = "Draw!";
    }

  })

  

})
