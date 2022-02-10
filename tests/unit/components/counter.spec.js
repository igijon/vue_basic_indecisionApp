
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

    // Esta prueba no es del todo necesaria porque 
    // si tuviésemos el snapshot no haría falta
    test('el valor por defecto debe ser 100 en el p', () => {

        //wrapper
        const wrapper = shallowMount( Counter )

        //Buscamos todos los párrafosb (pTags)
        const value = wrapper.find('[data-testid="counter"]')

        //Haremos el expect sobre el segundo párrafo para comprobar que p sea el valor de 100
        //que es el valor por defecto
        expect(value.text()).toBe('100')
        //Ponemos el 100 como string, porque esto está evaluando el valor de p que es un string
    })

    // Vamos a simular eventos para hacer pruebas sobre los botones
    test('debe incrementar en 1 el valor del contador', async () => {

        const wrapper = shallowMount( Counter )

        const increaseBtn = wrapper.find('button') //Esto me devuelve el primer botón

        await increaseBtn.trigger('click') //Con esto simulo el click

        let value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101') 
        // Va a fallar porque primero se ejecuta el test y después se ejecuta la actualización del evento en el programa

        //Si quiero evaluar sólo un componente hago yarn test:unit counter

        const decreaseBtn = wrapper.findAll('button')[1] //Esto me devuelve el primer botón

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
     
        value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('99')
    })
})