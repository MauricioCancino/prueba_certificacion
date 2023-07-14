<template>
    <v-container>
           <v-card-title>
          <span class="text-h5">Forma de Pago</span>
                </v-card-title>
                  <v-card flat>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6"
          >
            <v-radio-group
             
              column
            >
              <v-radio
                label="Transferencia Bancaria"
                color="purple"
                value="Transferencia Bancaria"
              ></v-radio>
              <v-radio
                label="Servipag"
                color="purple"
                value="Servipag"
              ></v-radio>
              <v-radio
                label="Contra entrega"
                color="purple"
                value="Contra entrega"
              ></v-radio>
              <v-radio
                label="WebPay"
                color="purple"
                value="Webpay"
              ></v-radio>
              
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</v-container>    
</template>

<script>
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>