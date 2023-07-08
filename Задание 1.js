let a=+prompt('введите значение')
if (typeof a !== 'number' || isNaN (a)){
  console.log ('упс, кажется, вы ошиблись');
} else if ( a % 2===0) {
  console.log ('четное')
} else {
  console.log ('нечетное')
}
