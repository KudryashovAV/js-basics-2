function isEven(number) {
  number = Math.abs(number);
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  }
  return isEven(number - 2);
}

function pascal(row, col) {
  if (row < col) {
    return undefined;
  } else if (col < 1 || row < 1 || row == col) {
    return 1;
  } else {
    return pascal((row - 1), (col - 1)) + pascal((row - 1), col)
  }
}


function sqrt(x) {
  return (sqrtIter(1.0, x))
}

function sqrtIter(guess, x) {
  var new_guess = improve(guess, x)
  if (isGoodEnough(guess, new_guess)) {
    return new_guess;
  } else {
    return sqrtIter(new_guess, x)
  }
}

function improve(guess, x) {
  return average(guess, (x / guess))
}

function average(x, y) {
  return (x + y) / 2;
}

function isGoodEnough(guess, new_guess) {
  if ((Math.abs(guess - new_guess))/guess <= 0.0001) {
  return true
  }
}


function square(x) {
  return x * x;
}


module.exports.isEven = isEven;
module.exports.pascal = pascal;
module.exports.sqrt = sqrt;
