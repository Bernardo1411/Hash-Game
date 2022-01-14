// Indicates if computer should play on one of the lines
export const playOnLine = (actualStatetArray) => {
  let sum = 0;
  let emptySpotId = 0;
  let isFirstTime = true;

  for (let i = 0; i < 7; i += 3) {
    sum = 0;
    for (let j = i + 1; j < i + 3; j++) {
      if (
        actualStatetArray[i] === actualStatetArray[j] &&
        actualStatetArray[i] !== "-"
      )
        ++sum;
      if (
        actualStatetArray[i] !== actualStatetArray[j] &&
        actualStatetArray[i] !== "-" &&
        actualStatetArray[j] !== "-"
      )
        sum = -2;
      if (actualStatetArray[j] === "-" && isFirstTime) {
        emptySpotId = j;
        isFirstTime = false;
      }
    }
    isFirstTime = true;
    if (sum === 1 && actualStatetArray[emptySpotId] === "-")
      return { sum, emptySpotId };
  }
};

export const playOnLineReverse = (actualStatetArray) => {
  let sum = 0;
  let emptySpotId = 0;
  let isFirstTime = true;

  for (let i = 8; i > 1; i -= 3) {
    sum = 0;
    for (let j = i - 1; j > i - 3; j--) {
      if (
        actualStatetArray[i] === actualStatetArray[j] &&
        actualStatetArray[i] !== "-"
      )
        ++sum;
      if (
        actualStatetArray[i] !== actualStatetArray[j] &&
        actualStatetArray[i] !== "-" &&
        actualStatetArray[j] !== "-"
      )
        sum = -2;
      if (actualStatetArray[j] === "-" && isFirstTime) {
        emptySpotId = j;
        isFirstTime = false;
      }
    }
    isFirstTime = true;
    if (sum === 1 && actualStatetArray[emptySpotId] === "-")
      return { sum, emptySpotId };
  }
};

// Indicates if computer should play on one of the columns
export const playOnColumn = (actualStatetArray) => {
  let sum = 0;
  let emptySpotId = 0;
  let isFirstTime = true;

  for (let i = 0; i < 3; i++) {
    sum = 0;
    for (let j = 3 + i; j < i + 7; j += 3) {
      if (
        actualStatetArray[i] === actualStatetArray[j] &&
        actualStatetArray[i] !== "-"
      )
        ++sum;
      if (
        actualStatetArray[i] !== actualStatetArray[j] &&
        actualStatetArray[i] !== "-" &&
        actualStatetArray[j] !== "-"
      )
        sum = -2;
      if (actualStatetArray[j] === "-" && isFirstTime) {
        emptySpotId = j;
        isFirstTime = false;
      }
    }
    isFirstTime = true;
    if (sum === 1 && actualStatetArray[emptySpotId] === "-")
      return { sum, emptySpotId };
  }
};

export const playOnColumnReverse = (actualStatetArray) => {
  let sum = 0;
  let emptySpotId = 0;
  let isFirstTime = true;

  for (let i = 8; i > 0; i--) {
    sum = 0;
    for (let j = i - 3; j > i - 7; j -= 3) {
      if (
        actualStatetArray[i] === actualStatetArray[j] &&
        actualStatetArray[i] !== "-"
      )
        ++sum;
      if (
        actualStatetArray[i] !== actualStatetArray[j] &&
        actualStatetArray[i] !== "-" &&
        actualStatetArray[j] !== "-"
      )
        sum = -2;
      if (actualStatetArray[j] === "-" && isFirstTime) {
        emptySpotId = j;
        isFirstTime = false;
      }
    }
    isFirstTime = true;
    if (sum === 1 && actualStatetArray[emptySpotId] === "-")
      return { sum, emptySpotId };
  }
};

// Indicates if computer should play on the main diagonal
export const playOnMainDiagonal = (actualStatetArray) => {
  let sum = 0;
  let emptySpotId = 0;

  for (let j = 4; j < 9; j += 4) {
    if (
      actualStatetArray[0] === actualStatetArray[j] &&
      actualStatetArray[0] !== "-"
    )
      ++sum;
    if (
      actualStatetArray[0] !== actualStatetArray[j] &&
      actualStatetArray[0] !== "-" &&
      actualStatetArray[j] !== "-"
    )
      sum = -2;
    if (actualStatetArray[j] === "-") emptySpotId = j;
  }

  return { sum, emptySpotId };
};

// Indicates if computer should play on the secondary diagonal
export const playOnSecondaryDiagonal = (actualStatetArray) => {
  let sum = 0;
  let emptySpotId = 0;

  for (let j = 4; j < 7; j += 2) {
    if (
      actualStatetArray[2] === actualStatetArray[j] &&
      actualStatetArray[2] !== "-"
    )
      ++sum;
    if (
      actualStatetArray[2] !== actualStatetArray[j] &&
      actualStatetArray[2] !== "-" &&
      actualStatetArray[j] !== "-"
    )
      sum = -2;
    if (actualStatetArray[j] === "-") emptySpotId = j;
  }

  return { sum, emptySpotId };
};

export const playOnSecondaryDiagonalReverse = (actualStatetArray) => {
  let sum = 0;
  let emptySpotId = 0;

  for (let j = 4; j > 1; j -= 2) {
    if (
      actualStatetArray[6] === actualStatetArray[j] &&
      actualStatetArray[6] !== "-"
    )
      ++sum;
    if (
      actualStatetArray[6] !== actualStatetArray[j] &&
      actualStatetArray[6] !== "-" &&
      actualStatetArray[j] !== "-"
    )
      sum = -2;
    if (actualStatetArray[j] === "-") emptySpotId = j;
  }

  return { sum, emptySpotId };
};

export const isFullHash = (actualStatetArray) => {
  return actualStatetArray
    .map((block) => (block !== "-" ? 1 : 0))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};
