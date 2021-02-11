// pair programming with Liam Butler
const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  } else {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    const modifiedArr = transpose(letters);
    const modifiedArrMap = modifiedArr.map((ls) => ls.join(""));
    if (horizontalJoin.includes(word) || modifiedArrMap.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
};

const transpose = function (matrix) {
  let array = [];
  for (let row = 0; row < matrix[0].length; row++) {
    let rowArray = [];
    for (let column = 0; column < matrix.length; column++) {
      rowArray.push(matrix[column][row]);
    }
    array.push(rowArray);
  }
  return array;
};

module.exports = wordSearch;
