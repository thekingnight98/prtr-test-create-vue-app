<template>
  <div class="container-padding">
    <!-- {{stockData}} -->
    <h1>List.</h1>

    <v-btn @click="addMockData()" class="mt orange">Add mock Data</v-btn><br />
    <span class="error-word">ใช้สำหรับเทส ดูรูปภาพเท่านั้น !!!</span>

    <v-row>
      <v-col
        v-for="(stock, index) in stockData"
        stockData
        :key="index"
        class="d-flex child-flex"
        cols="4"
      >
        <h2 class="image-name">image Name : {{ stock.name }}</h2>
        <v-img
          class="image-upload grey lighten-2"
          :src="stock.imageUrl"
          aspect-ratio="1"
          alt="img-upload"
          srcset=""
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setDataStock", "setCheckMock"]),
    addMockData() {
      const mockupData = [
        {
          id: 1,
          name: "flower",
          imageUrl:
            "https://images.pexels.com/photos/5174436/pexels-photo-5174436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 2,
          name: "flower222",
          imageUrl:
            "https://images.pexels.com/photos/612334/pexels-photo-612334.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 3,
          name: "flower333",
          imageUrl:
            "https://images.pexels.com/photos/1405699/pexels-photo-1405699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 4,
          name: "egg",
          imageUrl:
            "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ];
      this.setDataStock(mockupData);
      this.setCheckMock(true);
    },
  },
  computed: {
    ...mapState(["stockData"]),
  },
};
</script>

<style lang="css" scoped></style>
