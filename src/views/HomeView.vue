<template>
  <div>
    <h1>RICK AND MORTY API</h1>
    <Cards/>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Cards,
  },
  created() {
    this.$store.dispatch("charactersRAM/getCharacters");
  },
};
</script>

<style></style>
