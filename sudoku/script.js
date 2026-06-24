const grid = document.getElementById("grid");

const puzzle = [
  [5,3,"","",7,"","","",""],
  [6,"","",1,9,5,"","",""],
  ["",9,8,"","","","",6,""],
  [8,"","","",6,"","","",3],
  [4,"","",8,"",3,"","",1],
  [7,"","","",2,"","","",6],
  ["",6,"","","","",2,8,""],
  ["","","",4,1,9,"","",5],
  ["","","","",8,"","",7,9]
];

let board = JSON.parse(JSON.stringify(puzzle));

// Create grid
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    const input = document.createElement("input");

    if (puzzle[i][j] !== "") {
      input.value = puzzle[i][j];
      input.disabled = true;
      input.classList.add("fixed");
    } else {
      input.classList.add("user");

      input.addEventListener("input", (e) => {
        handleInput(i, j, e.target.value, input);
      });
    }

    grid.appendChild(input);
  }
}

function handleInput(row, col, value, input) {
  input.classList.remove("error");

  if (!/^[1-9]?$/.test(value)) {
    input.value = "";
    return;
  }

  if (value === "" || isValid(row, col, value)) {
    board[row][col] = value;
  } else {
    input.classList.add("error");
  }
}

function isValid(row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == num) return false;
    if (board[i][col] == num) return false;
  }

  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] == num) return false;
    }
  }

  return true;
}

function checkWin() {
  for (let row of board) {
    for (let cell of row) {
      if (cell === "") {
        alert("Incomplete!");
        return;
      }
    }
  }
  alert("🎉 You Win!");
}

function resetGame() {
  location.reload();
}