import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    mejoresproductos:[],
    tiposproductos:[],
    ropaHombre:[],
    ropaMujer:[],
    electronica:[],

  },
  getters: {
    cartProducts(state){
      return state.cart.map(prod=>{
        let myProd = prod
        myProd.total = prod.count*prod.price
        return myProd
      })
    },
    cartCount(state,getters){
      return getters.cartProducts.reduce((total,prod)=>{
        return total+prod.count
      },0)
    },
    cartTotal(state,getters){
      return getters.cartProducts.reduce((total,prod)=>{
        return total+prod.total
      },0)
    },
    
    cartDesc(state, getters) {
      const total = getters.cartTotal;
      const totalWithDesc = getters.cartTotalWithDesc;
      return Math.round(total - totalWithDesc);
    },
    cartTotalWithDesc(state, getters) {
      let subtotal = Math.round(getters.cartTotal);
      let descuento = 0;
      if (subtotal < 500) {
        descuento = Math.round(subtotal * 0.05);
      } else {
        descuento = Math.round(subtotal * 0.11);
      }
      return Math.round(subtotal - descuento);
    }
    
  },
  mutations: {
    SET_PRODUCTS(state,productos){
      state.productos = productos
     },
     SET_MEJORES_PRODUCTOS(state,mejoresproductos){
      state.mejoresproductos = mejoresproductos
     },
     SET_TIPOS_PRODUCTOS(state,tiposproductos){
      state.tiposproductos = tiposproductos
     },
     SET_PRODUCTOS_HOMBRE(state,ropaHombre){
      state.ropaHombre = ropaHombre
     },
     SET_PRODUCTOS_MUJER(state,ropaMujer){
      state.ropaMujer = ropaMujer
     },
     SET_PRODUCTOS_ELECTRONICOS(state,electronica){
      state.electronica = electronica
     },
     ADD_PRODUCT_TO_CART(state,product){
       
       let exist = state.cart.some(p=>p.id==product.id)
       if(exist==false){
         state.cart.push(product)
       }
       else{
         state.cart.forEach(p=>{
           if(p.id==product.id){
             p.count+=1;
           }
         })
       }
     },
     REMOVE_PRODUCT_CART(state, idProduct){
       let index = state.cart.findIndex(p=>p.id ==idProduct)
       state.cart.splice(index,1)
     },
     ADD_STOCK_PRODUCT_CART(state, idProduct){
       state.cart.forEach(p=>{
         if(p.id==idProduct){
           p.count+=1;
         }
       })
     },
     REMOVE_STOCK_PRODUCT_CART(state, idProduct){
       state.cart.forEach(p=>{
         if(p.id==idProduct && p.count>1){
           p.count-=1;
         }
       })
     }
  },
  actions: {
    async fetchInfo({commit}){
      try{
        let response = await fetch("/JSON/home.json")
        let json = await response.json()  
        console.log(json)
        let mejoresproductos=json.mejoresproductos
        let tiposproductos=json.tiposproductos
        commit('SET_MEJORES_PRODUCTOS',mejoresproductos)
        commit('SET_TIPOS_PRODUCTOS',tiposproductos)
      }
      catch(error){
        console.log(error)
      }
    },
    async fetchProductosHombre({commit}){
      try{
        let response = await fetch('/JSON/ropaHombre.json')
        let json = await response.json()
        console.log(json)
        let productos = json
        commit('SET_PRODUCTOS_HOMBRE',productos)
        console.log(productos)
      }
      catch(error){
        console.log(error)
      }
    },
    async fetchProductosMujer({commit}){
      try{
        let response = await fetch('/JSON/ropaMujer.json')
        let json = await response.json()
        console.log(json)
        let productos = json
        commit('SET_PRODUCTOS_MUJER',productos)
        console.log(productos)
      }
      catch(error){
        console.log(error)
      }
    },
    async fetchProductosElectronicos({commit}){
      try{
        let response = await fetch('/JSON/electronica.json')
        let json = await response.json()
        console.log(json)
        let productos = json
        commit('SET_PRODUCTOS_ELECTRONICOS',productos)
        console.log(productos)
      }
      catch(error){
        console.log(error)
      }
    },
    addProductCart({commit},product){
      commit('ADD_PRODUCT_TO_CART',product)
    },
    removeCartProduct({commit},idProduct){
      commit('REMOVE_PRODUCT_CART',idProduct)
    },
    addStockCartProduct({commit},idProduct){
      commit('ADD_STOCK_PRODUCT_CART', idProduct)
    },
    removeStockCartProduct({commit}, idProduct){
      commit('REMOVE_STOCK_PRODUCT_CART',idProduct)
    }
  },
  modules: {
  }
})
