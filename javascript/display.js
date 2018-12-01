'use strict'

const resultBox = document.getElementById('result-box');

const createHtml = html => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

// Show result
const notFound = username => {
  const notFoundElement = createHtml(`
  <div id="error-msg">
    Username "${username}" does not exist.
  </div>
  `);

  resultBox.innerHTML = '';
  resultBox.appendChild(notFoundElement);
}

const userFound = data => {
  const userInfoElement = createHtml(`
    <div class="user-info">
      <img src=${data.user.avatar_url} alt="Avatar image" width="100px">

      <div class="user-name">
          <p>${data.user.login}</p>
          <h2>${data.user.name}</h2>
          <p>${data.user.bio}</p>
      </div>
      <div id="user-repos">
          <h3>Repositories</h3>
          <hr>
      </div>
    </div>
  `);

  resultBox.innerHTML = '';
  resultBox.appendChild(userInfoElement);

  const userRepos = document.getElementById('user-repos');

  for (let i = 0; i < data.repos.length; i++) {
    const userRepoElement = createHtml(`
      <div class="repo-info">
        <h4><a href="${data.repos[1].html_url}">${data.repos[i].name}<a></h4>
        <div class="forks">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Octicons-star.svg/2000px-Octicons-star.svg.png" width="10px">
          <p class="count">${data.repos[i].stargazers_count}</p>
          <img src="http://timhettler.github.io/sassconf-2015/slides/assets/svg/fork.svg" width="10px">
          <p class="count">${data.repos[i].forks_count}</p>
        </div>
        <hr>
      </div>
    `);

    userRepos.appendChild(userRepoElement);
  }

}