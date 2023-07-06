const state = ((storage, Vue) => {
  const { ref } = Vue
  const items = ref([])

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
  return {
    items,
    loadItems,
    removeItem,
    addItem
  }
})(storageClient, Vue)