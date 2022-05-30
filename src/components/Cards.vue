<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div
        class="card col-2 m-4 p-0"
        style="width: 25%"
        v-for="item in characters"
        :key="item.id"
      >
        <img :src="item.image" class="card-img-top" alt="item.name" />
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">
            {{ item.location.name }}
          </p>
          <p class="btn btn-primary">{{ item.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cards",
  computed: {
    ...mapState("charactersRAM", ["characters"]),
  },
};
</script>

<style></style>
