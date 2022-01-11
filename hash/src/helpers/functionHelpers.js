export const change = (val, status) => {
  let value = val;
  let stato = status;

  if (value === "-") {
    value = status ? "X" : "O";
    stato = status ? false : true;
  }

  return { value, stato };
};
