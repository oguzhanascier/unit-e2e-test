import { expect } from "chai";
import Vue from "vue";
import pokeCard from "../../src/components/pokeCard";

describe("pokeCard.vue", () => {
  it("should list pokemon", () => {
    const container=document.createElement('div')
    const pokeCardComp = Vue.extend(pokeCard);
    const vm= new pokeCardComp({
        propsData:{
            pokemon:[
                {images: { '/assets/cms2/img/pokedex/full/': {url: '.png'}}},   
                {images: { '/assets/cms2/img/pokedex/full/': {url: '.png'}}}
            ]

        }
    })
        vm.$mount(container);
        expect(vm.pokemon.lenght).to.equal('')
  });
});
