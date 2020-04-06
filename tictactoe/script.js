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
  const reset = () => {
    for (var i = 0; i <= 9; i++) {
      gameboard[i] = "";
      displayController.update();
    }
  }
  return {
    getContent,
    setContent,
    checkWinner,
    reset,
  };
})();

const playerFactory = (name, sign) => {
  let score = 0;
  const getSign = () => sign;
  const getName = () => name;
  const getScore = () => score;
  const checkWin = () => {
    if (Gameboard.checkWinner(sign)) score++;
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
      const gamebox = document.createElement("div");
      gamebox.classList.add("gamebox");
      gamebox.setAttribute("id", `${i}`);
      gamebox.innerHTML = Gameboard.getContent(i);
      gamePad.appendChild(gamebox);
    }
  };
  const update = () => {
    const gamebox = document.querySelectorAll(".gamebox");
    let i = 1;
    gamebox.forEach((gamebox) => {
      gamebox.innerHTML = Gameboard.getContent(i);
      i++;
    });
  };
  const updatePlayer = (player) => {
    let sign = player.getSign();

    if (sign === 'X') {
      const name = document.querySelector('.name1');
      name.innerHTML = player.getName();
      const score = document.querySelector('.score1');
      score.innerHTML = "Score : " + player.getScore();
    } else {
      const name = document.querySelector('.name2');
      name.innerHTML = player.getName();
      const score = document.querySelector('.score2');
      score.innerHTML = "Score : " + player.getScore();
    }
  };
  return {
    render,
    update,
    updatePlayer,
  };
})();

function game() {
  displayController.render();

  function getInput(s) {
    let str = "player" + s;
    const playerName = prompt(`Enter the name of ${str}`, str);
    return playerName;
  }

  let player1 = playerFactory(getInput("X"), "X");
  displayController.updatePlayer(player1);
  let player2 = playerFactory(getInput("O"), "O");
  displayController.updatePlayer(player2);
  let gamebox = document.querySelectorAll(".gamebox");
  let counter = 1;
  const result = document.querySelector('.result');
  result.innerHTML = `${player1.getName()}'s turn`;
  result.style.cssText = "background-color:indigo;";
  gamebox.forEach((gamebox) => {
    gamebox.addEventListener("click", (e) => {
      let index = e.toElement.id;
      if (Gameboard.getContent(index) === "") {
        counter++;
        Gameboard.setContent(counter, index);
        if (counter % 2 == 1) {
          result.innerHTML = `${player1.getName()}'s turn`;
          result.style.cssText = "background-color:indigo;";
        } else {
          result.innerHTML = `${player2.getName()}'s turn`;
          result.style.cssText = "background-color:red;";
        }
        if (counter === 10) {
          Gameboard.reset();
          result.innerHTML = "Resetting the game!";
          result.style.cssText = "background-color:gold";
          counter = 1;
        }
        displayController.update();
      } else {
        result.innerHTML = "THAT BOX IS TAKEN!";
      }
      if (player1.checkWin()) {
        result.innerHTML = `${player1.getName()} WINS!`;
        result.style.cssText = "background-color:gold;";
        counter = 1;
        displayController.updatePlayer(player1);
        Gameboard.reset();
      }
      if (player2.checkWin()) {
        result.innerHTML = `${player1.getName()} WINS!`;
        result.style.cssText = "background-color:gold;";
        counter = 1;
        displayController.updatePlayer(player2);
        Gameboard.reset();
      }
    });
  });
}
game();