

//Nombre que le damos al test-suite. Dentro vamos a tener una función.
describe('Example Component', () => {
  //Dentro de aquí haremos las pruebas asociadas a este componente
  //Cada test es una prueba y su objetivo es hacer una evaluación pequeña
  test( 'Debe ser mayor a 10', () => {
    
    //Esta función podría ser asíncrona en un momento determinado, aún no.

    //Preparar
    let value = 9  //Como es un ejemplo, esto va a ser el sujeto de pruebas

    //Estímulo
    value = value + 2

    //Observar el resultado
    expect( value ).toBeGreaterThan( 10 )
    //Ahora al ejecutarlo (yarn test:unit) tengo más información, me indica lo que expero y lo que recibo.
  })
})

//para ejecutar yarn test:unit
//Saltará el error porque 7 no es mayor a 10

//jest me facilitará todo esto, esto es sólo un ejemplo
//https://jestjs.io/
//https://jestjs.io/docs/expect
