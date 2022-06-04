<template>
  <v-card color="#ad8b73">
    <v-card-title> ساخت حساب کاربری </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="register.email"
        dense
        outlined
        label="ایمیل"
        color="brown"
        class="rounded-0"
        :rules="[rules.required, rules.email]"
      />
      <v-text-field
        :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
        v-model="register.password"
        dense
        outlined
        label="رمز عبور"
        color="brown"
        :rules="[rules.required, rules.min]"
        :type="passwordShow ? 'text' : 'password'"
        @click:append="passwordShow = !passwordShow"
      />
      <v-text-field
        :append-icon="passwordConfirmShow ? 'mdi-eye' : 'mdi-eye-off'"
        v-model="register.confirm_password"
        dense
        outlined
        label="تکرار"
        color="brown"
        :rules="[rules.required, rules.min]"
        :type="passwordConfirmShow ? 'text' : 'password'"
        @click:append="passwordConfirmShow = !passwordConfirmShow"
      />
    </v-card-text>
    <v-card-actions dir="ltr" class="px-4">
      <v-btn light class="pb-1 elevation-0" @click="register_user" outlined
        >ساخت</v-btn
      >
      <v-spacer />
      <v-btn text light class="px-0" @click="change_log('login')">
        ورود ب حساب
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    passwordShow: false,
    passwordConfirmShow: false,
    register: {
      email: "",
      password: "",
      confirm_password: "",
    },
    rules: {
      required: (value) => !!value || "الزامی",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "ایمیل نادرست است";
      },
      min: (v) => v.length >= 8 || "ثبت حداقل هشت کاراکتر الزامیست",
    },
  }),
  methods: {
    change_log(prompt) {
      this.$store.dispatch("system/change_log", prompt);
    },
    register_user() {
      console.log('ok')
      if (this.register.email !== "" && this.register.email) {
        if (this.register.password !== "" && this.register.password) {
          if (this.register.password === this.register.confirm_password) {
            this.$store.dispatch("users/register", {
              loading: this.$nuxt.$loading,
              email: this.register.email,
              password: this.register.password,
              type: "user",
            });
          }
        }
      }
    },
  },
};
</script>