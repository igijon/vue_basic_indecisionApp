<template>
    <h2>Counter</h2>

    <!--p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p-->
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

</template>

<script>
export default {
    //name: 'Patito'
    data() {
        return {
            counter: 5
        }
    },
    methods: {
        getSquareValue(){
            console.log('getSquareValue')
            return this.counter * this.counter
        }
    },
    computed: {
        squareCounter() {
            console.log('squareCounter')
            return this.counter *  this.counter
        }
    }
}
</script>

<style>

</style>