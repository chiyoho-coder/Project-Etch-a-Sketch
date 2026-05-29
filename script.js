const container = document.querySelector("#container");
    const button = document.querySelector("#newGridBtn");

    function createGrid(size) {
      container.innerHTML = "";

      const squareSize = 560 / size;

      for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.darkness = 0;

        square.addEventListener("mouseover", function () {
          let darkness = Number(square.dataset.darkness);

          if (darkness < 10) {
            darkness++;
            square.dataset.darkness = darkness;
          }

          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);

          const factor = 1 - darkness / 10;

          square.style.backgroundColor = `rgb(
            ${r * factor},
            ${g * factor},
            ${b * factor}
          )`;
        });

        container.appendChild(square);
      }
    }

    button.addEventListener("click", function () {
      let size = prompt("Enter the number of squares on each side, up to a maximum of 100.");

      size = Number(size);

      if (size > 0 && size <= 100) {
        createGrid(size);
      } else {
        alert("Please enter number from 1 to 100.");
      }
    });

    createGrid(16);