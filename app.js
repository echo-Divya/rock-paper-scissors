const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener("click", () => play("rock"));
paperBtn.addEventListener("click", () => play("paper"));
scissorsBtn.addEventListener("click", () => play("scissors"));

const showR = document.querySelector("#resetscore");
showR.addEventListener("click", reset);

const score = {
  wins: 0,
  loses: 0,
  ties: 0,
};
function display() {
  const resultBox = document.querySelector("#showResult");
  resultBox.style.display = "flex";
  const show = document.querySelector("#show");
  show.textContent = `Wins😎: ${score.wins} | Loses🥲: ${score.loses} | Ties😅: ${score.ties}`;
}
function reset() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  display();
}
function computer() {
  let comp = "";
  const random = Math.random();
  if (random <= 1 / 3) {
    comp = "rock";
  } else if (random <= 2 / 3) {
    comp = "paper";
  } else {
    comp = "scissors";
  }
  return comp;
}

function play(user) {
  const comp = computer();
  let result = "";
  if (user === comp) {
    result = "Tie😅";
  } else if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    result = "You Win😎";
  } else {
    result = "You Lost🥲";
  }

  if (result === "You Win😎") {
    score.wins += 1;
  } else if (result === "You Lost🥲") {
    score.loses += 1;
  } else {
    score.ties += 1;
  }

  alert(`You chose ${user}\nComputer chose ${comp}\n${result}`);
  display();
}
