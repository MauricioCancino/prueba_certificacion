<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="mejorproducto in mejoresproductos"
      :key="mejorproducto.title"
      height="400px"
      width='100%'
      class="mx-auto"
       :src="mejorproducto.image"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
           <v-col>
            <div class="text-h2" justify='center'>
            {{mejorproducto.title}}
          </div></v-col>
        </v-row>
         
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import {mapState } from 'vuex'
  export default {
    name: "carousel-comp",
    data () {
      return {
        
      }
    },
    // -- Lifecycle Methods
    // -- End Lifecycle Methods

  computed: {
    ...mapState(['mejoresproductos'])
  },
 
  }
</script>
<style scoped>
  div{
    color: rgb(69, 5, 69);
  }
</style>