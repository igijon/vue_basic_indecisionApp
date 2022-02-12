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

    test('pruebas en getAnswer', async () => {

        //Comprobaremos que en cierto punto está pensando
        //que después en un punto de la respuesta está devolviendo la
        //respuesta en español...

        await wrapper.vm.getAnswer() //Hacemos una llamada real y esperamos a que termine el procedimiento

        const img = wrapper.find('img')

        expect ( img.exists() ).toBeTruthy()
        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect( wrapper.vm.answer ).toBe('Sí!')

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })

})