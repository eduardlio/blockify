const storageClient = (() => {
  const name = 'blocked_sites'
  async function getSites() {
    try {
      const storage = await browser.storage.local.get()
      return storage[name] || []
    } catch(err) {
      console.warn('error fetching blocked sites', err)
      return []
    }
  }

  async function removeSite(toRemove) {
    const sites = await getSites()
    if(sites.includes(toRemove)) {
      const filtered = sites.filter(site => site !== toRemove)
      await setSites(filtered)
    }
  }
  async function addSite(toAdd) {
    const sites = await getSites()
    if(!sites.includes(toAdd)) {
      await setSites([...sites, toAdd])
    }
  }

  async function setSites(sites) {
    await browser.storage.local.set({
      [name]: sites
    })
  }

  return {
    getSites,
    removeSite,
    addSite
  }
})()