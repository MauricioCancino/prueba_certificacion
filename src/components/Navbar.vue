<template>
  <div>
    <v-app-bar color="purple darken-2">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold"> <strong>Tienda DeTodito</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge :content="cartCount" class="ma-3" :value="cartCount>0"  v-if="cartCount >0">
        <v-icon @click="redirectTo('Cart')">mdi-cart</v-icon>
      </v-badge>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="route in routes" :key="route.name" @click="redirectTo(route.name)" :disabled="currentRoute==route.name">
            <v-list-item-icon>
              <v-icon>{{route.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{route.title}}</v-list-item-title>
          </v-list-item>

          <!-- <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "nav-comp",
  // props: {},
  data: function () {
    return {
      drawer: false,
      group: null,
      routes:[
        {
            icon:'mdi-home',
            title:"Inicio",
            name:'home'
        },
        {
            icon:'mdi-shopping',
            title:"Categorias",
            name:'categories'
        },
        {
            icon:'mdi-tshirt-crew',
            title:"Productos Hombre",
            name:'Menproducts'
        },
        {
            icon:'mdi-face-woman',
            title:"Productos Dama",
            name:'Womenproducts'
        },
        {
            icon:'mdi-television-classic',
            title:"Productos Electrónicos",
            name:'Electronicproducts'
        },
        {
          icon:'mdi-cart',
          title:'Cart',
          name:'Cart'
        },
        

      ]
    };
  },
  computed: {
    ...mapGetters(['cartCount']),
    currentRoute(){
        return this.$route.name
    }
  },
  methods: {
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
};
</script>

<style scoped>
#botones{
  gap: 5px;
}
strong {
  color: rgba(235, 224, 224, 0.941)
}
</style>