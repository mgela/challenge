
exports.findWords = (digits)=> {
  digits = digits.split("");
  //hardcode 0 and 1
  const keyPad = {
    "0": [""],
    "1": [""],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  //emtpy string so first pass populates with first digits[keyPad]
  let combinations = [""];

  digits.forEach(digit => {
    let tempArray = [];
    let letters = keyPad[digit];
    letters.forEach(letter => {
      combinations.forEach(combination => {
        tempArray.push(combination + letter);
      });
    });
    combinations = tempArray;
  });

  return combinations;
}
