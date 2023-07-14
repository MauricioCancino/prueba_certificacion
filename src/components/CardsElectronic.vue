<template>
    
    <v-container>
      <v-row>
        <v-col cols='12' sm='6' md='4' v-for="producto in electronica"
        :key="producto.id">
      <v-card 
      class="mx-auto"
      max-width="500"
      height="725">
    
    <v-card-text>
      
      <v-img :src='producto.image'
      height="200"
      width="200"
      justify="center"></v-img>

      <div class="my-4 text-subtitle-1">
         {{producto.title}}
      </div>
      <div class="my-4 text-subtitle-2">{{producto.description}}</div>
      <ul v-for="item in producto.rating" :key="item">
        <li>{{item}}</li>
        
      </ul>
      <div class="my-4 text-subtitle-1">
        ${{Number(producto.price).toLocaleString('en-EU')}}
      </div>
      <v-divider></v-divider>
      <v-btn
        color="purple darken-2"
        text
        justify="center"
        @click="add(producto)"
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
    name: 'cards-electronic',
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
      ...mapState(['electronica']),
      getRating (){
        return this.electronica.rating
      }
    },
    methods: {
        ...mapActions(['addProductCart', 'fetchProductosElectronicos']),
        add(producto) {
            let prod = {
                id:producto.id,
                title:producto.title,
                price:producto.price,
                count:1,
                description:producto.description,
                rating:producto.rating,
                image: producto.image
            }
            this.addProductCart(prod)
            this.nombreSnackbar=producto.title
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