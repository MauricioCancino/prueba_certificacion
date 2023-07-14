<template>
<v-container>
    <CardsHombre/>
</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CardsHombre from '@/components/CardsHombre.vue'
export default {
    name: 'products-view',
    props: {
        
    },
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['ropaHombre'])
    },
    methods: {
        ...mapActions(['fetchProductosHombre'])
    },
    // watch: {},
   components: {
    CardsHombre
   },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchProductosHombre()
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>