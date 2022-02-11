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
        //Comprobaremos que se dispara el console.log
        //Tenemos un watcher pendiente del valor del question que está asociado al input
        const input = wrapper.find('input') //Sólo hay uno
        //Pongo el await para forzar a que se setee antes de seguir
        await input.setValue('Hola mundo') //Le establezco el valor

        //Al establecerle el valor, se habrá producido el console.log
        //Para eso teng que crearme un espía (spy) 

        expect( clgSpy ).toHaveBeenCalled()

    })

    test('escribir "?" debe disparar el fetch', () => {

    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })

})