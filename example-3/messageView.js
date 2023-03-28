class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    const e = document.createElement('div');
    e.id = 'message';
    e.innerText = "this message is displayed by JavaScript"
    const mainEl = document.querySelector('#main-container');
    mainEl.append(e);
    console.log('new message created');
  }

  hideMessage() {
    const allEls = document.querySelectorAll("#message");
    const e = allEls[allEls.length -1];
    e.remove();
  }
}

module.exports = MessageView;