<template>
  <v-carousel cycle interval="10000">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<!-- <script>
  export default {
    data () {
      return{
        items: [
        {src:"./v1.jpg"} , {src:"./v2.jpg"} , {src:"./img.jpg"}
      ],
      }
      
    },
  }
</script> -->

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: "./v1.jpg",
          },
          {
            src: "./v2.jpg",
          },
          {
            src: "./img.jpg",
          },
        ],
      }
    },
  }
</script>