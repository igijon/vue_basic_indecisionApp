import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Indecision component', () => {

    let wrapper
    let clgSpy

    beforeEach(() => {
        wrapper = shallowMount( Indecision )
        clgSpy = jest.spyOn(console, 'log') //Voy a espiar el objeto console y el método log
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

    test('escribir "?" debe disparar el fetch', () => {

    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })

})