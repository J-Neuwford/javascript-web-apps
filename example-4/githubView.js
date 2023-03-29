class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.name = repoData.name;
        this.description = repoData.description;
        this.profilePicture = repoData.organization.avatar_url;
        this.display();
      });
    });
  }

  display() {
    console.log(this.name);
    console.log(this.description);
    console.log(this.profilePicture);

    const nameEl = document.querySelector('#repo-name');
    nameEl.innerText = this.name;

    const descriptionEl = document.querySelector('#repo-description');
    descriptionEl.innerText = this.description;

    const pictureEl = document.querySelector('#profile-picture');
    pictureEl.src = this.profilePicture;


  }
}

module.exports = GithubView;