
import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

//Tengo que montarlo o renderizarlo en algún ligugar por eso tenemos que importar las test-utils
describe('Counter Compoonent', () => {
    
    test('debe de hacer match con el snapshot', () => {

        //Al hacer esto estamos montando nuestro componente en un wrapper
        const wrapper = shallowMount( Counter )

        //La primera vez que se ejecute indicará que se escribió un snapshot, pero sólo la primera vez
        //Se genera un archivo con el template
        expect( wrapper.html() ).toMatchSnapshot()

    })

})