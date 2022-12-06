import { expect } from "chai";
import Vue from "vue";
import pokeButton from "../../src/components/pokeButton";

describe("pokeButton.vue", () => {
  let vm = null;

  beforeEach(() => {
    const container = document.createElement("div");
    const pokeButtonComp = Vue.extend(pokeButton);
    vm = new pokeButtonComp();
    vm.$mount(container);
  });

  it("should be instantianed", () => {
    //- firstChild & lastChild should not

    expect(vm.$el.firstChild.tagName).to.equal("BUTTON");
  });

  // it("should emit event when button is clicked", () => {
  //   const spy = sinon.spy(vm, '$emit');
  //   vm.$el.lastChild.click();

  //   expect(spy.called).to.be.true;

  //   console.log(spy.args);
  // });

  
  it('should be set data when click button', () => {
    vm.$el.firstChild.dispatchEvent(new Event('button'))
  } )
});
