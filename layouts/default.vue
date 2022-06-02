<template>
  <v-app style="background-color: #fffbe9">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
    >
      <v-list>
        <v-list-item
          dir="ltr"
          class="px-0"
          v-for="(item, i) in routes"
          :key="i"
          :to="item.route"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="transparent"
      :clipped-left="clipped"
      fixed
      app
      dir="ltr"
      light
      class="elevation-0 "
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-text-field
        hide-details
        dense
        outlined
        append-icon="mdi-magnify"
      ></v-text-field>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
      color="#CEAB93"
      class="justify-space-between"
    >
      <v-btn
        v-for="(item, i) in routes"
        :key="i"
        icon
        router
        exact
        :to="item.route"
      >
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      routes: [
        { 
          title: "profile",
          icon: "mdi-account",
          route: "/profile",
        },
        {
          title: "location",
          icon: "mdi-map-marker-outline",
          route: "/location",
        },
        {
          title: "cart",
          icon: "mdi-cart-outline",
          route: "/cart",
        },
        {
          title: "message",
          icon: "mdi-message-outline",
          route: "/messages",
        },
        {
          title: "home",
          icon: "mdi-apps",
          route: "/",
        },
      ],

      clipped: false,
      drawer: false,
      fixed: false,
      
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
