<template>
  <div>
    <h1>RICK AND MORTY API</h1>
    <Cards :charactersProps="characters" />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Cards,
  },
  computed: {
    ...mapState("charactersRAM", ["characters"]),
  },

  created() {
    this.$store.dispatch("charactersRAM/getCharacters");
  },
};
</script>

<style></style>
