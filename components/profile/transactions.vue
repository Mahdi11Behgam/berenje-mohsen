<template >
  <v-card color="#CEAB93" >
    <v-card-title >
      production
      <v-spacer></v-spacer>
      <v-text-field 
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      Style="background-color:#CEAB93"
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'objects',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'number', value: 'number' },
          { text: 'price', value: 'price' },
          { text: 'total', value: 'total' },
        //   { text: 'Protein (g)', value: 'protein' },
        //   { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: '1.Frozen Yogurt',
            number: 15,
            price: "60000T",
            total: "900000T",
        //     protein: 4.0,
        //     iron: '1%',
          },
          {
            name: '2.Ice cream sandwich',
            number: 23,
            price: "9000T",
            total: "207000T",
            // protein: 4.3,
            // iron: '1%',
          },
          {
            name: '3.Eclair',
            number: 26,
            price: "1600T",
            total: "41600T",
            // protein: 6.0,
            // iron: '7%',
          },
          {
            name: '4.Cupcake',
            number: 30,
            price: "3700T",
            total: "111000T",
        //     protein: 4.3,
        //     iron: '8%',
          },
          {
            name: '5.Gingerbread',
            number: 35,
            price: "1600T",
            total: "56000T",
            // protein: 3.9,
            // iron: '16%',
          },
          {
            name: '6.Jelly bean',
            number: 37,
            price: "1000T",
            total: "37000T",
            // protein: 0.0,
            // iron: '0%',
          },
          {
            name: '7.Lollipop',
            number: 39,
            price: "2000T",
            total: "78000T",
            // protein: 0,
            // iron: '2%',
          },
          {
            name: '8.Honeycomb',
            number: 40,
            price: "32000T",
            total: "1280000T",
            // protein: 6.5,
            // iron: '45%',
          },
          {
            name: '9.Donut',
            number: 45,
            price: "2500T",
            total: "112500T",
            // protein: 4.9,
            // iron: '22%',
          },
          {
            name: '10.KitKat',
            number: 51,
            price: "2600T",
            total: "132600T",
            // protein: 7,
            // iron: '6%',
          },
        ],
      }
    },
  }
</script>