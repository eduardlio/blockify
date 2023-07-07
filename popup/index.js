const main = ((renderer, state) => {
  renderer.registerClicks()
  state.loadItems()
})(renderer, state)