browser.runtime.onMessage.addListener(messageListener)

function messageListener(request, detail, sendResponse) {
  switch(request.message) {
    case 'block':
      return showBlocker(request, detail)
    default:
      return { error: 'Not Implemented', detail, request }
  }
}

function showBlocker() {
  const body = document.getElementsByTagName('body')[0]
  body.innerText = 'Lol'
}
