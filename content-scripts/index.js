browser.runtime.onMessage.addListener(messageListener)

function messageListener(request, detail) {
  switch(request.message) {
    case 'block':
      return showBlocker(request, detail)
    default:
      return { error: 'Not Implemented', detail, request }
  }
}

let countdownTimer;
function hideBlocker() {
  const screens = document.querySelectorAll('#block__screen')
  screens.forEach(screen => [
    screen.remove()
  ])
  countdownTimer = undefined
}


function startCountdown(textElement, seconds, remindInMinutes) {
  let remaining = seconds
  textElement.innerText = `${remaining}s left`
  let counter = setInterval(() => {
    if(remaining > 1) {
      remaining--
      textElement.innerText = `${remaining}s left`
    } else {
      clearInterval(counter)
      hideBlocker()
      if(remindInMinutes) {
        const remindIn = 1000 * 60 * remindInMinutes
        setTimeout(() => {
          showBlocker()
        }, remindIn)
      }
    }
  }, 1000)
}

function showBlocker() {
  const body = document.getElementsByTagName('body')[0]
  const screen = document.createElement('div')
  screen.id = 'block__screen'
  screen.style = [
    'width: 100vw',
    'height: 100vh',
    'z-index: 9999',
    'position: fixed',
    'display: flex',
    'justify-content: center',
    'align-items: middle',
    'background-color: white'
  ].join(';')

  const wrapper = document.createElement('span')

  const text = document.createElement('p')
  text.innerText = 'App is blocked'
  text.id = 'block__text'
  const button = document.createElement('button')
  button.innerText = 'unpause'
  button.id = 'block__button'
  const countdown = document.createElement('p')
  countdown.innerText = ''
  countdown.id = 'block__countdown'
  button.onclick = () => {
    // TODO: make this configurable
    // TODO: exponential backoff with cap
    if(!countdownTimer) {
      countdownTimer = true
      startCountdown(countdown, 15, 5)
    }
  }

  wrapper.appendChild(text)
  wrapper.appendChild(button)
  wrapper.appendChild(countdown)
  screen.appendChild(wrapper)
  body.prepend(screen)
}
