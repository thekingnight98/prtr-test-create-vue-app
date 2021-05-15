<template>
  <v-app class="grey lighten-4">
    <SideBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import SideBar from './components/SideBar';
import '../src/assets/css/index.css'
export default {
  name: "App",
  components: { SideBar },
  data: () => ({
    //
  }),
  computed: {
    ...mapState(["loginName"]),
  },
};
</script>
