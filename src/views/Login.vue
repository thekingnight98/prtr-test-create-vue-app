<template>
  <div>
    <h1 class="text-center mt-2">Login Page</h1>
    <template>
      <v-form  @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <v-text-field
                v-model="fullName"
                placeholder="Enter your Fullname"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn class="mr-4 justify-center" @click="submit">
            submit
          </v-btn>
        </v-container>
      </v-form>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      fullName: "",
    };
  },
  methods: {
    ...mapActions(["setLoginName"]),
    submit() {
      this.setLoginName(this.fullName);
      this.$router.push({
        name: "Welcome",
      });
    },
  },
  mounted() {},
};
</script>

<style lang="css">
.text-center {
  text-align: center;
}
.justify-center {
  justify-content: center;
}
</style>
