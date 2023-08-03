const useBlockedSites = ((storage, Vue) => () => {
  const { ref } = Vue
  const items = ref([])
  const collection = storage('blocked_sites')

  async function loadItems() {
    const sites = await collection.getSites()
    items.value = sites
  }
  async function removeItem(site) {
    await collection.removeSite(site)
    items.value = items.value.filter((item) => item !== site);
  }
  async function addItem(siteName) {
    await collection.addSite(siteName)
    items.value = [...items.value, siteName]
  }
  return {
    items,
    loadItems,
    removeItem,
    addItem
  }
})(storageClient, Vue)