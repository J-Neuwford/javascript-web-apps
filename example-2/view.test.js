/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 2 paragraphs', () => {
    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('displays 3 paragraphs', () => {
    const view = new View();
    view.addParagraph('hello!!');
    const x = document.querySelectorAll('p').length
    expect(x).toBe(3);
  });

  it('removes all paragraphs', () => {
    const view = new View();
    view.clearParagraphs();
    const x = document.querySelectorAll('p').length;
    expect(x).toBe(0);
  });
});