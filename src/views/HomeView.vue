<template>
<v-container class="myContainer">
  <v-row>
  <Carousel/>
  </v-row>
  <v-divider></v-divider>
  <br>
  <br>
  <div>
  <CardHome/>
  </div>
</v-container>
  
</template>

<script>
  import CardHome from '@/components/CardHome.vue'
  import Carousel from '@/components/Carousel.vue'
  import { mapActions,mapState } from 'vuex'

  export default {
    name: 'Home-view',
    computed: {
    ...mapState(['mejoresproductos','tiposproductos'])
  },
    components: {
      CardHome, Carousel,
    },
    methods:{
      ...mapActions(['fetchInfo'])
    },
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
    created() {
    this.fetchInfo()
  },

  }
</script>
<style scoped>
  .myContainer {
    margin-top: 25px;
    margin-bottom: 40px;
    background-color: blueviolet;
  }
</style>