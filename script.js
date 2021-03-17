loadValuesEasy();
/*loadValuesExtreme();*/
/*loadValuesHard();*/

function loadValuesHard() {
  loadValue(0, 0, 1);
  loadValue(0, 2, 8);
  loadValue(0, 8, 3);
  loadValue(1, 2, 7);
  loadValue(1, 3, 8);
  loadValue(2, 2, 3);
  loadValue(2, 3, 4);
  loadValue(2, 4, 5);
  loadValue(2, 7, 6);
  loadValue(3, 0, 2);
  loadValue(3, 4, 3);
  loadValue(4, 8, 4);
  loadValue(5, 0, 7);
  loadValue(5, 7, 2);
  loadValue(6, 1, 5);
  loadValue(7, 3, 9);
  loadValue(7, 4, 2);
  loadValue(7, 6, 6);
  loadValue(7, 7, 4);
  loadValue(8, 3, 6);
  loadValue(8, 7, 1);
  loadValue(8, 8, 8);
}

function loadValuesEasy() {
  loadValue(0, 0, 6);
  loadValue(0, 2, 9);
  loadValue(0, 4, 7);
  loadValue(1, 2, 8);
  loadValue(1, 3, 6);
  loadValue(1, 4, 5);
  loadValue(1, 5, 3);
  loadValue(1, 7, 1);
  loadValue(2, 1, 5);
  loadValue(2, 2, 1);
  loadValue(2, 8, 7);
  loadValue(3, 0, 2);
  loadValue(3, 3, 1);
  loadValue(3, 4, 6);
  loadValue(3, 5, 5);
  loadValue(3, 7, 4);
  loadValue(4, 0, 4);
  loadValue(4, 3, 2);
  loadValue(4, 5, 9);
  loadValue(4, 8, 1);
  loadValue(5, 1, 3);
  loadValue(5, 3, 4);
  loadValue(5, 4, 8);
  loadValue(5, 5, 7);
  loadValue(5, 8, 5);
  loadValue(6, 0, 9);
  loadValue(6, 6, 8);
  loadValue(6, 7, 5);
  loadValue(7, 1, 1);
  loadValue(7, 3, 5);
  loadValue(7, 4, 9);
  loadValue(7, 5, 6);
  loadValue(7, 6, 2);
  loadValue(8, 4, 2);
  loadValue(8, 6, 1);
  loadValue(8, 8, 6);
}
function loadValuesExtreme() {
  loadValue(0, 2, 4);
  loadValue(0, 3, 8);
  loadValue(0, 6, 9);
  loadValue(1, 0, 7);
  loadValue(1, 1, 9);
  loadValue(1, 3, 1);
  loadValue(1, 4, 3);
  loadValue(1, 8, 6);
  loadValue(2, 0, 8);
  loadValue(2, 5, 9);
  loadValue(3, 7, 4);
  loadValue(4, 0, 6);
  loadValue(4, 3, 2);
  loadValue(4, 5, 7);
  loadValue(4, 8, 1);
  loadValue(5, 1, 4);
  loadValue(6, 3, 7);
  loadValue(6, 8, 9);
  loadValue(7, 0, 3);
  loadValue(7, 4, 5);
  loadValue(7, 5, 1);
  loadValue(7, 7, 2);
  loadValue(7, 8, 7);
  loadValue(8, 2, 1);
  loadValue(8, 5, 8);
  loadValue(8, 6, 5);
}
function loadValue(row, column, cellVal) {
  document.getElementById("cell-" + row + "-" + column).value = cellVal;
}

function getUICellValue(row, col) {
  if (
    parseInt(document.getElementById("cell-" + row + "-" + col).value) >= 1 &&
    parseInt(document.getElementById("cell-" + row + "-" + col).value) <= 9
  ) {
    return parseInt(document.getElementById("cell-" + row + "-" + col).value);
  } else {
    if (
      Number.isNaN(
        parseInt(document.getElementById("cell-" + row + "-" + col).value)
      )
    ) {
      return 0;
    }
  }
  return parseInt(document.getElementById("cell-" + row + "-" + col).value);
}

function fillPuzzle(realArr) {
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      //if empty cell
      if (
        Number.isNaN(
          parseInt(document.getElementById("cell-" + r + "-" + c).value)
        )
      ) {
        loadValue(r, c, realArr[r][c]);
        document
          .getElementById("cell-" + r + "-" + c)
          .classList.add("blue-text");
      }
    }
  }
}

function calcPossibleValues(row, col, realArr) {
  var possibleVals = [];
  if (row >= 0 && row <= 2 && col >= 0 && col <= 2) {
    possibleVals = subGridScanner(0, 2, 0, 2, row, col, realArr);
  } else if (row >= 0 && row <= 2 && col >= 3 && col <= 5) {
    possibleVals = subGridScanner(0, 2, 3, 5, row, col, realArr);
  } else if (row >= 0 && row <= 2 && col >= 6 && col <= 8) {
    possibleVals = subGridScanner(0, 2, 6, 8, row, col, realArr);
  } else if (row >= 3 && row <= 5 && col >= 0 && col <= 2) {
    possibleVals = subGridScanner(3, 5, 0, 2, row, col, realArr);
  } else if (row >= 3 && row <= 5 && col >= 3 && col <= 5) {
    possibleVals = subGridScanner(3, 5, 3, 5, row, col, realArr);
  } else if (row >= 3 && row <= 5 && col >= 6 && col <= 8) {
    possibleVals = subGridScanner(3, 5, 6, 8, row, col, realArr);
  } else if (row >= 6 && row <= 8 && col >= 0 && col <= 2) {
    possibleVals = subGridScanner(6, 8, 0, 2, row, col, realArr);
  } else if (row >= 6 && row <= 8 && col >= 3 && col <= 5) {
    possibleVals = subGridScanner(6, 8, 3, 5, row, col, realArr);
  } else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    possibleVals = subGridScanner(6, 8, 6, 8, row, col, realArr);
  }

  possibleVals = rowScanner(row, possibleVals, realArr);
  possibleVals = colScanner(col, possibleVals, realArr);
  possibleVals.unshift(row, col);

  return possibleVals;
}
function subGridScanner(rlow, rhigh, clow, chigh, row, col, realArr) {
  var notVals = [];
  for (var r = rlow; r <= rhigh; r++) {
    for (var c = clow; c <= chigh; c++) {
      if (c === col && r === row) {
        continue;
      } else {
        var temp = realArr[r][c];
        if (temp !== 0) {
          notVals.push(temp);
        }
      }
    }
  }

  return filterArray(notVals);
}

function checkNewInput(row, col, input, realArr) {
  var rlow = 0;
  var rhigh = 0;
  var clow = 0;
  var chigh = 0;

  if (row >= 0 && row <= 2 && col >= 0 && col <= 2) {
    rlow = 0;
    rhigh = 2;
    clow = 0;
    chigh = 2;
  } else if (row >= 0 && row <= 2 && col >= 3 && col <= 5) {
    rlow = 0;
    rhigh = 2;
    clow = 3;
    chigh = 5;
  } else if (row >= 0 && row <= 2 && col >= 6 && col <= 8) {
    rlow = 0;
    rhigh = 2;
    clow = 6;
    chigh = 8;
  } else if (row >= 3 && row <= 5 && col >= 0 && col <= 2) {
    rlow = 3;
    rhigh = 5;
    clow = 0;
    chigh = 2;
  } else if (row >= 3 && row <= 5 && col >= 3 && col <= 5) {
    rlow = 3;
    rhigh = 5;
    clow = 3;
    chigh = 5;
  } else if (row >= 3 && row <= 5 && col >= 6 && col <= 8) {
    rlow = 3;
    rhigh = 5;
    clow = 6;
    chigh = 8;
  } else if (row >= 6 && row <= 8 && col >= 0 && col <= 2) {
    rlow = 6;
    rhigh = 8;
    clow = 0;
    chigh = 2;
  } else if (row >= 6 && row <= 8 && col >= 3 && col <= 5) {
    rlow = 6;
    rhigh = 8;
    clow = 3;
    chigh = 5;
  } else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    rlow = 6;
    rhigh = 8;
    clow = 6;
    chigh = 8;
  }
  for (var r = rlow; r <= rhigh; r++) {
    for (var c = clow; c <= chigh; c++) {
      if (realArr[r][c] === input) {
        if (row !== r && col !== c) {
          return "conflict";
        }
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    if (realArr[row][i] === input) {
      if (i !== col) {
        return "conflict";
      }
    }
  }
  for (var j = 0; j < 9; j++) {
    if (realArr[j][col] === input) {
      if (j !== row) {
        return "conflict";
      }
    }
  }
  return 1;
}

function filterArray(notVals, possibleVals = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  for (var i = 0; i < notVals.length; i++) {
    //check to see if notvals[i] is in possiblevals array
    //then delete any entries from possiblevals array
    for (var j = 0; j < possibleVals.length; j++) {
      if (notVals[i] === possibleVals[j]) {
        possibleVals.splice(possibleVals.indexOf(notVals[i]), 1);
      }
    }
  }
  possibleVals.sort();
  return possibleVals;
}
function rowScanner(row, possibleVals = [1, 2, 3, 4, 5, 6, 7, 8, 9], realArr) {
  var notVals = [];
  for (var i = 0; i < 9; i++) {
    if (realArr[row][i] !== 0) {
      notVals.push(realArr[row][i]);
    }
  }
  return filterArray(notVals, possibleVals);
}

function colScanner(col, possibleVals = [1, 2, 3, 4, 5, 6, 7, 8, 9], realArr) {
  var notVals = [];
  for (var i = 0; i < 9; i++) {
    if (realArr[i][col] !== 0) {
      notVals.push(realArr[i][col]);
    }
  }
  return filterArray(notVals, possibleVals);
}

function buildRealArray() {
  var realArray = [];
  for (var r = 0; r < 9; r++) {
    realArray.push([]);
    for (var c = 0; c < 9; c++) {
      realArray[r].push(getUICellValue(r, c));
    }
  }
  return realArray;
}

function buildPossibleValuesArray(realArr) {
  var row = 0;
  var col = 0;
  var possiblesArray = [];
  do {
    if (realArr[row][col] === 0) {
      let temp = calcPossibleValues(row, col, realArr); //returns all the possible values for a cell and the row/col index
      if (temp !== undefined) {
        possiblesArray.push(temp);
      }
    }
    if (col < 8) {
      col++;
    } else {
      col = 0;
      row++;
    }
  } while (row < 9);
  return possiblesArray;
}

function updateArrays(possibleValues, realArr) {
  //finds all 'solved' cells, adds those cells to real array, generates new cleaned-up array for possible values, returns 'conflict' is a cell has no possible values. if no conflict found, returns updated possibleArr and realArr
  var tempRealArr = realArr;
  var newPosArr = [];
  for (var i = 0; i < possibleValues.length; i++) {
    if (possibleValues[i].length > 3) {
      newPosArr.push(possibleValues[i]);
    } else if (possibleValues[i].length === 3) {
      realArr[possibleValues[i][0]].splice(
        possibleValues[i][1],
        1,
        possibleValues[i][2]
      );
    } else {
      return "conflict";
    }
  }
  return {
    possiblesArray: newPosArr,
    realArray: realArr,
  };
}

function checkArray(newPossibles) {
  for (var i = 0; i < newPossibles.length; i++) {
    if (newPossibles[i].length <= 2) {
      return "conflict";
    }
  }

  return 1;
}

function conflictCheck(possibleArr, realArr) {
  var funcount = 0;
  var conflictIndex;
  var newPossibles;
  var check;
  var victoryTree = [];

  for (var i = 0; i < possibleArr.length; i++) {
    victoryTree.push([]); //to record where conflicts are occuring
  }

  for (var i = 0; i < possibleArr.length; i++) {
    //i < possibleArr.length
    funcount++;

    conflictIndex = victoryTree[i].length + 2; //will likely need to be victorytree.length + 2

    if (i < 0) {
      i = 0;
    }

    //check to see if current branch is exhausted, move up victory tree
    if (possibleArr[i].length === victoryTree[i].length + 2) {
      victoryTree[i - 1].push("X");

      //set current indexvalue to zero, going to move back one spot
      realArr[possibleArr[i][0]].splice(possibleArr[i][1], 1, 0);
      //clear all below it
      victoryTree[i] = [];
      //set i - 2, will add 1 at the end of the loop, resulting in i - 1
      i = i - 2;
      continue;
    }

    //checks to see if the new input doesn't conflict against any existing numbers
    check = checkNewInput(
      possibleArr[i][0],
      possibleArr[i][1],
      possibleArr[i][victoryTree[i].length + 2],
      realArr
    );

    if (check === 1) {
      realArr[possibleArr[i][0]].splice(
        possibleArr[i][1],
        1,
        possibleArr[i][victoryTree[i].length + 2]
      );
      //build possiblevals from updated realarr
      newPossibles = buildPossibleValuesArray(realArr);
      //checks newpossibles for conflicts
      check = checkArray(newPossibles);
    }

    //check newpossibles for errors

    while (check === "conflict") {
      funcount++;
      victoryTree[i].push("X");
      conflictIndex = victoryTree[i].length + 2;
      if (possibleArr[i][conflictIndex] === undefined) {
        //set current indexvalue to zero, going to move back one spot
        realArr[possibleArr[i][0]].splice(possibleArr[i][1], 1, 0);
        //if we move i up the victorytree, need to clear all victory tree below it
        victoryTree[i] = [];
        //if all values of current branch are exhausted, mark the branch above to more over one location
        victoryTree[i - 1].push("X");
        i = i - 2;
        break;
      }

      check = checkNewInput(
        possibleArr[i][0],
        possibleArr[i][1],
        possibleArr[i][victoryTree[i].length + 2],
        realArr
      );

      if (check === 1) {
        realArr[possibleArr[i][0]].splice(
          possibleArr[i][1],
          1,
          possibleArr[i][conflictIndex]
        );

        //build possiblevals from updated realarr
        newPossibles = buildPossibleValuesArray(realArr);

        //run updatearray with newpossibles
        check = checkArray(newPossibles);
      }
    }
  }
  return {
    realArr: realArr,
    funcount: funcount,
  };
}

function clearField() {
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      var cell = document.getElementById("cell-" + r + "-" + c);
      cell.classList.remove("blue-text");
      cell.value = "";
    }
  }
}

function checkGameBoard() {
  var totalNumCount = 0;
  var realArr = buildRealArray();
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      if (
        Number.isNaN(
          parseInt(document.getElementById("cell-" + r + "-" + c).value)
        )
      ) {
      } else {
        totalNumCount++;
        var cellValue = parseInt(
          document.getElementById("cell-" + r + "-" + c).value
        );
        var pass = checkNewInput(r, c, cellValue, realArr);
        if (pass === "conflict") {
          displayErrorMsg(
            "** Error - Input values do not produce a valid solution **"
          );
          calculateTextButtons();
          return false;
        }
      }
    }
  }

  if (totalNumCount < 17) {
    displayErrorMsg("** Error - Must have at least 17 starting numbers **");
    calculateTextButtons();
    return false;
  }
  return true;
}

function controller() {
  var startTime = new Date().getTime();
  var initiateGame = checkGameBoard();
  if (initiateGame) {
    var realArr = buildRealArray();
    var originalPossiblesArray = buildPossibleValuesArray(realArr);
    var cleanedUpPosArr = updateArrays(originalPossiblesArray, realArr);
    var finishedPuzzle = conflictCheck(
      cleanedUpPosArr.possiblesArray,
      cleanedUpPosArr.realArray
    );
    fillPuzzle(finishedPuzzle.realArr);
    calculateTextButtons();
    console.log(`Puzzle iterations tested: ${finishedPuzzle.funcount}`);
    var endTime = new Date().getTime();
    var elapsedTime = (endTime - startTime) / 1000;
    console.log(`Execution time: ${elapsedTime} seconds`);
  }
}

function calculateTextButtons() {
  var btnSolve = document.querySelector(".btn-solve");
  var btnClear = document.querySelector(".btn-clear");
  if (btnSolve.innerHTML === "SOLVE PUZZLE") {
    btnSolve.innerHTML = "CALCULATING";
  } else {
    btnSolve.innerHTML = "SOLVE PUZZLE";
  }
  btnSolve.classList.toggle("calculating-text");
  btnClear.classList.toggle("calculating-text");
}

function displayErrorMsg(msg) {
  document.querySelector(".error-msg").innerHTML = msg;
}

(function () {
  document.querySelector(".btn-solve").addEventListener("click", function () {
    displayErrorMsg("");
    calculateTextButtons();
    setTimeout(controller, 50);
  });

  document.querySelector(".btn-clear").addEventListener("click", function () {
    displayErrorMsg("");
    clearField();
  });

  document.addEventListener("keydown", function (e) {
    var x = document.activeElement.id;
    var cl = x.split("-");

    if (cl[0] === "cell") {
      if (e.keyCode === 38) {
        if (cl[1] > 0) {
          let rowtemp = parseInt(cl[1]) - 1;
          let coltemp = parseInt(cl[2]);
          document.getElementById(`cell-${rowtemp}-${coltemp}`).focus();
        }
      }
      if (e.keyCode === 40) {
        if (cl[1] < 8) {
          let rowtemp = parseInt(cl[1]) + 1;
          let coltemp = parseInt(cl[2]);
          document.getElementById(`cell-${rowtemp}-${coltemp}`).focus();
        }
      }
      if (e.keyCode === 37) {
        if (cl[2] > 0) {
          let rowtemp = parseInt(cl[1]);
          let coltemp = parseInt(cl[2]) - 1;
          document.getElementById(`cell-${rowtemp}-${coltemp}`).focus();
        }
      }
      if (e.keyCode === 39) {
        if (cl[2] < 8) {
          let rowtemp = parseInt(cl[1]);
          let coltemp = parseInt(cl[2]) + 1;
          document.getElementById(`cell-${rowtemp}-${coltemp}`).focus();
        }
      }
    }
  });
})();
