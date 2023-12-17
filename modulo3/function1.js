
//function expression // só é executada se sua chamada for abaixo de sua criação.
const showFood = function() {
    console.log('Pizza')
}

sayHi();
showFood();

//função declarativa -- Host -- Mesmo estando abaixo da sua chamada, o javaScript 'puxa' ela pra cima e permite executar normalmente
function sayHi() {
    console.log('Hi')
}
