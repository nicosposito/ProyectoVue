<template>
  <app-nav :key="componentKey" v-bind:lista="copiaPeliculas"></app-nav>
</template>


<script>
import AppNav from "./components/AppNav.vue";

export default {

  created: function () {
    this.eventBus.on("recargar", (opc) => {
      this.forceRerender();
    });
    this.eventBus.on("agregarPelicula", (pelicula) => {
      this.agregarPelicula(pelicula);
    });
    this.eventBus.on("eliminarPelicula", (nombre) => {
      this.eliminarPelicula(nombre);
    });
    this.eventBus.on("pedirInfo", (opc) => {
      this.darInfo();
    });
<<<<<<< HEAD
    this.eventBus.on("buscarPelicula", (query) => {
      this.buscarPelicula(query);
    });
    this.copiaPeliculas = [... this.peliculas];
=======

>>>>>>> 098ae6f9c2000518065e385214ab4d6a2c27aae1
  },

  data() {
    return {
      componentKey: 0,
      peliculas: [
        {
          nombre: "The Batman",
          sinopsis:
            "En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como 'el Acertijo'.",
          director: "Matt Reeves",
          fechaEstreno: "04-03-2022",
          genero: "Superheroe",
          duracion: "176",
          imgSrc: "https://www.quepeliculaver.com/uploads/2021/12/7YncShtIGNJP5euTPSZGxGsImaN.jpg",
        },
        {
          nombre: "Spider-Man: Sin camino a casa",
          sinopsis: "Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.",
          director: "Jon Watts",
          fechaEstreno: "17-12-2021",
          genero: "Superheroe",
          duracion: "148",
          imgSrc: "https://funaticonews.com/wp-content/uploads/2021/11/cines-poster-afiche-spiderman-spider-man-sin-camino-a-casa-no-way-out-preventa-peru.jpg"
        },
        {
          nombre: "Doctor Strange: En el multiverso de la locura",
          sinopsis: "El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora su equipo debe enfrentarse a una amenaza enorme.",
          director: "Sam Raimi",
          fechaEstreno: "06-05-2022",
          genero: "Superheroe",
          duracion: "126",
          imgSrc: "https://dam.smashmexico.com.mx/wp-content/uploads/2022/02/doctor-strange-nuevo-poster.jpg"
        }, 
        {
          nombre: "Animales fantasticos: Los secretos de Dumbledore",
          sinopsis: "Ante una severa amenaza, el magizoólogo Newt Scamander lidera a un valiente grupo de magos y brujas que busca detener al malvado Gellert Grindelwald.",
          director: "David Yates",
          fechaEstreno: "08-04-2022",
          genero: "Fantasia",
          duracion: "143",
           imgSrc:"https://pbs.twimg.com/media/FNQYjOUXEAAIVYy?format=jpg&name=4096x4096"
        },
      ],
      copiaPeliculas: [],
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    agregarPelicula(pelicula) {
      this.peliculas.push(pelicula);
      this.copiaPeliculas = [...this.peliculas];
    },
    eliminarPelicula(nombre) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.nombre != nombre
      );
      this.copiaPeliculas = [...this.peliculas];
    },
    darInfo() {
      localStorage.setItem("listaPeliculas", this.peliculas);
    },
    buscarPelicula(query) {
      if(query.trim()==''){
        this.copiaPeliculas = [... this.peliculas];
      }else{
        const temp = this.peliculas.filter(
          pelicula => {
            return pelicula.nombre.toLowerCase().includes(query.toLowerCase());
          }
        );
        this.copiaPeliculas = [... temp];
      }
    }
  },
  components: {
    AppNav,
  },
};
</script>


<style >
</style>
