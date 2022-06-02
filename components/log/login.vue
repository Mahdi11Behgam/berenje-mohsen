<template>
<v-card color="#ad8b73">
        <v-card-title> حساب کاربری </v-card-title>
        <v-card-text>
          <v-text-field v-model="login.email" dense outlined label="ایمیل" />
          <v-text-field v-model="login.password" dense outlined label="پسورد" />
        </v-card-text>
        <v-card-actions dir="ltr" class="px-4">
          <v-btn light class="pb-1 elevation-0" >ورود</v-btn>
          <v-spacer />
          <v-btn text light class="px-0" @click="change_log('register')"> اکانت جدید </v-btn>
        </v-card-actions>
      </v-card>
</template>


<script>
export default {
  data: () => ({
    login: {
      email: "",
      password: "",
    },
  }),
  methods:{
    change_log(prompt){
      this.$store.dispatch("system/change_log",prompt)
    }
  }
};
</script>