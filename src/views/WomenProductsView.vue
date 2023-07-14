<template>
<v-container>
    <CardsMujer/>
</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CardsMujer from '@/components/CardsMujer.vue'
export default {
    name: 'products-view',
    props: {
        
    },
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['ropaMujer'])
    },
    methods: {
        ...mapActions(['fetchProductosMujer'])
    },
    // watch: {},
   components: {
    CardsMujer
   },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchProductosMujer()
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>