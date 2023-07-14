<template>
     <v-container>
     <v-row justify="start" >
    <v-col cols='12' md="12" sm="6">
      <v-form 
    ref="form"
    v-model="valid">
      <v-card>
        <v-card-title>
          <span class="text-h5">Datos del comprador</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Nombres"
                  :rules='nameRules'
                  v-model="nombres"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Email"
                  :rules='emailRules'
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Repetir Email"
                  v-model="repeat_email"
                  :rules='repeatEmailRules'
                  type='text'
                  required
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
              >
                <v-text-field
                  label="+569"
                  v-model="telefono"
                  :rules='telefonoRules'
                  type="text"
                  required
                >+569</v-text-field>
              </v-col>
        
                <v-card-title>
          <span class="text-h5">Datos del despacho</span>
                </v-card-title>

                <v-col
                cols="12"
              >
                <v-text-field
                  label="Dirección"
                  v-model="direccion"
                  :rules='direccionRules'
                  type='texto'
                  required
                ></v-text-field>
              </v-col>
                <v-col
                cols="12"
              >
                <v-text-field
                  label="Comuna"
                  v-model="comuna"
                  :rules="comunaRules"
                  type='text'
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  label="Fecha del pedido"
                  v-model="fecha_pedido"
                  type='text'
                  required
                  disabled
                ></v-text-field>
              </v-col>
          <v-divider></v-divider>
           <FormPago/>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            variant="text"
            @click="Pay()"
          >
            Pagar
          </v-btn>
          
          <v-btn
            color="error"
            variant="text"
            @click="$router.push(`/cart`)"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import FormPago from '@/components/FormPago.vue'
export default {
    name: 'form-comp',
    // props: {},
    data: function(){
        return {
      valid: true,
      dialog: false,
      nombres:"",
      email:"",
      repeat_email:"",
      direccion:"",
      telefono:"",
      comuna:"",
      fecha_pedido:new Date().toLocaleDateString(),
      
      nameRules: [
        v => !!v || 'Name is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      repeatEmailRules: [
          (v) => v === this.email || 'Email invalido',
          (v) => !!v || 'Email requerido',
        ],
        direccionRules: [
        v => !!v || 'Name is required',
      ],
      comunaRules: [
        v => !!v || 'Name is required',
      ],
      telefonoRules: [
      (v) => !!v || "El teléfono es requerido",
      (v) =>
        /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(v) ||

        "El teléfono debe ser valido",

    ],
    }
    },
    // computed: {},
    methods: {
        redirectTo(nameRoute){
        this.$router.push({name:nameRoute})
    },
        Pay(){
            console.log(this.valid)
            if (this.valid){
              console.log(this.valid)
            this.$router.push({ path: '/confirmed', query: { nombres: this.nombres } })
            }else{
              console.log("No pasó la validación")
            }
            
        },
    },
  
    // watch: {},
     components: {FormPago},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}

</script>

<style scoped>
    
</style>