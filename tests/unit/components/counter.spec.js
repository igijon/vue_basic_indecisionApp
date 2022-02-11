
import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

//Tengo que montarlo o renderizarlo en algún ligugar por eso tenemos que importar las test-utils
describe('Counter Compoonent', () => {
    
    // Dentro del describe, tenemos 4 etapas de un ciclo de vida:
    // https://jestjs.io/docs/setup-teardown
    // beforeAll => Se ejecuta antes de todas las pruebas
    // afterAll => Después de todas
    // beforeEach y afterEach ... antes y después de cada una

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })


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

        //Si no existe no va a seguir ejecutándose
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        //Puedo buscar por id, clases... busca y retorna el primero que encuentra. Si queremos todos 
        //debemos usar findAll.
        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
    })

    // Esta prueba no es del todo necesaria porque 
    // si tuviésemos el snapshot no haría falta
    test('el valor por defecto debe ser 100 en el p', async () => {

        //Buscamos todos los párrafosb (pTags)
        const value = wrapper.find('[data-testid="counter"]')

        //Haremos el expect sobre el segundo párrafo para comprobar que p sea el valor de 100
        //que es el valor por defecto
        expect(value.text()).toBe('100')
        //Ponemos el 100 como string, porque esto está evaluando el valor de p que es un string
  
    })

    // Vamos a simular eventos para hacer pruebas sobre los botones
    test('debe incrementar y decrementar el del contador', async () => {

        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button') //Desestructuración

        await increaseBtn.trigger('click') 
        await increaseBtn.trigger('click') 
        await increaseBtn.trigger('click') 

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
     
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')
    })

    test('debe establecer el valor por defecto', () => {

        //Varias formas de hacerlo
        //const start = wrapper.props('start')
        const { start } = wrapper.props() // Desestructurando puedo obtener start
    
        const value = wrapper.find('[data-testid="counter"]').text()
        
        //Value va a ser de tipo texto porque lo obtenemos del componente renderizado
        //start es de tipo number porque así está definido
        expect( Number(value) ).toBe( start )
    })

    test('debe mostrar la prop title', () => {

        //Quiero comprobar que se recibe el valor de title
        //Leer el valor de la prop title y asegurarse que se
        //muestra

        //Si uso el wrapper definido para todas, y le añado otras 
        //propiedades, puede afectar a otras pruebas. Si uso el otro
        //me modificaría el snapshot
        const wrapper = shallowMount( Counter, {
            props: {
                title: 'Hola mundo'
            }
        } )

        expect ( wrapper.find('h2').text() ).toBe('Hola mundo')



    })
})
