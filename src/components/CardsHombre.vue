<template>
    
    <v-container>
      <v-row>
        <v-col cols='12' sm='6' md='3' v-for="prenda in ropaHombre"
        :key="prenda.id">
      <v-card 
      class="mx-auto"
      max-width="500"
      height="700">
    
    <v-card-text>
      
      <v-img :src='prenda.image'
      height="200"
      width="200"
      justify="center"></v-img>

      <div class="my-4 text-subtitle-1">
         {{prenda.title}}
      </div>
      <div class="my-4 text-subtitle-2">{{prenda.description}}</div>
      <ul v-for="item in prenda.rating" :key="item">
        <li>{{item}}</li>
        
      </ul>
      <div class="my-4 text-subtitle-1">
        ${{Number(prenda.price).toLocaleString('en-EU')}}
      </div>
      <v-divider></v-divider>
      <v-btn
        color="purple darken-2"
        text
        justify="center"
        @click="add(prenda)"
        class="mx-0"
      >
        <v-icon>mdi-cart</v-icon>
        Agregar
      </v-btn>
    
    </v-card-text>

    
    <div class="text-center">
    

    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      color="purple"
    >
      {{nombreSnackbar}} Agregado al Carrito
        <v-icon>mdi-cart-plus</v-icon>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'cards-component',
    // props: {
    //   product: {type: Object,
    //   required:true }
    // },
    data: function(){
        return {
            selection: 0,
             multiLine: true,
            snackbar: false,
            nombreSnackbar:''
        }
    },
    computed: {
      ...mapState(['ropaHombre']),
      getRating (){
        return this.ropaHombre.rating
      }
    },
    methods: {
        ...mapActions(['addProductCart', 'fetchProductosHombre']),
        add(prenda) {
            let prod = {
                id:prenda.id,
                title:prenda.title,
                price:prenda.price,
                count:1,
                description:prenda.description,
                rating:prenda.rating,
                image: prenda.image
            }
            this.addProductCart(prod)
            this.nombreSnackbar=prenda.title
            this.snackbar=true
      },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // created() {
    //     
    // }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .title{
        min-height:160px;
    }
</style>