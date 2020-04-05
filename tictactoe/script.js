const Gameboard = (() => {
  let gameboard = [];
  for (var i = 0; i <= 9; i++) {
    gameboard.push("");
  }
  var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ];
  const getContent = (s) => {
    const index = parseInt(s);
    if (index < 10 && index > 0) {
      return gameboard[index];
    } else {
      return "";
    }
  };
  const setContent = (counter, index) => {
    if (counter % 2 === 0) {
      gameboard[index] = "X";
    } else {
      gameboard[index] = "O";
    }
    return;
  };
  const checkWinner = (sign) => {
    for (let i = 0; i < array.length; i++) {
      if (gameboard[array[i][0]] === sign) {
        let flag = 0;
        for (let j = 0; j < array[i].length; j++) {
          if (gameboard[array[i][j]] !== sign) {
            flag = 1;
          }
        }
        if (flag === 0) return true;
      }
    }
    return 0;
  };
  return {
    getContent,
    setContent,
    checkWinner,
  };
})();

const playerFactory = (name, sign) => {
  const score = 0;
  const getSign = () => sign;
  const getName = () => name;
  const getScore = () => score;
  const checkWin = () => {
    return Gameboard.checkWinner(sign);
  };
  return {
    getSign,
    getName,
    getScore,
    checkWin,
  };
};

const displayController = (() => {
  const gamePad = document.querySelector(".gamepad");
  const render = () => {
    for (let i = 1; i < 10; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("id", `${i}`);
      box.innerHTML = Gameboard.getContent(i);
      gamePad.appendChild(box);
    }
  };
  const update = () => {
    const box = document.querySelectorAll(".box");
    let i = 1;
    box.forEach((box) => {
      box.innerHTML = Gameboard.getContent(i);
      i++;
    });
  };
  const name = (name) => {
    const player = document.querySelector(".player");
  };
  return {
    render,
    update,
  };
})();

function getInput(s = "0") {
  let str = `player${s}`;
  const playerName = prompt(`Enter the name of ${str}`, str);
  return playerName;
}

function game() {
  displayController.render();
  let player1 = playerFactory(getInput(), "X");
  let player2 = playerFactory(getInput(), "O");
  let box = document.querySelectorAll(".box");
  let counter = 1;
  box.forEach((box) => {
    box.addEventListener("click", (e) => {
      let index = e.toElement.id;
      if (Gameboard.getContent(index) === "") {
        counter++;
        Gameboard.setContent(counter, index);
        displayController.update();
      } else {
        alert("Wrong Spot!");
      }
      if (player1.checkWin()) {
        alert(`${player1.getName()} Wins!`);
      }
      if (player2.checkWin()) {
        alert(`${player2.getName()} Wins!`);
      }
    });
  });
}
game();
