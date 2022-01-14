// Check if one of the lines was completed by one of the players
export const isLineCompleted = (actualStatetArray) => {
  let sum = 0;

  for (let i = 0; i < 7; i += 3) {
    sum = 0;
    for (let j = i + 1; j < i + 3; j++) {
      if (
        actualStatetArray[i] === actualStatetArray[j] &&
        actualStatetArray[i] !== "-"
      ) {
        ++sum;
        if (sum === 2) return sum;
      }
    }
  }
};

// Check if one of the columns was completed by one of the players
export const isColumnCompleted = (actualStatetArray, isComputerTurn) => {
  let sum = 0;

  for (let i = 0; i < 3; i++) {
    sum = 0;
    for (let j = 3 + i; j < i + 7; j += 3) {
      if (
        actualStatetArray[i] === actualStatetArray[j] &&
        actualStatetArray[i] !== "-"
      ) {
        ++sum;
        if (sum === 2) return sum;
      }
    }
  }
};

// Check if the main diagonal was completed by one of the players
export const isMainDiagonalCompleted = (actualStatetArray) => {
  let sum = 0;

  for (let j = 4; j < 9; j += 4) {
    if (
      actualStatetArray[0] === actualStatetArray[j] &&
      actualStatetArray[0] !== "-"
    ) {
      ++sum;
      if (sum === 2) return sum;
    }
  }
};

// Check if the secondary diagonal was completed by one of the players
export const isSecondaryDiagonalCompleted = (actualStatetArray) => {
  let sum = 0;

  for (let j = 4; j < 7; j += 2) {
    if (
      actualStatetArray[2] === actualStatetArray[j] &&
      actualStatetArray[2] !== "-"
    ) {
      ++sum;
      if (sum === 2) return sum;
    }
  }
};
