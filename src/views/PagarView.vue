<template>
    <v-container>
        <v-row> 
    <v-col cols="12" md="6">
    <Form/>
    </v-col> 
    <v-col cols="12" md="6">
        <br>
        <br>
    <MiniCart/>
    </v-col>
    </v-row>
    </v-container>
</template>

<script>
import Form from '@/components/Form.vue'
import MiniCart from '@/components/MiniCart.vue'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        Form, MiniCart
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>