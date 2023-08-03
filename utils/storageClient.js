/**
 * @module storageClient
 * @param {string} name browser storage key name
 */
const storageClient = ((name) => {
  /**
   * @returns {Promise<string[]>} an array containing blocked sites
   */
  async function getSites() {
    try {
      const storage = await browser.storage.local.get()
      return storage[name] || []
    } catch(err) {
      console.warn('error fetching blocked sites', err)
      return []
    }
  }

  /**
   * 
   * @param {string} toRemove Site to remove from block list
   * @returns {Promise<void>}
   */
  async function removeSite(toRemove) {
    const sites = await getSites()
    if(sites.includes(toRemove)) {
      const filtered = sites.filter(site => site !== toRemove)
      await setSites(filtered)
    }
  }
  
  /**
   * 
   * @param {string} toAdd Site to add to blocked list. Should be a Fully Qualified Domain Name (not currently enforced)
   * @returns {Promise<void>}
   */
  async function addSite(toAdd) {
    const sites = await getSites()
    if(!sites.includes(toAdd)) {
      await setSites([...sites, toAdd])
    }
  }

  /**
   * 
   * @param {String[]} sites list of sites to set as 
   * @returns {Promise<void>}
   */
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
})