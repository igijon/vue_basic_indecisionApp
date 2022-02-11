import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Indecision component', () => {

    let wrapper
    let clgSpy

    global.fetch = jest.fn() //Estoy creando un mock para fetch
    //Lo creo en el objeto global de node que es el equivalente al 
    //objeto window

    beforeEach(() => {
        wrapper = shallowMount( Indecision )
        clgSpy = jest.spyOn(console, 'log') //Voy a espiar el objeto console y el método log
        jest.clearAllMocks() //Con esto limpio los mocks y espías antes de las pruebas ... porque si no se
        //guardan las ejecuciones, por ejemplo si compruebo cuantas veces se llama a console.log
        //sin haber limpiado, de cada prueba se van añadiendo y no me interesa eso.
   
    })

    test('debe hacer match con el snapshot', () => {
        expect ( wrapper.html() ).toMatchSnapshot()
    })

    //Voy a definir algunas pruebas que quiero realizar
    test('escribir en el input no debe disparar nada', async () => {
        //Voy a espiar a getAnswer para demostrar que no se llama
        //En este caso el objeto será wrapper, pero la instancia concreta de vue
        //es wrapper.vm
        //https://v1.test-utils.vuejs.org/api/wrapper/

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input') //Sólo hay uno
        await input.setValue('Hola mundo') //Le establezco el valor

        
        expect( clgSpy ).toHaveBeenCalledTimes(1) //Puedo indicar cuántas veces quiero comprobar que se llama.
        expect( getAnswerSpy ).toHaveBeenCalledTimes(0)
        //expect( getAnswerSpy ).not.toHaveBeenCalled()
    })

    test('escribir "?" debe disparar el getAnswer', async() => {

        //En esta prueba no me interesa la ejecución del getAnswer,
        //lo único que me interesa es que el getAnswer sea llamado
        //cuando se ha hecho ?. 
        // Las pruebas tienen que ser atómicas y no debemos mezclar y probar
        // muchas funcionalidades. Deben ser sencillas y fáciles de leer.
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input') 
        await input.setValue('Hola mundo?') 
        
        expect( getAnswerSpy ).toHaveBeenCalled()
        //Fetch es una función propia del navegador que no tenemos en node
        //Para poder hacer que la prueba funcione correctamente tengo que mockear
        //la funcionalidad de fetch que está dentro del objeto global window
    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })

})