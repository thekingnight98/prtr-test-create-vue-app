<template>
  <div>
    <div class="header">
      <div class="padding-content">
        <div class="white-content">
          <v-row>
            <img class="profile" src="../assets/img/profile.svg" alt="" />
            <div class="text-center ml-2">ยินดีต้อนรับ คุณ {{ loginName }}</div>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["loginName"]),
  },
};
</script>

<style>
.header {
  background-color: #D433FF;
  height: 300px !important;
  width: 100%;
}
.padding-content {
  padding-top: 7%;
}
.white-content {
  width: 600px;
  background-color: #fff;
  border-radius: 16px;
  justify-content: center;
  margin: auto;
  height: 100px;
}
.text-center {
  padding-top: 20px;
  font-size: 34px;
  color: #8b9793;
}
.profile {
  margin-top: 10px;
  margin-left:30px;
}
</style>
