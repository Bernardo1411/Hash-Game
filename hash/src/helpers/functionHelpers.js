// Define if it's O or X turn
export const change = (val, status) => {
  let value = val;
  let stato = status;

  if (value === "-") {
    value = status ? "X" : "O";
    stato = status ? false : true;
  }

  return { value, stato };
};

// update the state, defining if it's O or X turn, and attribute new values to the block array
export const stateNewContent = (state, id) => {
  const [listBlocks] = [state.blocks];
  let val = null;

  const [actualBlock] = listBlocks.filter((block) => block.id === id);
  val = change(actualBlock.value, state.status);
  listBlocks[actualBlock.id].value = val.value;
  return { listBlocks, val };
};

// initialize or update the state with the initial values
export const initializingState = () => {
  const initialState = {
    blocks: [
      { value: "-", id: 0 },
      { value: "-", id: 1 },
      { value: "-", id: 2 },
      { value: "-", id: 3 },
      { value: "-", id: 4 },
      { value: "-", id: 5 },
      { value: "-", id: 6 },
      { value: "-", id: 7 },
      { value: "-", id: 8 },
    ],
    status: true,
    end: false,
  };

  return {
    blocks: [
      ...initialState.blocks.map((block) => {
        return { ...block };
      }),
    ],
    status: initialState.status,
    end: initialState.end,
  };
};

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
export const isColumnCompleted = (actualStatetArray) => {
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
