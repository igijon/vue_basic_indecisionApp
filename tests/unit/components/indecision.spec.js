import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Indecision component', () => {

    let wrapper
    let clgSpy

    //Implementación de fetch. Tengo que obtener una promesa para enlazar con then
    //Necesito resolver también en el mock el método json 
    global.fetch = jest.fn( () => Promise.resolve({
       json: () => Promise.resolve({
           //Aquí tenemos que poner lo que la petición pudiera devolver
           //Lo miramos en el API de https://yesno.wtf/api
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
       })
    }) ) 

    beforeEach(() => {
        wrapper = shallowMount( Indecision )
        clgSpy = jest.spyOn(console, 'log') 
        jest.clearAllMocks()    
    })

    test('debe hacer match con el snapshot', () => {
        expect ( wrapper.html() ).toMatchSnapshot()
    })

    test('escribir en el input no debe disparar nada', async () => {
        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input') 
        await input.setValue('Hola mundo') 

        
        expect( clgSpy ).toHaveBeenCalledTimes(1) 
        expect( getAnswerSpy ).toHaveBeenCalledTimes(0)
    })

    test('escribir "?" debe disparar el getAnswer', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input') 
        await input.setValue('Hola mundo?') 
        
        expect( getAnswerSpy ).toHaveBeenCalled()
    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })

})