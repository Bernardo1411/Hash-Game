export const change = (val, status) => {
  let value = val;
  let stato = status;

  if (value === "-") {
    value = status ? "X" : "O";
    stato = status ? false : true;
  }

  return { value, stato };
};

export const stateNewContent = (state, id) => {
  const [listBlocks] = [state.blocks];
  let val = null;

  const [actualBlock] = listBlocks.filter((block) => block.id === id);
  val = change(actualBlock.value, state.status);
  listBlocks[actualBlock.id].value = val.value;
  return { listBlocks, val };
};

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
