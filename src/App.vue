<template>
  <div id="app">
    <pokeCard></pokeCard>
  </div>
</template>

<script>
import pokeCard from "./components/pokeCard.vue";
export default {
  name: "App",
  components: {
    pokeCard,
  },
};
</script>

<style lang="scss">
@mixin display() {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin bg() {
  background: #dde1e7;
}

@mixin widthHeight($w, $h) {
  width: $w;
  height: $h;
}

@mixin fontWeightSize($weight, $size) {
  font-weight: $weight;
  font-size: $size;
}

@mixin boxShadow() {
  box-shadow: -1px -1px 4px #fffff7b2, 2px 2px 5px rgba(94, 104, 121, 0.288);
}

* {
  margin: 0;
  padding: 0;
}

body {
  @include bg();
  font-family: "Courier New", Courier, monospace;
}

#app {
  @include display();
  height: 100vh;
}

.card {
  @include display();
  @include bg();
  @include widthHeight(350px, 450px);
  padding: 9px;
  border-radius: 20px;
  flex-direction: column;
  @include boxShadow();

  .pokeImg {
    @include widthHeight(100%, 100%);
    @include display();

    img {
      @include widthHeight(85%, 85%);
      border: none;
      filter: drop-shadow( 25px -25px 9px rgba(94, 104, 121));


    }
  }
  .pokeId {
    @include fontWeightSize(600, 16px);
  }
  .pokeName {
    @include fontWeightSize(500, 20px);
    margin: 12px;
  }
  .pokeType {
    @include fontWeightSize(300, 14px);
  }
}

.changePoke {
  @include bg();
  @include widthHeight(100%, 50px);
  @include boxShadow();
  @include fontWeightSize(500, 18px);
  margin-top: 50px;
  border-radius: 20px;
  border: 1px solid #1b1b1905;
  cursor: pointer;
  // transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: -5px -5px 6px #fffff723,
      2px 2px 5px rgba(94, 104, 121, 0.288) inset;
    border: 1px solid #1b1b1937;
  }
}
</style>
