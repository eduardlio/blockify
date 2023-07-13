const renderer = ((Vue, useBlockedSites, urlHelpers) => {
  const { watch } = Vue
  const { isValidUrl } = urlHelpers

  const {
    items,
    addItem,
    removeItem,
    loadItems
  } = useBlockedSites()

  watch(items, () => {
    showItems()
  })

  function mount() {
    registerClicks()
    loadItems()
  }

  function registerClicks() {
    const inputItem = document.querySelector('#newItemInput')
    const inputButton = document.querySelector('#newItemButton')
    inputButton.onclick = async function () {
      const siteText = inputItem.value
      const valid = isValidUrl(siteText)
      if(valid) {
        await addItem(siteText)
        inputItem.value = ''
      }
    }
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

      let removing = false
      const removeX = document.createElement('button')

      function onCancelRemoveClick(interval) {
        clearInterval(interval)
        removing = false
        removeX.innerText = 'x',
        removeX.onclick = onRemoveClick
      }

      function onRemoveClick() {
        removing = true
        let counter = 20
        removeX.innerText = `Cancel ${counter}s`
        removeX.onclick = () => onCancelRemoveClick(interval)
        const interval = setInterval(async () => {
          if(counter > 1) {
            counter--
            removeX.innerText = `Cancel ${counter}s`
          } else {
            await removeItem(site)
          }
        }, 1000)
        // TODO: add to a list of things being removed
        // and provide a thing to cancel them
      }

      removeX.innerText = 'x'
      removeX.onclick = () => onRemoveClick()
      listItem.appendChild(removeX)

      return listItem
    }
    catch(err) {
      console.warn(err)
      return null
    }

  }

  return {
    mount
  }
})(Vue, useBlockedSites, urlHelpers)