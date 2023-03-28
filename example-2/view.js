class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(string) {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = string;
    this.mainContainerEl.append(newParagraph);
  }

  clearParagraphs() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p) => { 
      p.remove(); 
    });
  }
}

module.exports = View;