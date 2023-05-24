// массив исходных данных
var data = [
  [ 1, 2, 3, 4],
  [ 5, 6, 7, 8],
  [ 9, 10, 11, 12],
  [13, 14, 0, 15]
  ];
  
  // перемешивание данных для начала игры
  for(var i = 0; i < data.length; i++) {
  for(var j = 0; j < data[i].length; j++) {
  var newI = Math.floor(Math.random() * data.length);
  var newJ = Math.floor(Math.random() * data[i].length);
  
  var temp = data[i][j];
  data[i][j] = data[newI][newJ];
  data[newI][newJ] = temp;
  }
  }
  
  // отрисовка данных на странице
  function render() {
  for(var i = 0; i < data.length; i++) {
  for(var j = 0; j < data[i].length; j++) {
  var value = data[i][j];
  var cell = document.getElementById((i+1) + "" + (j+1));
  
  cell.innerHTML = value;
  
  if(value === 0) {
  cell.style.backgroundColor = "white";
  } else {
  cell.style.backgroundColor = "gray";
  }
  }
  }
  }
  
  // проверка победы
  function checkWin() {
  for(var i = 0; i < data.length; i++) {
  for(var j = 0; j < data[i].length; j++) {
  if(data[i][j] !== i*4 + j + 1) {
  return false;
  }
  }
  }
  
  return true;
  }
  
  // функция перехода клетки в пустую ячейку
  function move(row, col) {
  // проверка возможности хода
  if(col > 0 && data[row][col-1] === 0) {
  var temp = data[row][col];
  data[row][col] = data[row][col-1];
  data[row][col-1] = temp;
  
  render();
  
  if(checkWin()) {
  document.body.classList.add("win");
  }
  }
  if(col < data[row].length-1 && data[row][col+1] === 0) {
  var temp = data[row][col];
  data[row][col] = data[row][col+1];
  data[row][col+1] = temp;
  
  render();
  
  if(checkWin()) {
  document.body.classList.add("win");
  }
  }
  if(row > 0 && data[row-1][col] === 0) {
  var temp = data[row][col];
  data[row][col] = data[row-1][col];
  data[row-1][col] = temp;
  
  render();
  
  if(checkWin()) {
  document.body.classList.add("win");
  }
  }
  if(row < data.length-1 && data[row+1][col] === 0) {
  var temp = data[row][col];
  data[row][col] = data[row+1][col];
  data[row+1][col] = temp;
  
  render();
  
  if(checkWin()) {
  document.body.classList.add("win");
  }
  }
  }
  
  // присваивание функций клику на ячейку
  for(var i = 0; i < data.length; i++) {
  for(var j = 0; j < data[i].length; j++) {
  var cell = document.getElementById((i+1) + "" + (j+1));
  
  cell.addEventListener("click", (function(row, col) {
  return function() {
  move(row, col);
  };
  })(i, j));
  }
  }
  
  // отрисовка данных на странице при загрузке
  render();