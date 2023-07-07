const renderer = ((Vue, state) => {
  const { watch } = Vue

  const {
    items,
    addItem,
    removeItem
  } = state

  watch(items, () => {
    showItems()
  })

  function registerClicks() {
    const inputItem = document.querySelector('#newItemInput')
    const inputButton = document.querySelector('#newItemButton')
    inputButton.onclick = async function () {
      const siteText = inputItem.value
      const valid = isValidSite(siteText)
      if(valid) {
        await addItem(siteText)
        inputItem.value = ''
      }
    }
  }

  function isValidSite(site) {
    return isValidUrl(site)
  }

  function showItems() {
    const listDom = document.querySelector('#sites_list')
    listDom.replaceChildren([])
    const listItems = items.value.map((site) => createItem(site))
    listItems.forEach(item => {
      listDom.appendChild(item)
    })
  }

  function createItem(site) {
    try {
      const listItem = document.createElement('li')
      listItem.innerText = site
      listItem.setAttribute('key', site)

      const removeX = document.createElement('button')
      removeX.innerText = 'x'
      function onRemoveClick() {
        const removal = setTimeout(async () => {
          await removeItem(site)
        }, 20 * 1000)
        // TODO: add to a list of things being removed
        // and provide a thing to cancel them
      }
      removeX.onclick = onRemoveClick
      listItem.appendChild(removeX)

      return listItem
    }
    catch(err) {
      console.warn(err)
      return null
    }
  }

  return {
    showItems,
    registerClicks
  }
})(Vue, state)