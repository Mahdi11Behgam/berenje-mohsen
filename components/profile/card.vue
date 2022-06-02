<template>
  <v-card color="#CEAB93" class="mx-auto" max-width="full" outlined>
    <v-list-item three-line >
      <v-list-item-content >
        <v-row>
          <v-col>

            <div class="text-overline mb-4">profile</div>
            <v-list-item-title class="text-h5 mb-1">
              Great Mahdi
            </v-list-item-title>
    
            <v-list-item-subtitle
              >اسم:<v-btn plain @click="send_message(name)">{{
                name
              }}</v-btn></v-list-item-subtitle
            >
            <v-list-item-subtitle
              >فامیل:<v-btn plain @click="send_message(familyName)">{{
                familyName
              }}</v-btn></v-list-item-subtitle
            >
            <v-list-item-subtitle
              >سن:<v-btn plain @click="send_message(age)">{{
                age
              }}</v-btn></v-list-item-subtitle
            >
            <v-list-item-subtitle
              >شهر:<v-btn plain @click="send_message(city)">{{
                city
              }}</v-btn></v-list-item-subtitle
            >
            <v-list-item-subtitle
              >شغل:<v-btn plain @click="send_message(job)">{{
                job
              }}</v-btn></v-list-item-subtitle
            >
          </v-col>
          <v-col dir="ltr" class="px-5 py-5">
            <v-avatar
              color="indigo"
              apend-icon="mdi-account-circle"
              size="120"
              
            >
              <v-img :src="Image" />
            </v-avatar>
            
          </v-col>
        </v-row>
      </v-list-item-content>

    </v-list-item>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    name: "محمد مهدی",
    familyName: "بهگام",
    age: 29,
    city: "تهران",
    job: "حراست",
    Image: "./img.jpg",
  }),
  methods: {
    send_message(x) {
      this.$store.dispatch("system/message_handler", x);
    },
  },
};
</script>