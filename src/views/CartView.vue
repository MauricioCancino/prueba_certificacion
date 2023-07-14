<template>
<v-app class="Mycontainer">
  <v-container>
    <Cart/>
  </v-container>
  </v-app>
</template>

<script>
import Cart from '@/components/Cart.vue'
export default {
  name: 'Cart-view',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    Cart
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  .Mycontainer{
    background-image: url(https://img.freepik.com/free-photo/purple-yeti-cartoon_23-2150248741.jpg?w=1060&t=st=1689351832~exp=1689352432~hmac=8bc95b04eb2b25c71f344afb7cc2c69299ba110993c7221a1ce454ab5ee19dd0);
    background-size:100%;
    background-attachment: fixed;
  }
</style>