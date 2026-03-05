document.addEventListener("DOMContentLoaded", () => {
  makeColorDiceDraggable();
  makeBlankDiceAcceptDrops();

  makeNumberFaceDraggable();
  makeBlankFaceAcceptDrops();
});

function makeNumberFaceDraggable() {
  const faces = document.querySelectorAll(".face-number-container .face");

  for (const face of faces) {
    face.setAttribute("draggable", "true");

    face.addEventListener("dragstart", (e) => {
      const numberClass = Array.from(face.classList).find((cls) =>
        cls.startsWith("face-"),
      );

      e.dataTransfer.setData("text/plain", numberClass);
      face.style.opacity = "0.5";
    });

    face.addEventListener("dragend", (e) => {
      face.style.opacity = "1";
    });
  }
}

function makeBlankFaceAcceptDrops() {
  const faces = document.querySelectorAll(".card .face");

  for (const face of faces) {
    face.addEventListener("dragover", (e) => {
      e.preventDefault();
      face.style.opacity = "0.7";
    });

    face.addEventListener("dragleave", (e) => {
      face.style.opacity = "1";
    });

    face.addEventListener("drop", (e) => {
      e.preventDefault();
      const numberClass = e.dataTransfer.getData("text/plain");

      face.classList.remove(
        "face-one",
        "face-two",
        "face-three",
        "face-four",
        "face-five",
        "face-six",
      );

      if (numberClass) {
        face.classList.add(numberClass);
      }

      face.style.opacity = "1";
    });
  }
}

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
