<template>
    <div class="not-found">
         <v-btn @click="redirectTo('home')" color="purple">Volver</v-btn>
    </div>
</template>

<script>
export default {
    name: 'error-view',
    // props: {},
    data: function(){
        return {}
    },
    methods: {
    redirectTo(nameRoute){
        this.$router.push({name:nameRoute})
    },
  }
    // computed: {},
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

.not-found {
    height: 100vh;
    background-image: url("@/assets/error.png");
     background-size: 100%;
    background-attachment: fixed;
    align-items: center;
    justify-content: center;
    display: flex;
}
   button {
    margin-top: 150px;
    background-color:rgb(174, 20, 230);
   }
</style>