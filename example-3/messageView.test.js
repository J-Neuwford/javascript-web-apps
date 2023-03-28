/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })
  it('clicks the button', () => {
    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('clicks the hide message button', () => {
    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    const hideButtonEl = document.querySelector('#hide-message-button');
    buttonEl.click();
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});