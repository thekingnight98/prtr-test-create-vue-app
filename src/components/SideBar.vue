<template>
  <v-navigation-drawer v-model="drawer" permanent color="#F4F5F9" app>
    <v-list-item class="px-2 py-5">
      <v-list-item-title class="text-capitalize" align="center">
        <v-icon x-large>fab fa-bitcoin</v-icon> Web Login
      </v-list-item-title>
    </v-list-item>
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="deep-purple">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="checkRedirect(item.route)">
            <router-link :to="item.route" tag="span">
            <v-list-item-title v-text="item.text"></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      { icon: "fas fa-home", text: "Stock", route: "stock" },
      {
        icon: "fas fa-money-check-alt",
        text: "List",
        route: "list",
      },
      { icon: "fas fa-dolly", text: "Logout", route: "logout" },
    ],
  }),
  methods: {
    ...mapActions(["setLoginName"]),
    checkRedirect(page) {
      console.log("page =", page);
      if (page == "logout") {
        this.setLoginName("");
        this.$router.push({
          name: "Login",
        });
      } 
      // else {
      //   this.$router.push({
      //     name: page,
      //   });
      // }
    },
  },
};
</script>
<style scoped>
div >>> .v-list a {
  text-decoration: none;
}
</style>
