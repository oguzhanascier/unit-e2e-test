import { expect } from "chai";
import Vue from "vue";
import pokeButton from "../../src/components/pokeButton";

describe("pokeButton.vue", () => {
  it("should be instantianed", () => {
    const container = document.createElement("div");
    const pokeButtonComp = Vue.extend(pokeButton);
    const vm = new pokeButtonComp();
    vm.$mount(container);

    /// firstChild & lastChild should not

    expect(vm.$el.firstChild.tagName).to.equal("BUTTON");
  });


  it('should emit event when button is clicked')
});
