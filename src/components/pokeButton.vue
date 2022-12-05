<template>
  <div>
    <button class="changePoke" @click="getId">Random Pokemon</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async getId() {
      let randomNumber = await Math.floor(Math.random() * 905 + 1);

      await this.$emit("randomID", randomNumber);
    },
  },
};
</script>

<style lang="scss" scoped></style>
