const player1 = sessionStorage.getItem("PLAYER1");
const player2 = sessionStorage.getItem("PLAYER2");
const number = sessionStorage.getItem("NUMBER");

let winnerHeader = document.querySelector("#winner");

const randomImageGenerator = (playerCounts) => {
  let randomNumber1 = Math.floor(Math.random() * 5 + 1);
  let randomNumber2 = Math.floor(Math.random() * 5 + 1);
  let image = document.querySelectorAll("img");

  let randomDiceImage1 = `../images/dice${randomNumber1}.png`;
  image[0].setAttribute("src", randomDiceImage1);
  playerCounts.countPlayer1 += randomNumber1;

  let randomDiceImage2 = `../images/dice${randomNumber2}.png`;
  image[1].setAttribute("src", randomDiceImage2);
  playerCounts.countPlayer2 += randomNumber2;
};

const checkWinner = (playerCounts) => {
  if (playerCounts.countPlayer1 > playerCounts.countPlayer2) {
    winnerHeader.innerHTML = `${player1} Wins!!`;
  } else if (playerCounts.countPlayer2 > playerCounts.countPlayer1) {
    winnerHeader.innerHTML = `${player2} Wins!!`;
  } else {
    winnerHeader.innerHTML = "Draw!";
  }
};

window.addEventListener("load", function () {
  document.getElementById("name1").innerHTML = player1;
  document.getElementById("name2").innerHTML = player2;

  document.querySelector("input").addEventListener("click", function () {
    winnerHeader.innerHTML = "";
    const playerCounts = {
      countPlayer1: 0,
      countPlayer2: 0,
    };
    const imageLoop = setInterval(() => {
      randomImageGenerator(playerCounts);
    }, 2000);

    setTimeout(() => {
      checkWinner(playerCounts);
      clearInterval(imageLoop);
    }, number * 2000);
  });
});
