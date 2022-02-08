
import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

//Tengo que montarlo o renderizarlo en algún ligugar por eso tenemos que importar las test-utils
describe('Counter Compoonent', () => {
    
    //Si comento esta prueba dirá que tengo un snapshot obsoleto,
    //con -u se actualiza el shapshot
    /*test('debe de hacer match con el snapshot', () => {

        //Al hacer esto estamos montando nuestro componente en un wrapper
        const wrapper = shallowMount( Counter )

        //La primera vez que se ejecute indicará que se escribió un snapshot, pero sólo la primera vez
        //Se genera un archivo con el template
        expect( wrapper.html() ).toMatchSnapshot()
        //Si falla la prueba pero el componente está bien, tengo que actualizar el snapshot con yarn test:unit -u

    })*/

    test('h2 debe tener por defecto el valor "counter"', () => {

        const wrapper = shallowMount( Counter )

        //Si no existe no va a seguir ejecutándose
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        //Puedo buscar por id, clases... busca y retorna el primero que encuentra. Si queremos todos 
        //debemos usar findAll.
        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
    })


})