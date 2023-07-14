<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="12" sm="6">
        <h1 class="text-center purple--text mb-5">Productos agregados</h1>
        <v-data-table
          :headers="headers"
          :items="cartProducts"
          sort-by="title"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Total Carrito <span class="purple--text">${{Number(cartTotal).toLocaleString('es-CL')}}</span> </v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
            
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >¿Quieres borrar el producto?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.image`]="{ item }"> 
                <img :src="item.image" alt="">
              </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          
        </v-data-table>
        <template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
  <v-divider></v-divider>
  <v-divider></v-divider>
    <v-card-text>
      <div><span class="text-h9 text--primary">
        Subtotal Productos:
      </span> ${{cartTotal}}</div>

      <div><span class="text-h9 text--primary">
        Descuentos:
      </span> ${{cartDesc}}</div>

      <div><span class="text-h9 text--primary">
        Total:
      </span> ${{cartTotalWithDesc}}</div>
      
    </v-card-text>
  </v-card>
</template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart-view",
  props: {

  },
  data: function () {
    return {
      
      dialogDelete: false,
      headers: [
        {
          text: 'Producto',
          align: 'start',
          sortable: false,
          value: 'image',
        },
        { text: 'Nombre', value: 'title' },
        { text: 'Cantidad', value: 'count' },
        { text: 'Precio', value: "price"},
        { text: 'Subtotal', value: "total"},
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      deleteId:null,
      
     
     
    };
  },
  computed: {
    ...mapGetters(["cartProducts", "cartTotal", "cartCount","cartTotalWithDesc","cartDesc"]),
    
  },
  methods: {
    ...mapActions(['removeCartProduct','removeStockCartProduct']),
    deleteItem (item) {
        console.log(item)
        this.deleteId = item.id
        this.dialogDelete=true
      },
      deleteItemConfirm () {
        this.removeCartProduct(this.deleteId)
        this.closeDelete()
      },
      closeDelete () {
        this.dialogDelete = false
      },

  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.myCol {
    flex-grow: 0;
}
.myBtn {
    color: white;
}
img {
    width: 75px;
    height: 75px;
  }
</style>