<template>
  <v-container>
    <v-row justify="center" >
    <v-col >
      
    <v-card elevation="2" outlined tile>
      <h1> Muchas gracias {{ $route.query.nombres }} por su compra. La orden N° {{ getRandomInt(10000, 999999) }} ha sido confirmada y su pedido está siendo preparado .</h1>
        
    </v-card>
        <v-btn @click="redirectTo('home')" color="purple" class="myBtn">Volver</v-btn>
    </v-col> 
    <v-divider></v-divider>
    
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'confirmed-view',
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    redirectTo(nameRoute){
        this.$router.push({name:nameRoute})
    }
  },
};
</script>

<style scoped>

.myBtn {
  display: flex;
  
  
}
</style>

