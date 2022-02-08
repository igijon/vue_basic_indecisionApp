

//Nombre que le damos al test-suite. Dentro vamos a tener una función.
describe('Example Component', () => {
  //Dentro de aquí haremos las pruebas asociadas a este componente
  //Cada test es una prueba y su objetivo es hacer una evaluación pequeña
  test( 'Debe ser mayor a 10', () => {
    
    //Esta función podría ser asíncrona en un momento determinado, aún no.

    //Preparar
    let value = 5  //Como es un ejemplo, esto va a ser el sujeto de pruebas

    //Estímulo
    value = value + 2

    //Observar el resultado
    if ( value > 10 ) {
      //TODO: todo bien
    } else {
      throw `${ value } no es mayor a 10`
    }
  })
})

//para ejecutar yarn test:unit
//Saltará el error porque 7 no es mayor a 10