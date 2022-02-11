import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision'

describe('Indecision component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Indecision )
    })

    test('debe hacer match con el snapshot', () => {
        expect ( wrapper.html() ).toMatchSnapshot()
    })

    //Voy a definir algunas pruebas que quiero realizar
    test('escribir en el input no debe disparar nada', () => {

    })

    test('escribir "?" debe disparar el fetch', () => {

    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })

})