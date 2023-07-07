browser.runtime.onInstalled.addListener(() => {
  console.log('installed')
})

browser.webNavigation.onCompleted.addListener(handleListener)

async function handleListener(details) {
  const blockedSites = await getBlockedSites()
  const url = new URL(details.url)
  const siteHost = url.host || ''
  const block = blockedSites.includes(siteHost)
  if(block) {
    await sendBlockSiteMessage(details.tabId)
  }
}

async function sendBlockSiteMessage(tabId) {
  try {
    const response = await browser.tabs.sendMessage(
      tabId,
      { message: 'block' }
    )
    console.log(response)
    return response
  } catch(err) {
    console.warn(err)
    return null
  }
}

async function getBlockedSites() {
  try {
    const storage = await browser.storage.local.get()
    return storage['blocked_sites'] || []
  } catch(err) {
    console.warn('error fetching blocked sites', err)
    return []
  }
}
