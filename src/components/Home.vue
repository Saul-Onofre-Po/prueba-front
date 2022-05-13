<template>
  <div>
    <Nombre />
    <Contacto />
    <Fecha />
  </div>
</template>

<script>
import Nombre from "./nombre";
import Contacto from "./datosContacto";
import Fecha from "./fechaNacimiento";

export default {
  name: "Home",
  components: {
    Nombre,
    Contacto,
    Fecha,
  },

  data() {
    return {
      arrayBlog: [],
    };
  },
  methods: {
    async consumirPokemon() {
     
          const data = await fetch(`http://localhost:3050`);
          const array = await data.json();
          this.arrayBlog = array;
            console.log(array);
      
    },
  },

  created() {
    this.consumirPokemon();
    //localStorage.setItem("Apellido", 'onofre');
  },
};
</script>
<style scoped>
.v-tab {
  justify-content: left;
}
</style>
