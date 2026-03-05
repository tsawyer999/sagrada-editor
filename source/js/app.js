document.addEventListener("DOMContentLoaded", () => {
  makeColorDiceDraggable();
  makeWhiteDiceAcceptDrops();
});

function makeColorDiceDraggable() {
  const colorDice = document.querySelectorAll(
    ".dice-red, .dice-yellow, .dice-green, .dice-blue, .dice-purple",
  );

  colorDice.forEach((dice) => {
    dice.setAttribute("draggable", "true");

    dice.addEventListener("dragstart", (e) => {
      // Get the color class (dice-red, dice-yellow, etc.)
      const colorClass = Array.from(dice.classList).find((cls) =>
        cls.startsWith("dice-"),
      );

      e.dataTransfer.setData("text/plain", colorClass);
      dice.style.opacity = "0.5";
    });

    dice.addEventListener("dragend", (e) => {
      dice.style.opacity = "1";
    });
  });
}

function makeWhiteDiceAcceptDrops() {
  const whiteDice = document.querySelectorAll(".card .dice");

  whiteDice.forEach((dice) => {
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
  });
}
