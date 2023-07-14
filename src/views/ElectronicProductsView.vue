<template>
<v-container>
    <CardsElectronic/>
</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CardsElectronic from '@/components/CardsElectronic.vue'
export default {
    name: 'products-view',
    props: {
        
    },
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['electronica'])
    },
    methods: {
        ...mapActions(['fetchProductosElectronicos'])
    },
    // watch: {},
   components: {
    CardsElectronic
   },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchProductosElectronicos()
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>