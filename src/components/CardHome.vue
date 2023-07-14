<template>
    <v-container justify='space-around'>
      <v-row>
        <v-col cols="12" sm="10" md="4" v-for="tipoproducto in tiposproductos"
    :key="tipoproducto.name">
    <v-card
    class="mx-auto"
    max-width="450"
    height="600px"
    >
    <v-img
    :src='tipoproducto.image'
    height="350px">
    </v-img>
    <v-card-title class="subtitle">{{tipoproducto.name}}</v-card-title>
    
    <v-card-text>
      <div class="my-4 text--primary">
        {{tipoproducto.text}}
      </div>
    </v-card-text>
    
  </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'cardHome-component',
    data: function(){
        return {
        //     routes:[
        // {
        //     title:"Men's clothing ",
        //     name:"men's clothing"
        // },
        // {
        //     title:"Women's clothing ",
        //     name:"women's clothing"
        // },
        // {
        //     title:"electronics",
        //     name:"electronics"
        // },
        // ]
        }
    },
    computed: {
      ...mapState(['tiposproductos'])
    },
    methods: {
        ...mapActions(['addProductCart']),
        redirectTo(nameRoute){
        this.$router.push({name:nameRoute})
    },
        
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .title{
        min-height:160px;
    }
</style>