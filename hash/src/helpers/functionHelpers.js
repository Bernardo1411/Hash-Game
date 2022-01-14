// Define if it's O or X turn
export const change = (val, status) => {
  let value = val;
  let stato = status;

  if (value === "-") {
    value = status ? "X" : "O";
    stato = !status;
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
    status: Math.round(Math.random()),
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
