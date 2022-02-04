<template>
    <h2>Counter</h2>
    <!-- En este ejemplo hemos visto cómo con las herramientas de desarrollo para Vue de Chrome podemos mantener el estado
    y hacer modificaciones para probar-->
    
    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
</template>

<script>
export default {
    //name: 'Patito'
    data() {
        return {
            counter: 5
        }
    }
}
</script>

<style>

</style>