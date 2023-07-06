const renderer = ((storage, {ref, watch}) => {

  const items = ref([])

  watch(items, () => {
    showItems()
  })

  async function loadItems() {
    const sites = await storage.getSites()
    items.value = sites
  }
  async function removeItem(site) {
    await storage.removeSite(site)
    items.value = items.value.filter((item) => item !== site);
  }
  async function addItem(siteName) {
    await storage.addSite(siteName)
    items.value = [...items.value, siteName]
  }

  function registerClicks() {
    const inputItem = document.querySelector('#newItemInput')
    const inputButton = document.querySelector('#newItemButton')
    inputButton.onclick = async function () {
      const siteText = inputItem.value
      if(siteText && siteText.length > 0) {
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

      const removeX = document.createElement('button')
      removeX.innerText = 'x'
      removeX.onclick = async () => {
        await removeItem(site)
      }
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
    loadItems,
    addItem,
    registerClicks
  }
})(storageClient, Vue)
