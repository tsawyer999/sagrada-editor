document.addEventListener("DOMContentLoaded", () => {
  makeColorDiceDraggable();
  makeBlankDiceAcceptDrops();
});

function makeColorDiceDraggable() {
  const dices = document.querySelectorAll(".color-dice-container .dice");

  for (const dice of dices) {
    dice.setAttribute("draggable", "true");

    dice.addEventListener("dragstart", (e) => {
      const colorClass = Array.from(dice.classList).find((cls) =>
        cls.startsWith("dice-"),
      );

      e.dataTransfer.setData("text/plain", colorClass);
      dice.style.opacity = "0.5";
    });

    dice.addEventListener("dragend", (e) => {
      dice.style.opacity = "1";
    });
  }
}

function makeBlankDiceAcceptDrops() {
  const dices = document.querySelectorAll(".card .dice");

  for (const dice of dices) {
    dice.addEventListener("dragover", (e) => {
      e.preventDefault();
      dice.style.opacity = "0.7";
    });

    dice.addEventListener("dragleave", (e) => {
      dice.style.opacity = "1";
    });

    dice.addEventListener("drop", (e) => {
      e.preventDefault();
      const colorClass = e.dataTransfer.getData("text/plain");

      dice.classList.remove(
        "dice-red",
        "dice-yellow",
        "dice-green",
        "dice-blue",
        "dice-purple",
      );

      if (colorClass) {
        dice.classList.add(colorClass);
      }

      dice.style.opacity = "1";
    });
  }
}
