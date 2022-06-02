<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="6">
      <log-login class="animate__animated animate__slideInDown animate__fast" v-if="log_comp=='login'" />
      <log-register class="animate__animated animate__flipInX animate__fast" v-if="log_comp=='register'" />
    </v-col>
  </v-row>
</template>


<script>
export default {
  data: () => ({
    
  }),
  computed: {
    log_comp(){
      return this.$store.getters["system/get_log_comp"];
    }
  },
  methods:{},

};
</script>