<template>
  <div>
    <div class="card">
      <div class="pokeImg">
        <img :src="pokeImg" :alt="pokeName + 'there is not a photo'" />
      </div>
      <div class="pokeId">#{{ pokeId }}</div>
      <div class="pokeName">{{ pokeName }}</div>
      <div class="pokeType">{{ pokeType }}</div>
    </div>
    <pokeButton @randomID="pokeId = $event"></pokeButton>
  </div>
</template>

<script>
import axios from "axios";
import pokeButton from "../components/pokeButton.vue";
export default {
  components: { pokeButton },
  data() {
    return {
      pokeImg: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png`,
      pokeId: 150,
      pokeName: "mewtwo",
      pokeType: "psychic",
      random: null,
    };
  },
  methods: {
    async getPoke() {
      // let url = `https://pokeapi.co/api/v2/pokemon-form/${this.pokeId}`;

      // let res = await axios(url);
      // let data = await (res);
      // this.pokeId = data.id;
      // this.pokeName = data.name;
      // // this.pokeType = data.types[0].type.name;
      // this.pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.pokeId}.png`;

      await axios.get("" + this.pokeId).then((res) => {
        let pokemon = res.data;
        this.pokeImg = pokemon;
        this.pokeId = pokemon.id;
        this.pokeName = pokemon.name;
        this.pokeType = pokemon.types[0].type.name;
        this.pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.pokeId}.png`;
      });
    },
  },
  watch: {
    pokeId() {
      this.getPoke();
    },
  },
};
</script>

<style lang="scss" scoped></style>
