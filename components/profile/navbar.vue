<template>
  <v-card color="#CEAB93">
    <v-card-text>
      <v-row class="justify-space-between">
        <v-col class="pt-4">
          <span>ایمیل :</span>
          <span>
            {{ email }}
          </span>
          <v-icon :color="email_check(email_verified)[0]" small>
            {{email_check(email_verified)[1]}}
          </v-icon>
          
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    email: "mahdi11behgam@gmail.com",
    email_verified: true,
   
  }),

  methods: {
    email_check(email) {
      let color = "";
      let icon = ""
      if (email) {
        color = "yellow"
        icon = "mdi-check-circle";
      } else {
        color = "grey"
        icon = "mdi-close-circle";
      }
      return [color,icon];
    },
  },
};
</script>