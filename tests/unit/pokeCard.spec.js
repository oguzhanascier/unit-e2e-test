import { expect } from "chai";
import Vue from "vue";
import pokeCard from "../../src/components/pokeCard";

describe("pokeCard.vue", () => {
  it("should list pokemon", () => {
    const container = document.createElement("div");
    const pokeCardComp = Vue.extend(pokeCard);
    const vm = new pokeCardComp({
      propsData: {
        pokemon: [],
      },
    });
    vm.$mount(container);
    expect(vm.$el.querySelectorAll("img").length).to.equal(1);
  });
});
