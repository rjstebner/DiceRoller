const rollBtn = document.getElementById("rollBtn");
const diceContainer = document.getElementById("diceContainer");
const diceCountInput = document.getElementById("diceCount");

function rollDice() {
  const diceCount = parseInt(diceCountInput.value) || 1;
  diceContainer.innerHTML = "";

  for (let i = 0; i < diceCount; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/Ennoriel/Dice-Icons/main/dice${roll}.png`;
    img.alt = `Dice showing ${roll}`;
    img.classList.add("dice");
    diceContainer.appendChild(img);
  }
}

rollBtn.addEventListener("click", rollDice);

// Initial roll
rollDice();
