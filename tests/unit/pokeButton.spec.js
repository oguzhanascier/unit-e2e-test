import { expect } from "chai";
import Vue from "vue";
import pokeButton from "../../src/components/pokeButton";

describe("pokeButton.vue", () => {
  it("should be instantianed", () => {
    const container = document.createElement("div");
    const pokeButtonComp = Vue.extend(pokeButton);
    const vm = new pokeButtonComp();
    vm.$mount(container);

    expect(vm.$el.firstChild.tagName).to.equal('BUTTON')

  });
});
